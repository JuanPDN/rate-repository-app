import React from "react";
import { View } from "react-native";

import { useLocalSearchParams } from "expo-router";

import Text from "../../src/components/Text";
import RepositoryItem from "../../src/components/RepositoryItem";
import useRepositoryById from "../../src/hooks/useRepositoryById";
import ButtonGitHub from "../../src/components/ButtonGitHub";

const RepositoryById = () => {
  const { id } = useLocalSearchParams();
  const { repository, loading } = useRepositoryById(id);
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return <RepositoryItem item={repository} asChild={ButtonGitHub()} />;
};

export default RepositoryById;
