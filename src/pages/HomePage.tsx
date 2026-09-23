import React from 'react';
import {
  Hero,
  TracksOverview,
  EventIntroduction,
  JourneyTeaser,
  EligibilityPreview,
  CTASection
} from '../components/sections';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <TracksOverview />
      <EventIntroduction />
      <JourneyTeaser />
      <EligibilityPreview />
      <CTASection />
    </>
  );
};
