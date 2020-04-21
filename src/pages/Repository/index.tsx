import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link, useRouteMatch } from "react-router-dom";

import logo from "../../assets/logo.svg";
import api from "../../config/api";
import { Header, Content, Info, Issues } from "./styles";

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };

  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
    avatar_url: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  async function loadIssues(
    repositoryFullName: string,
  ): Promise<Issue[] | null> {
    const response = await api.get(`repos/${repositoryFullName}/issues`);

    return response.data;
  }

  /**
   * Load Repository and Issues
   */
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const repositoryPromise = api.get<Repository>(
        `repos/${params.repository}`,
      );
      const issuesPromise = api.get<Issue[]>(
        `repos/${params.repository}/issues`,
      );

      const [repositoryResponse, issuesResponse] = await Promise.all([
        repositoryPromise,
        issuesPromise,
      ]);

      setIssues(issuesResponse.data);
      setRepository(repositoryResponse.data);
    }

    fetchData();
  }, [params.repository]);

  /**
   * Load Issues
   */
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const issuesResponse = await loadIssues(params.repository);

      if (!issuesResponse) {
        return;
      }

      setIssues(issuesResponse);
    }

    fetchData();
  }, [params.repository]);

  /**
   * Load local Repository
   */
  useEffect(() => {
    const storageRepositories = localStorage.getItem(
      "@github-explorer:repositories",
    );

    if (!storageRepositories) {
      return;
    }

    const repositories = JSON.parse(storageRepositories) as Repository[];

    const repositoryExists = repositories.find(
      repositoryItem =>
        repositoryItem.full_name.toUpperCase() ===
        params.repository.toUpperCase(),
    );

    if (!repositoryExists) return;

    setRepository(repositoryExists);
  }, [params.repository]);

  return (
    <>
      {repository && (
        <>
          <Header>
            <img src={logo} alt="Github Explorer" />
            <Link to="/">
              <FiChevronLeft size={20} />
              Voltar
            </Link>
          </Header>
          <Content>
            <header>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <Info>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </Info>
            </header>
            <div>
              <Info>
                <strong>{repository.stargazers_count}</strong>
                <p>Stars</p>
              </Info>
              <Info>
                <strong>{repository.forks_count}</strong>
                <p>Forks</p>
              </Info>
              <Info>
                <strong>{repository.open_issues_count}</strong>
                <p>Issues abertas</p>
              </Info>
            </div>
          </Content>
          <Issues>
            {issues.map(issue => (
              <a
                href={issue.html_url}
                key={issue.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={issue.user.avatar_url} alt={issue.user.login} />
                <div>
                  <strong>{issue.title}</strong>
                  <p>{issue.user.login}</p>
                </div>
                <FiChevronRight size={20} />
              </a>
            ))}
          </Issues>
        </>
      )}
    </>
  );
};

export default Repository;
