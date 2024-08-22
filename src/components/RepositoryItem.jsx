import React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

import Text from "./Text";
import Stat from "./Stat";

const RepositoryItem = ({ item, asChild }) => {
  const styles = StyleSheet.create({
    image: {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    containerInfo: {
      flexDirection: "row",
      gap: 20,
      padding: 10,
    },
    card: {
      padding: 10,
      backgroundColor: "white",
      borderRadius: 15,
    },
    info: {
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexShrink: 1,
    },
    tag: {
      borderRadius: 5,
      padding: 5,
      backgroundColor: "#0366d6",
    },
    stats: {
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  });

  return (
    <View style={styles.card}>
      <Link href={`/repository/${item?.id}`} asChild>
        <Pressable>
          <View style={styles.containerInfo}>
            <Image
              source={{ uri: item?.owner.avatar_url }}
              style={styles.image}
            />
            <View style={styles.info}>
              <Text fontWeight={"bold"} fontSize={"subheading"}>
                {item?.full_name}
              </Text>
              <Text numberOfLines={3} color={"textSecundary"}>
                {item?.description}
              </Text>
              <View style={styles.tag}>
                <Text color={"white"}>{item?.language}</Text>
              </View>
            </View>
          </View>
          <View style={styles.stats}>
            <Stat label={"Stars"} value={item?.stargazers_count} />
            <Stat label={"Forks"} value={item?.forks_count} />
            <Stat label={"Reviews"} value={item?.watchers_count} />
            <Stat label={"Rating"} value={item?.rating_average || 0} />
          </View>
          {asChild}
        </Pressable>
      </Link>
    </View>
  );
};

export default RepositoryItem;
