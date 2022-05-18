import { View, Image, StyleSheet } from "react-native";
import Text from "../Text/Text";

const styles = StyleSheet.create({
  container: {},
  info: {
    margin: 10,
    flexDirection: "row",
    height: 100,
  },
  language: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#0164D4",
    width: 90,
    textAlign: "center",
    color: "#fff",
  },
  count: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const RepositoryItem = ({ props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          style={{ height: 40, width: 40, borderRadius: 5, marginRight: 10 }}
          source={{
            uri: props.ownerAvatarUrl,
          }}
        ></Image>
        <View>
          <Text
            color="primary"
            fontWeight="bold"
            fontSize="subheading"
            style={{ marginBottom: 10 }}
          >
            {props.fullName}
          </Text>
          <Text style={{ marginBottom: 10 }}>{props.description}</Text>
          <Text style={styles.language}>{props.language}</Text>
        </View>
      </View>

      <View style={styles.count}>
        <Text fontWeight="bold">Forks: {props.forksCount}</Text>
        <Text fontWeight="bold">Stars: {props.stargazersCount}</Text>
        <Text fontWeight="bold">Rating: {props.ratingAverage}</Text>
        <Text fontWeight="bold">Review: {props.reviewCount}</Text>
      </View>
    </View>
  );
};

export default RepositoryItem;
