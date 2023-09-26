import { StatusBar } from "expo-status-bar";
import { Image, Platform, Text, View } from "react-native";
import ProductDetails from "./screens/ProductDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "./screens/Menu";
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import Account from "./screens/Account";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabHome = () => {
  return (
    <Tab.Navigator
      keyboardHidesTabBar={true}
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          borderBottomColor: "rgba(0,0,0,0.1)",
          borderBottomWidth: 1,
          elevation: 0,
          backgroundColor: "#F9F9F9",
        },
        tabBarStyle: {
          elevation: 1,
          height: 70,
          paddingHorizontal: 20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderWidth: 0,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{ alignItems: "center", rowGap: 5 }}>
                <IonIcon color={"#DB3C25"} size={23} name="home" />
                <Text style={{ color: "#DB3C25" }}>Home</Text>
              </View>
            ) : (
              <View style={{ alignItems: "center", rowGap: 5 }}>
                <IonIcon color={"#858585"} size={23} name="home-outline" />
                <Text style={{ color: "#858585" }}>Home</Text>
              </View>
            ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{ alignItems: "center", rowGap: 5 }}>
                <MaterialCommunityIcons
                  color={"#DB3C25"}
                  size={23}
                  name="view-dashboard"
                />
                <Text style={{ color: "#DB3C25" }}>Menu</Text>
              </View>
            ) : (
              <View style={{ alignItems: "center", rowGap: 5 }}>
                <MaterialCommunityIcons
                  color={"#858585"}
                  size={23}
                  name="view-dashboard-outline"
                />
                <Text style={{ color: "#858585" }}>Menu</Text>
              </View>
            ),
        }}
        name="Menu"
        component={Menu}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{ alignItems: "center", rowGap: 5 }}>
                <IonIcon color={"#DB3C25"} size={23} name="cart" />
                <Text style={{ color: "#DB3C25" }}>Cart</Text>
              </View>
            ) : (
              <View style={{ alignItems: "center", rowGap: 5 }}>
                <IonIcon color={"#858585"} size={23} name="cart-outline" />
                <Text style={{ color: "#858585" }}>Cart</Text>
              </View>
            ),
        }}
        name="Cart"
        component={Cart}
      />

      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{ alignItems: "center", rowGap: 5 }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 50,
                    objectFit: "cover",
                    borderWidth: 1,
                    borderColor: "#DB3C25",
                  }}
                  source={{
                    uri: "https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg",
                  }}
                />
                <Text style={{ color: "#DB3C25" }}>Account</Text>
              </View>
            ) : (
              <View style={{ alignItems: "center", rowGap: 5 }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 50,
                    objectFit: "cover",
                  }}
                  source={{
                    uri: "https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg",
                  }}
                />
                <Text style={{ color: "#858585" }}>Account</Text>
              </View>
            ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" translucent={false} backgroundColor="#F9F9F9" />
      <Stack.Navigator
        screenOptions={{ headerShown: true, animation: "fade_from_bottom" }}
      >
        <Stack.Screen
          name="TabNav"
          component={TabHome}
          options={{
            headerShown: false,
            style: {
              paddingVertical: Platform.OS === "ios" ? 20 : 0,
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Product"
          component={ProductDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
