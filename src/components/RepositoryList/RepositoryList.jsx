import { FlatList, View, StyleSheet } from "react-native";
import useRepositories from "../hook/useRepositories";

import RepositoryItem from "../RepositoryItem/RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#E1E5E7",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return (
    <FlatList
      data={repositories?.edges}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem props={item.node} />}
    />
  );
};

export default RepositoryList;
