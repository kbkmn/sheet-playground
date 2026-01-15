import { View } from "react-native";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView as SAV } from "react-native-safe-area-context";
import { withUniwind } from "uniwind";
import { SheetProvider } from "react-native-actions-sheet";

import ActionSheets from "../components/action_sheets/action_sheets";

import "../global.css";

const SafeAreaView = withUniwind(SAV);

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <SheetProvider>
        <View className="flex-1">
          <SafeAreaView className="flex-1">
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: "transparent",
                },
              }}
            />
          </SafeAreaView>
        </View>

        <ActionSheets />
      </SheetProvider>
    </GestureHandlerRootView>
  );
}
