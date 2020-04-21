import React, { useState } from "react";
import { FiTrash2, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface RepositoryProps {
  removeRepository: Function;
  repository: {
    full_name: string;
    description: string;
    owner: {
      login: string;
      avatar_url: string;
    };
  };
}

const RepositoryItem: React.FC<RepositoryProps> = ({
  repository,
  removeRepository,
}: RepositoryProps) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <Container
      mouseEnter={mouseEnter}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <button
        type="button"
        onClick={() => removeRepository(repository.full_name)}
      >
        <FiTrash2 size={24} />
      </button>
      <Link to={`/repository/${repository.full_name}`}>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <div>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </div>
        <FiChevronRight size={20} />
      </Link>
    </Container>
  );
};

export default RepositoryItem;
