# ELOQVENT 2K26 — Registration Service & Backend Integration Architecture

## 1. Overview & Current Registration State
The frontend registration portal (`/register`) for **ELOQVENT 2K26** is built with full client-side validation, accessible keyboard navigation, responsive layout controls, and conditional team/individual state handling.

### Current Implementation Status:
- **Client Status**: Fully functional frontend with accessible validation.
- **Backend Status**: **Pending Activation**. No live production registration endpoint is currently deployed.
- **Behavior**: In the absence of an environment variable (`VITE_REGISTRATION_API_URL`), the client function `submitRegistration()` in `src/lib/registration.ts` returns a clean `NOT_CONFIGURED` response status.
- **Honesty Guarantee**: The application does **not** pretend to store records or generate fake confirmation IDs when no backend is configured.

---

## 2. Submission Logic & Integration Point
All form submission requests are encapsulated within a single, dedicated integration module:

```
src/lib/registration.ts
```

### Function Signature:
```typescript
export async function submitRegistration(formData: RegistrationFormData): Promise<RegistrationResult>
```

---

## 3. Registration Data Shape (Payload Specification)

When a participant submits the form, the following structured JSON payload is passed to `submitRegistration()`:

```typescript
export interface RegistrationFormData {
  track: 'elocution' | 'innovex';
  participantType: 'individual' | 'team';
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  department: string;
  yearOfStudy: string;
  teamName?: string;
  teamMembers?: Array<{
    id: string;
    fullName: string;
    email: string;
    phone?: string;
    institution?: string;
  }>;
  selectedTheme?: string;
  problemStatementIdea?: string;
  optionalMessage?: string;
  agreeToCodeOfConduct: boolean;
}
```

---

## 4. Connecting a Live Backend Service

To connect a live registration backend (e.g., Express/Node.js API, Serverless Function, Google Apps Script, Supabase, or AWS Lambda):

### Step 1: Set the API Endpoint Environment Variable
In your root `.env` or deployment environment configuration:

```env
VITE_REGISTRATION_API_URL=https://api.yourdomain.com/api/register
```

### Step 2: Expected Server Response Formats

#### Success Response (`200 OK` or `201 Created`):
```json
{
  "status": "SUCCESS",
  "referenceId": "ELQ-2026-X8Y9Z",
  "message": "Registration received and confirmed.",
  "timestamp": "2026-09-20T10:00:00.000Z"
}
```

#### Error Response (`400 Bad Request` or `500 Internal Server Error`):
```json
{
  "status": "ERROR",
  "message": "Detailed error message suitable for user display (e.g., Registration quota exceeded for this track)."
}
```

---

## 5. Security & Environment Configuration

### Security Rules:
1. **Never commit secrets to client code**: Client-side environment variables prefixed with `VITE_` are publicly accessible in the browser bundle. Never put database connection strings, secret keys, or service credentials in client code.
2. **Server-Side Secret Storage**: All database credentials, mail server SMTP tokens, or Google Sheets service account keys must reside solely on the backend server.
3. **Data Sanitization**: The backend must independently validate and sanitize all submitted fields (email format, string lengths, payload schemas).

---

## 6. Environment Variables (`.env.example`)

```env
# ==========================================
# ELOQVENT 2K26 — Client Environment Configuration
# ==========================================

# Official Registration API Gateway Endpoint
# Leave empty or unset to operate in transparent NOT_CONFIGURED mode.
VITE_REGISTRATION_API_URL=
```

---

## 7. Safe Testing & Verification

1. **Unconfigured Mode Test**: Run `npm run dev` with `VITE_REGISTRATION_API_URL` left unset. Submit a valid form and verify the gateway displays the honest *"Registration Gateway Pending Activation"* view with zero fake confirmation claims.
2. **Validation Test**: Click "SUBMIT REGISTRATION" on an empty form. Confirm that specific error messages appear and focus automatically shifts to the first invalid input (`fullName`).
3. **Live Backend Test**: Provide a mock or staging endpoint in `.env`, submit the form, and confirm that `SUCCESS` transitions display the server-returned reference ID.
