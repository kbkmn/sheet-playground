import { View, Text } from "react-native";
import ActionSheet, { ScrollView } from "react-native-actions-sheet";
import { TextInput } from "react-native-gesture-handler";

export default function ComplexActionSheet() {
  return (
    <ActionSheet gestureEnabled isModal={false}>
      <View className="max-h-full shrink">
        <View className="shrink-0 bg-gray-300 px-4">
          <TextInput placeholder="Search" />
        </View>

        <ScrollView className="shrink">
          <View className="gap-2 py-4">
            {[...Array(50)].map((_, idx) => (
              <View key={idx}>
                <Text>Hello World #{idx + 1}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View className="shrink-0 bg-gray-300 p-4">
          <Text>STATIC FOOTER</Text>
        </View>
      </View>
    </ActionSheet>
  );
}
