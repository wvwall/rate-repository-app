import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import AppBar from "./AppBar/AppBar";
import RepositoryList from "./RepositoryList/RepositoryList";
import SignIn from "./SignIn/SignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="sign-in" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
