import { View, Text, Button } from "react-native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";

export default function SimpleActionSheet() {
  const handleCallComplexActionSheet = () => {
    SheetManager.show("complex-action-sheet");
  };

  return (
    <ActionSheet gestureEnabled>
      <View className="gap-4 px-4">
        <View>
          <Text>SIMPLE ACTION SHEET</Text>
        </View>

        <Button
          onPress={handleCallComplexActionSheet}
          title="Call complex action sheet"
        />
      </View>
    </ActionSheet>
  );
}
