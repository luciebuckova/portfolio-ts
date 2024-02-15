/* import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: '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',
});

interface Repo {
  name: string;
  lastUpdated: string;
  description: string;
}

async function fetchRepos() {
  try {
    const { data } = await octokit.request('GET /users/{username}/repos', {
      username: 'luciebuckova',
      per_page: 3,
      sort: 'updated',
    });

    const repos = data.map((repo: any) => ({
      name: repo.name,
      lastUpdated: repo.updated_at,
      description: repo.description,
    }));

    return repos;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
}

export default function RepoList() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reposData = await fetchRepos();
        setRepos(reposData);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <ul>
        {repos.map((repo) => (
          <li
            key={repo.name}
            className="w-full flex justify-between items-center bg-neutral-100 dark:bg-neutral-900 mb-4 p-8 rounded-lg">
            <div className="text-left">
              <p>{repo.name}</p>
              <p>{repo.description}</p>
            </div>
            <div>
              <a
                className="btn-primary"
                href={`https://github.com/luciebuckova/${repo.name}`}>
                Navštívit
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} */
