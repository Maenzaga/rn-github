import { useState, useEffect, useCallback } from 'react';
import { Repository } from 'models';
import { GithubService } from 'services';

export const useFetchUserRepos = (username: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [hasError, setHasError] = useState(false);

  const getRepos = useCallback(async () => {
    try {
      const { data } = await GithubService.fetchRepositories(username);
      setRepos(data);
      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    getRepos();
  }, [getRepos]);

  return { isLoading, repos, hasError, getRepos };
};
