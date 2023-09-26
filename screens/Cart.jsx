import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CartProduct from "../components/CartProduct";


const Cart = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
      <ScrollView overScrollMode="never" style={{ flexGrow: 1 }}>
        <View style={{ padding: 20 }}>
          <CartProduct/>
          <CartProduct/>
          <CartProduct/>
        </View>
      </ScrollView>
      <View style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18 }}>
            Total <Text style={{ color: "rgba(0,0,0,0.5)" }}>(3 Items)</Text>
          </Text>
          <Text style={{ fontSize: 18 }}>€90</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 17, color: "white" }}>Checkout - €90</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#DB3C25",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "center",
    columnGap: 14,
    borderRadius: 50,
    marginTop: 10,
  },
});
