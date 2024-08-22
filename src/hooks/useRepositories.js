import { useState, useEffect } from "react";

const useRepositories = (perPage = 10) => {
  const [loading, setLoading] = useState(false);
  const [allRepositories, setAllRepositories] = useState([]);
  const [page, setPage] = useState(1);

  const fetchRepositories = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/juanPDN/repos`);
    const json = await response.json();
    setAllRepositories(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const paginatedRepositories = allRepositories.slice(0, page * perPage);

  const loadMore = () => {
    if (paginatedRepositories.length < allRepositories.length) {
      setPage((prev) => prev + 1);
    }
  };

  return { repositories: paginatedRepositories, loading, loadMore };
};

export default useRepositories;
