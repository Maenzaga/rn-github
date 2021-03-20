import axios from 'axios';
import { Repository } from 'models';

// enum Endpoints {}

export const GithubService = (() => {
  const instance = axios.create({
    // baseURL: 'https://api.github.com/',
    headers: { Accept: 'application/vnd.github.v3+json' },
  });

  const fetchRepositories = (username: string) =>
    instance.get<Repository[]>(
      `https://api.github.com/users/${username}/repos`,
    );

  return {
    fetchRepositories,
  };
})();
