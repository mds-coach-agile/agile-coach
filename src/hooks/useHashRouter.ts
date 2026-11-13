import { useState, useEffect, useCallback } from 'react';

export type AppView = 'home' | 'articles' | 'article-detail' | 'practice';
export type PracticeSubView = 'hub' | 'conflict' | 'quiz';

export interface RouteState {
  view: AppView;
  practiceSubView?: PracticeSubView;
  articleId?: string;
  fromQuiz?: boolean;
  questionId?: string;
  anchor?: string;
}

const parseHash = (hash: string): RouteState => {
  // Normalize hash, e.g. "#/articles/stances?from=quiz&q=q2"
  const cleanHash = hash.replace(/^#\/?/, '');
  const [pathAndAnchor, queryStr] = cleanHash.split('?');
  const [path, anchor] = pathAndAnchor.split('#');

  const queryParams = new URLSearchParams(queryStr || '');
  const fromQuiz = queryParams.get('from') === 'quiz';
  const questionId = queryParams.get('q') || undefined;

  const parts = path.split('/').filter(Boolean);

  if (parts.length === 0) {
    return { view: 'home', anchor };
  }

  if (parts[0] === 'articles') {
    if (parts.length > 1 && parts[1]) {
      return {
        view: 'article-detail',
        articleId: parts[1],
        fromQuiz,
        questionId,
        anchor,
      };
    }
    return { view: 'articles', fromQuiz, anchor };
  }

  if (parts[0] === 'practice') {
    const sub = parts[1];
    if (sub === 'conflict' || anchor === 'conflict') {
      return {
        view: 'practice',
        practiceSubView: 'conflict',
        anchor: 'conflict',
        fromQuiz,
        questionId,
      };
    }
    if (sub === 'quiz' || anchor === 'quiz') {
      return {
        view: 'practice',
        practiceSubView: 'quiz',
        anchor: 'quiz',
        fromQuiz,
        questionId,
      };
    }
    return {
      view: 'practice',
      practiceSubView: 'hub',
      anchor,
      fromQuiz,
      questionId,
    };
  }

  if (parts[0] === 'quiz') {
    return {
      view: 'practice',
      practiceSubView: 'quiz',
      anchor: 'quiz',
      fromQuiz,
      questionId,
    };
  }

  if (parts[0] === 'conflict') {
    return {
      view: 'practice',
      practiceSubView: 'conflict',
      anchor: 'conflict',
      fromQuiz,
      questionId,
    };
  }

  // Anchor on home, e.g. #roles, #stances, #overview, etc.
  return { view: 'home', anchor: parts[0] };
};

export const useHashRouter = () => {
  const [route, setRoute] = useState<RouteState>(() => {
    if (typeof window === 'undefined') return { view: 'home' };
    return parseHash(window.location.hash);
  });

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = parseHash(window.location.hash);
      setRoute(newRoute);
      
      // If navigating to an article or top of page, scroll to top unless anchor is present
      if (!newRoute.anchor) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        const el = document.getElementById(newRoute.anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = useCallback((anchor?: string) => {
    if (anchor) {
      window.location.hash = `#${anchor}`;
    } else {
      window.location.hash = '#/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const navigateToArticles = useCallback(() => {
    window.location.hash = '#/articles';
  }, []);

  const navigateToPractice = useCallback((subViewOrAnchor?: PracticeSubView | string) => {
    if (subViewOrAnchor === 'conflict') {
      window.location.hash = '#/practice/conflict';
    } else if (subViewOrAnchor === 'quiz') {
      window.location.hash = '#/practice/quiz';
    } else if (subViewOrAnchor && subViewOrAnchor !== 'hub') {
      window.location.hash = `#/practice#${subViewOrAnchor}`;
    } else {
      window.location.hash = '#/practice';
    }
  }, []);

  const navigateToArticle = useCallback((articleId: string, options?: { fromQuiz?: boolean; questionId?: string }) => {
    const query = new URLSearchParams();
    if (options?.fromQuiz) query.set('from', 'quiz');
    if (options?.questionId) query.set('q', options.questionId);
    
    const queryString = query.toString() ? `?${query.toString()}` : '';
    window.location.hash = `#/articles/${articleId}${queryString}`;
  }, []);

  const returnToQuiz = useCallback((questionId?: string) => {
    const query = questionId ? `?q=${questionId}` : '';
    window.location.hash = `#/practice#quiz${query}`;
  }, []);

  return {
    route,
    navigateToHome,
    navigateToArticles,
    navigateToPractice,
    navigateToArticle,
    returnToQuiz,
  };
};

