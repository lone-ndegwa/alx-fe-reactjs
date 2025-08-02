import axios from 'axios';

export const searchUsers = async (username, location, minRepos) => {
  const q = [
    username ? `${username} in:login` : '',
    location ? `location:${location}` : '',
    minRepos ? `repos:>=${minRepos}` : ''
  ]
    .filter(Boolean)
    .join(' ');

  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(q)}`);
  return response.data;
};
