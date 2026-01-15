import { View, Text, Button } from "react-native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";

export default function SimpleActionSheet() {
  const handleCallComplexActionSheet = () => {
    SheetManager.show("complex-action-sheet");
  };

  return (
    <ActionSheet gestureEnabled isModal={false}>
      <View className="gap-4">
        <View className="px-4">
          <Text>SIMPLE ACTION SHEET</Text>
        </View>

        <View className="bg-gray-300 p-4">
          <Button
            onPress={handleCallComplexActionSheet}
            title="Call complex action sheet"
          />
        </View>
      </View>
    </ActionSheet>
  );
}
