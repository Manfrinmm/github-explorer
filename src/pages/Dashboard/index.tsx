import React, { useState, useEffect, FormEvent } from "react";

import logo from "../../assets/logo.svg";
import api from "../../config/api";
import RepositoryItem from "./RepositoryItem";
import { Title, Form, Repositories, Error } from "./styles";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [inputValue, setInputValue] = useState("rocketseat/umbriel");
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    const stringifyRepositories = localStorage.getItem(
      "@github-explorer:repositories",
    );

    if (stringifyRepositories) {
      const parsedRepositories = JSON.parse(
        stringifyRepositories,
      ) as Repository[];

      setRepositories(parsedRepositories);
    }
  }, []);

  useEffect(() => {
    const stringifyRepositories = JSON.stringify(repositories);

    localStorage.setItem(
      "@github-explorer:repositories",
      stringifyRepositories,
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!inputValue) {
      setInputError("Digite o autor/nome do repositório.");

      return;
    }

    const repositoryExists = repositories.find(repository => {
      return repository.full_name.toUpperCase() === inputValue.toUpperCase();
    });

    if (repositoryExists) {
      setInputError("Repositório já adicionado.");
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${inputValue}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setInputValue("");
      setInputError("");
    } catch (error) {
      setInputError("Erro na busca por esse repositório.");
      console.log(error);
    }
  }

  function handleRemoveRepository(repositoryName: string): void {
    setRepositories(
      repositories.filter(({ full_name }) => full_name !== repositoryName),
    );
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository} hasError={!!inputError}>
        <input
          placeholder="Pesquise o autor/repositório"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <RepositoryItem
            key={repository.full_name}
            repository={repository}
            removeRepository={handleRemoveRepository}
          />
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
