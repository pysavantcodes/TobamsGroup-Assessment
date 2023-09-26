import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";

const Product = ({ index, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={[styles.productContainer, index%2==0 ? { marginRight: 0 } : { marginLeft: 15 }]}>
      <TouchableOpacity style={{ alignSelf:"flex-end" }}>
        <Feather size={20} name="heart" />
      </TouchableOpacity>
      <Image
        style={{ height: 100, width: 100 }}
        source={require("../assets/images/asaro.png")}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text
          numberOfLines={1}
          style={{ fontSize: 18, flex: 1, flexWrap: "wrap", fontWeight: "600" }}
        >
          African Duo
        </Text>
        <Text style={{ fontSize: 20, color: "#DB3C25" }}>€30</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Feather name="shopping-bag" size={20} color={"white"}/>
        <Text style={{ fontSize: 17, color: "white" }}>Add to cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    borderRadius: 8,
    rowGap: 5,
    flex:1,
    marginTop:15
  },
  button:{
    backgroundColor:"#DB3C25",
    flexDirection:"row",
    alignItems:"center",
    padding:13,
    paddingHorizontal:15,
    width:"100%",
    justifyContent:"center",
    columnGap:14,
    borderRadius:50,
    marginTop:10
  }
});
