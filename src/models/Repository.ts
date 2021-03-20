export type Repository = {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url?: string;
  };
};
