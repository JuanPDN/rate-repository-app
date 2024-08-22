import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoriesNode = repositories
    ? repositories.filter((repo) => repo.language).map((edge) => edge)
    : [];

  return (
    <FlatList
      data={repositoriesNode}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
