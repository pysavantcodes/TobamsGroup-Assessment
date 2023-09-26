import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native";
import Product from "../components/Product";

const Menu = ({ navigation }) => {
  const data = [
    { text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
  ];

  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Feather name="search" size={15} color={"black"} />
          <TextInput placeholder="Search" style={{ flex: 1 }} />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          data={data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item, index) => index}
          style={{ flex: 1 }}
          renderItem={({ item, index }) => (
            <Product
              onClick={() => navigation.navigate("Product")}
              index={index}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#F9F9F9",
    flex: 1,
    flexGrow: 1,
  },
  container: {
    padding: 20,
    flex: 1,
    paddingBottom: 10,
  },
  searchContainer: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
    paddingHorizontal: 20,
    borderColor: "#E1E5E9",
    borderWidth: 1,
    borderRadius: 8,
  },
});
