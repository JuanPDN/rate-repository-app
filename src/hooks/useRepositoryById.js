import { useEffect, useState } from "react";

const useRepositoryById = (id) => {
  const [repository, setRepository] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositoryById = async (id) => {
    setLoading(true);

    const response = await fetch("https://api.github.com/repositories/" + id);
    const json = await response.json();
    setRepository(json);
    setLoading(false);
  };

  useEffect(() => {
    id && fetchRepositoryById(id);
  }, [id]);

  return { repository, loading, refetch: fetchRepositoryById };
};

export default useRepositoryById;
