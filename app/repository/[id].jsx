import { View, Text } from "react-native";

import RepositoryItem from "../../src/components/RepositoryItem";
import { useLocalSearchParams } from "expo-router";
import useRepositoryById from "../../src/hooks/useRepositoryById";
import React from "react";

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
  return <RepositoryItem item={repository} />;
};

export default RepositoryById;
