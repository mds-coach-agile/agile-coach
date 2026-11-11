import { useState, useEffect, useCallback } from 'react';

export type AppView = 'home' | 'articles' | 'article-detail';

export interface RouteState {
  view: AppView;
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

  // Anchor on home, e.g. #quiz, #roles, #stances, etc.
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

  const navigateToArticle = useCallback((articleId: string, options?: { fromQuiz?: boolean; questionId?: string }) => {
    const query = new URLSearchParams();
    if (options?.fromQuiz) query.set('from', 'quiz');
    if (options?.questionId) query.set('q', options.questionId);
    
    const queryString = query.toString() ? `?${query.toString()}` : '';
    window.location.hash = `#/articles/${articleId}${queryString}`;
  }, []);

  const returnToQuiz = useCallback((questionId?: string) => {
    window.location.hash = '#quiz';
    const el = document.getElementById('quiz');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return {
    route,
    navigateToHome,
    navigateToArticles,
    navigateToArticle,
    returnToQuiz,
  };
};

