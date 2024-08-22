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
  const { repositories, loadMore } = useRepositories();

  const repositoriesNode = repositories
    ? repositories.filter((repo) => repo.language)
    : [];

  return (
    <FlatList
      data={repositoriesNode}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
      onEndReached={() => loadMore()}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryList;
