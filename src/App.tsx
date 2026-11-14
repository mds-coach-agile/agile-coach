/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { QuizProvider } from './context/QuizContext';
import { ProgressProvider } from './context/ProgressContext';
import { useHashRouter } from './hooks/useHashRouter';
import { ARTICLES_DATA } from './data/articlesData';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LearningPathsOverview } from './components/LearningPathsOverview';
import { RoleComparisonSection } from './components/RoleComparisonSection';
import { CoachingStancesSection } from './components/CoachingStancesSection';
import { PracticeGatewaySection } from './components/PracticeGatewaySection';
import { FullAssessmentModal } from './components/FullAssessmentModal';
import { ArticlePage } from './components/ArticlePage';
import { ArticlesCatalog } from './components/ArticlesCatalog';
import { PracticePage } from './components/PracticePage';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const {
    route,
    navigateToHome,
    navigateToArticles,
    navigateToPractice,
    navigateToArticle,
    returnToQuiz,
  } = useHashRouter();

  // If on practice view
  if (route.view === 'practice') {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar
          currentView="practice"
          onNavigateHome={navigateToHome}
          onNavigateArticles={navigateToArticles}
          onNavigatePractice={navigateToPractice}
        />
        <main className="flex-1">
          <PracticePage
            subView={route.practiceSubView}
            initialAnchor={route.anchor}
            onNavigateHome={() => navigateToHome()}
            onNavigateArticles={navigateToArticles}
            onNavigatePractice={navigateToPractice}
            onNavigateToArticle={navigateToArticle}
          />
        </main>
        <Footer />
        <FullAssessmentModal
          onNavigateToArticle={navigateToArticle}
          onNavigateArticles={navigateToArticles}
        />
      </div>
    );
  }

  // If on article details view
  if (route.view === 'article-detail' && route.articleId) {
    const article = ARTICLES_DATA.find((a) => a.id === route.articleId);
    if (article) {
      return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
          <Navbar
            currentView="article-detail"
            onNavigateHome={navigateToHome}
            onNavigateArticles={navigateToArticles}
            onNavigatePractice={navigateToPractice}
          />
          <main className="flex-1">
            <ArticlePage
              article={article}
              fromQuiz={route.fromQuiz}
              questionId={route.questionId}
              onNavigateHome={() => navigateToHome()}
              onNavigateArticles={navigateToArticles}
              onNavigateToArticle={navigateToArticle}
              onReturnToQuiz={returnToQuiz}
            />
          </main>
          <Footer />
          <FullAssessmentModal
            onNavigateToArticle={navigateToArticle}
            onNavigateArticles={navigateToArticles}
          />
        </div>
      );
    }
  }

  // If on full articles catalog view
  if (route.view === 'articles') {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar
          currentView="articles"
          onNavigateHome={navigateToHome}
          onNavigateArticles={navigateToArticles}
          onNavigatePractice={navigateToPractice}
        />
        <main className="flex-1">
          <ArticlesCatalog
            onNavigateHome={() => navigateToHome()}
            onNavigateToArticle={navigateToArticle}
            onReturnToQuiz={returnToQuiz}
          />
        </main>
        <Footer />
        <FullAssessmentModal
          onNavigateToArticle={navigateToArticle}
          onNavigateArticles={navigateToArticles}
        />
      </div>
    );
  }

  // Default: Main Hub View
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar
        currentView="home"
        onNavigateHome={navigateToHome}
        onNavigateArticles={navigateToArticles}
        onNavigatePractice={navigateToPractice}
      />
      <main className="flex-1">
        <HeroSection onNavigatePractice={navigateToPractice} />
        <LearningPathsOverview
          onNavigateToArticle={navigateToArticle}
          onNavigateArticles={navigateToArticles}
        />
        <RoleComparisonSection />
        <CoachingStancesSection onNavigatePractice={navigateToPractice} />
        <PracticeGatewaySection onNavigatePractice={navigateToPractice} />
      </main>
      <Footer />
      <FullAssessmentModal
        onNavigateToArticle={navigateToArticle}
        onNavigateArticles={navigateToArticles}
      />
    </div>
  );
};

export default function App() {
  return (
    <ProgressProvider>
      <QuizProvider>
        <AppContent />
      </QuizProvider>
    </ProgressProvider>
  );
}
