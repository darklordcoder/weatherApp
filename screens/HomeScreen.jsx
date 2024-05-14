import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as icons from "react-native-heroicons/outline";
import { Pressable } from "react-native";
import { useState } from "react";
import * as Device from "expo-device";

export default HomeScreen = () => {
  const [searchVisible, toggleSearchVisible] = useState(false);
  const [locations, setLocations] = useState([0, 1, 2, 3]);

  const handleLocation = (loc) => {
    console.log("Location: " + loc);
  };
  let marginTop = Device.osName !== "iOS" ? "mt-2" : "";
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/bg.png")}
        blurRadius={70}
        className="absolute h-full w-full z-1"
      />
      <SafeAreaView className="flex flex-1">
        {/* // #region Search Bar =========================================== */}
        <View
          style={{ height: "7%" }}
          className={"mx-4 relative z-50 " + marginTop}
        >
          <View
            className={"flex-row justify-end items-center rounded-full "}
            style={{
              backgroundColor: searchVisible ? "gray" : "transparent",
            }}
          >
            {searchVisible ? (
              <TextInput
                placeholder="Search City"
                placeholderTextColor={"lightgray"}
                className="pl-6 h-10 flex-1 text-base text-white"
              ></TextInput>
            ) : null}
            <Pressable
              className="rounded-full p-3 m-1 bg-gray-500"
              onPress={() => {
                console.log("toggle", searchVisible);
                toggleSearchVisible(!searchVisible);
              }}
            >
              <icons.MagnifyingGlassIcon
                size="25"
                color="white"
              ></icons.MagnifyingGlassIcon>
            </Pressable>
          </View>
          {locations.length > 0 && searchVisible ? (
            <View className="absolute w-full bg-gray-300/90 top-16 rounded-3xl">
              {locations.map((loc, index) => {
                let showBorder = index + 1 != locations.length;

                let borderClass = showBorder
                  ? "border-b-2 border-b-gray-500"
                  : "";
                return (
                  <TouchableOpacity
                    key={index}
                    className={
                      "flex-row items-center border-0 p-3 pl-8 mb-1 " +
                      borderClass
                    }
                    onPress={() => {
                      handleLocation(loc);
                    }}
                  >
                    <Text className="text-black font-bold text-lg ml-2">
                      London, United Kingdom
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        {/* // #endregion  */}
        {/* // #region FORECAST =================================== */}
        <View className="mx-4 flex justify-around flex-1 mb-2">
          <Text className="text-white text-center text-2xl font-bold">
            London,
            <Text className="text-lg font-semibold text-gray-300">
              {" "}
              United Kingdom
            </Text>
          </Text>

          <View className="flex-row justify-center">
            <Image
              source={require("../assets/images/partlycloudy.png")}
              className="w-52 h-52"
            ></Image>
          </View>
          <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
              23°
            </Text>
            <Text className="text-center text-white text-xl tracking-widest">
              Part Cloudly
            </Text>
          </View>

          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../assets/icons/wind.png")}
                className="h-6 w-6"
              ></Image>
              <Text className="text-white font-semibold text-base">22km</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../assets/icons/drop.png")}
                className="h-6 w-6"
              ></Image>
              <Text className="text-white font-semibold text-base">23 %</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../assets/icons/sun.png")}
                className="h-6 w-6"
              ></Image>
              <Text className="text-white font-semibold text-base">
                6:05 AM
              </Text>
            </View>
          </View>
        </View>
        {/* // #endregion */}
        {/* // #region FORECAST =================================== */}
        <View className="mb-2 space-y-3">
          <View className="flex-row items-center mx-5 space-x-2">
            <icons.CalendarDaysIcon
              color={"white"}
              size="22"
            ></icons.CalendarDaysIcon>
            <Text className="text-white text-base">daily forcast</Text>
          </View>

          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-3 bg-slate-400/20 mr-4">
              <Image
                source={require("../assets/images/heavyrain.png")}
                className="w-11 h-11"
              ></Image>
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl">23&#176;</Text>
            </View>

            <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-3 bg-slate-400/20 mr-4">
              <Image
                source={require("../assets/images/heavyrain.png")}
                className="w-11 h-11"
              ></Image>
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl">23&#176;</Text>
            </View>

            <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-3 bg-slate-400/20 mr-4">
              <Image
                source={require("../assets/images/heavyrain.png")}
                className="w-11 h-11"
              ></Image>
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl">23&#176;</Text>
            </View>

            <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-3 bg-slate-400/20 mr-4">
              <Image
                source={require("../assets/images/heavyrain.png")}
                className="w-11 h-11"
              ></Image>
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl">23&#176;</Text>
            </View>

            <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-3 bg-slate-400/20">
              <Image
                source={require("../assets/images/heavyrain.png")}
                className="w-11 h-11"
              ></Image>
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl">23&#176;</Text>
            </View>
          </ScrollView>
        </View>
        {/* // #endregion*/}
      </SafeAreaView>
    </View>
  );
};
