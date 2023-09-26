import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const ProductDetails = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleScroll = (event) => {
    const slideWidth = 400;
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / slideWidth);
    setCurrentIndex(index);
  };

  const dropdownList = [
    "Ingredients",
    "Nutritional Elements",
    "How to Prepare",
    "Dietary Information",
    "Storage Information",
    "Extra",
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F9F9F9",
        padding: 20,
        paddingTop: 30,
        paddingBottom: 0,
      }}
    >
      <View>
        <TouchableOpacity
          onPress={() => requestAnimationFrame(() => navigation.goBack())}
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#E1E5E9",
            borderRadius: 8,
            backgroundColor: "white",
          }}
        >
          <Feather name="chevron-left" size={20} />
        </TouchableOpacity>
      </View>
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        style={{ flexGrow: 1 }}
      >
        <View style={styles.carousel}>
          <ScrollView
            onScroll={handleScroll}
            contentContainerStyle={{
              padding: 10,
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
            horizontal
            overScrollMode="never"
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {[1, 2, 3].map((data, index) => {
              return (
                <View key={index} style={{ width: 400 }}>
                  <Image
                    style={{
                      width: "100%",
                      height: 250,
                      objectFit: "contain",
                      alignSelf: "center",
                    }}
                    source={require("../assets/images/donut.png")}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.indicatorContainer}>
          {[1, 2, 3].map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === currentIndex && styles.activeIndicator,
              ]}
            />
          ))}
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                fontSize: 24,
                flex: 1,
                flexWrap: "wrap",
                fontWeight: "600",
              }}
            >
              African Donut Mix (Puff Puff)
            </Text>
            <Text style={{ fontSize: 24, color: "#DB3C25" }}>€3.99</Text>
          </View>
          <Text
            style={{
              fontSize: 17,
              color: "#4A4A4A",
              lineHeight: 23,
              marginTop: 5,
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            aspernatur alias velit quas! Accusantium voluptatem minima nobis
            molestiae atque ratione corporis in provident dolore corrupti,
            maiores velit, dicta laborum ea...{" "}
            <Text style={{ color: "#DB3C25" }}>Read More</Text>
          </Text>
          <View
            style={{
              borderTopColor: "#E1E5E9",
              borderTopWidth: 1,
              marginTop: 40,
            }}
          >
            {dropdownList.map((item, index) => {
              return (
                <TouchableOpacity style={styles.dropdownItem} key={item}>
                  <Text style={{ fontSize: 17, fontWeight: 500 }}>{item}</Text>
                  <Feather name="chevron-down" size={20} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 23,
          }}
        >
          <TouchableOpacity
            disabled={quantity == 1}
            onPress={() =>
              quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
            }
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#E1E5E9",
              borderRadius: 8,
              backgroundColor: "white",
              opacity: quantity == 1 ? 0.4 : 1,
            }}
          >
            <Feather name="minus" size={20} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => setQuantity(quantity + 1)}
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#E1E5E9",
              borderRadius: 8,
              backgroundColor: "white",
            }}
          >
            <Feather name="plus" size={20} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingBottom: 20 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 17, color: "white" }}>Add to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBorder}>
            <Text style={{ fontSize: 17, color: "#DB3C25" }}>
              Subscribe to a Plan
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  carousel: {
    maxWidth: 400,
    backgroundColor: "white",
    height: 300,
    borderRadius: 20,
    marginTop: 15,
    alignSelf: "center",
    overflow: "hidden",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
    margin: 4,
  },
  activeIndicator: {
    backgroundColor: "#DB3C25",
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    justifyContent: "space-between",
    borderBottomColor: "#E1E5E9",
    borderBottomWidth: 1,
  },
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
  },
  buttonBorder: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "center",
    columnGap: 14,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#DB3C25",
    marginTop: 8,
  },
});
