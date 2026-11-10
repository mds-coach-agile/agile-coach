/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { QuizProvider } from './context/QuizContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LearningPathsOverview } from './components/LearningPathsOverview';
import { RoleComparisonSection } from './components/RoleComparisonSection';
import { CoachingStancesSection } from './components/CoachingStancesSection';
import { ConflictLevelsSection } from './components/ConflictLevelsSection';
import { InteractiveQuizWidget } from './components/InteractiveQuizWidget';
import { FullAssessmentModal } from './components/FullAssessmentModal';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <QuizProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <LearningPathsOverview />
          <RoleComparisonSection />
          <CoachingStancesSection />
          <ConflictLevelsSection />
          <InteractiveQuizWidget />
        </main>
        <Footer />
        <FullAssessmentModal />
      </div>
    </QuizProvider>
  );
}
