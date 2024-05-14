import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as icons from "react-native-heroicons/outline";
import { Pressable } from "react-native";
import { useState } from "react";

export default HomeScreen = () => {
  const [searchVisible, toggleSearchVisible] = useState(false);
  const [locations, setLocations] = useState([0, 1, 2, 3]);

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/bg.png")}
        blurRadius={70}
        className="absolute h-full w-full z-1"
      />
      <SafeAreaView className="flex flex-1">
        <View style={{ height: "7%" }} className="mx-4 relative z-50 ">
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
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
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
                  >
                    <Text>London, United Kingdom</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </View>
  );
};
