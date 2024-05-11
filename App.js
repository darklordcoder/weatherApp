import { StatusBar } from "expo-status-bar";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-svg";
import tw from "twrnc";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={tw`flex-1 bg-neutral-800`}>
        <SafeAreaView>
          <ExpoStatusBar style="light" />
          <View>
            <Text className="text-neutral-400">PROBANDO ESTA APP CHONCHA</Text>
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}
