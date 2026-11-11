/**
 * Core Domain & Quiz Types for Agile Coach Learning Hub
 */

export type RoleType = 'agile-coach' | 'scrum-master' | 'project-manager';

export interface RoleComparisonData {
  id: RoleType;
  title: string;
  tagline: string;
  scope: string;
  authorityStyle: string;
  primaryFocus: string;
  conflictResponse: string;
  keyQuestion: string;
  successMetric: string;
  keyDeliverable: string;
}

export interface RoleScenarioItem {
  id: string;
  situation: string;
  context: string;
  agileCoachAction: string;
  scrumMasterAction: string;
  projectManagerAction: string;
}

export type StanceType = 'teacher' | 'mentor' | 'facilitator' | 'coach';

export interface CoachingStanceItem {
  id: StanceType;
  title: string;
  subtitle: string;
  definition: string;
  stancePosture: string;
  idealSituation: string;
  antiPatternTrap: string;
  powerfulQuestions: string[];
  realWorldExample: string;
}

export interface ConflictLevelItem {
  level: number;
  name: string;
  description: string;
  typicalLanguage: string;
  coachResponse: string;
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  rationale: string;
}

export interface QuizQuestion {
  id: string;
  category: 'roles' | 'stances' | 'facilitation' | 'conflict';
  categoryLabel: string;
  scenario: string;
  question: string;
  options: QuizOption[];
  coachingTakeaway: string;
  relatedArticleId: string;
  relatedArticleTitle: string;
  recommendedReadingHint?: string;
}

export interface QuizContextValue {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  activeFilter: string;
  selectedAnswers: Record<string, string>; // questionId -> optionId
  revealedQuestions: Record<string, boolean>; // questionId -> boolean
  score: number;
  answeredCount: number;
  isComplete: boolean;
  
  // Actions
  selectAnswer: (questionId: string, optionId: string) => void;
  submitAnswer: (questionId: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  jumpToQuestion: (index: number) => void;
  setCategoryFilter: (category: string) => void;
  resetQuiz: () => void;
  
  // Modal gateway to full assessment
  isFullAssessmentModalOpen: boolean;
  setFullAssessmentModalOpen: (open: boolean) => void;
}

export interface ProgressContextValue {
  completedArticles: string[];
  isArticleCompleted: (articleId: string) => boolean;
  markArticleCompleted: (articleId: string) => void;
  unmarkArticleCompleted: (articleId: string) => void;
  toggleArticleCompleted: (articleId: string) => void;
  resetProgress: () => void;
  completedCount: number;
  totalArticlesCount: number;
  progressPercentage: number;
}
