import { RegistrationFormData } from '../types';

export type RegistrationStatus = 'SUCCESS' | 'ERROR' | 'NOT_CONFIGURED';

export interface RegistrationResult {
  status: RegistrationStatus;
  message: string;
  referenceId?: string;
  timestamp: string;
  data?: RegistrationFormData;
}

/**
 * Single backend integration point for ELOQVENT 2K26 registration submissions.
 * If an active backend API endpoint is defined in VITE_REGISTRATION_API_URL, it performs a secure POST request.
 * Otherwise, it transparently returns NOT_CONFIGURED to ensure no fake storage or confirmation claims are made.
 */
export async function submitRegistration(formData: RegistrationFormData): Promise<RegistrationResult> {
  const apiEndpoint = (import.meta as any).env?.VITE_REGISTRATION_API_URL;
  const timestamp = new Date().toISOString();

  // If no live backend URL is configured, return the NOT_CONFIGURED state honestly.
  if (!apiEndpoint || typeof apiEndpoint !== 'string' || apiEndpoint.trim() === '') {
    // Return honest unconfigured response
    return {
      status: 'NOT_CONFIGURED',
      message: 'The official online registration gateway is pending organizer activation. Your details have been validated by the frontend client, but no registration backend is currently configured to store submissions.',
      timestamp,
      data: formData
    };
  }

  // Live Backend Mode (when VITE_REGISTRATION_API_URL is configured)
  try {
    const response = await fetch(apiEndpoint.trim(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const responseData = await response.json();
      return {
        status: 'SUCCESS',
        referenceId: responseData.referenceId,
        message: responseData.message || 'Registration successfully received and confirmed.',
        timestamp: responseData.timestamp || timestamp,
        data: formData
      };
    } else {
      const errorData = await response.json().catch(() => ({}));
      return {
        status: 'ERROR',
        message: errorData.message || 'We could not complete your registration request. Please try again later or contact the organizers.',
        timestamp,
        data: formData
      };
    }
  } catch (err: any) {
    return {
      status: 'ERROR',
      message: 'Network connection failed while reaching the registration gateway. Please check your connection and try again.',
      timestamp,
      data: formData
    };
  }
}
