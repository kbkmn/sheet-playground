import { View, Text, Button } from "react-native";
import { SheetManager } from "react-native-actions-sheet";

export default function IndexScreen() {
  return (
    <View className="gap-4 px-4">
      <Button
        onPress={() => void SheetManager.show("simple-action-sheet")}
        title="Call simple action sheet"
      />

      <Button
        onPress={() => void SheetManager.show("nested-action-sheet")}
        title="Call nested action sheet"
      />
    </View>
  );
}
