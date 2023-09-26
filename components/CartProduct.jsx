import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";

const CartProduct = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 40,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}
      >
        <Image
          style={{
            width: 90,
            height: 90,
            objectFit: "contain",
            alignSelf: "center",
          }}
          source={require("../assets/images/asaro.png")}
        />
        <View style={{ rowGap: 7 }}>
          <Text style={{ fontSize: 18 }}>
            Asaro{" "}
            <Text style={{ color: "rgba(0,0,0,0.5)" }}>(Porridge Yam)</Text>
          </Text>
          <Text style={{ fontSize: 18, color: "#DB3C25" }}>€90</Text>
          <TouchableOpacity>
            <Feather name="trash-2" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          rowGap: 7,
        }}
      >
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            backgroundColor: "white",
          }}
        >
          <Feather name="minus" size={20} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18 }}>1</Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            backgroundColor: "white",
          }}
        >
          <Feather name="plus" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({});
