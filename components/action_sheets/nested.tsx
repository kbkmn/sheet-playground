import { Button, View, Text, Dimensions } from "react-native";
import ActionSheet, {
  Route,
  RouteScreenProps,
  ScrollView,
} from "react-native-actions-sheet";
import { TextInput } from "react-native-gesture-handler";

const RouteA = ({
  router,
}: RouteScreenProps<"nested-action-sheet", "route-a">) => (
  <View className="gap-4">
    <View className="px-4">
      <Text>ROUTE A</Text>
    </View>

    <View className="bg-gray-300 p-4">
      <Button
        onPress={() => {
          router.navigate("route-b", undefined, 100);
        }}
        title="Go to Route B"
      />
    </View>
  </View>
);

const RouteB = ({
  router,
}: RouteScreenProps<"nested-action-sheet", "route-b">) => (
  <View className="gap-4">
    <View className="px-4">
      <Text>ROUTE B</Text>
    </View>

    <View className="gap-2 bg-gray-300 p-4">
      <Button
        onPress={() => {
          router.goBack(undefined, 100);
        }}
        title="Go Back to Route A"
      />

      <Button
        onPress={() => {
          router.navigate("route-c", undefined, 100);
        }}
        title="Go to Route C"
      />
    </View>
  </View>
);

const RouteC = ({
  router,
}: RouteScreenProps<"nested-action-sheet", "route-c">) => {
  return (
    <View className="max-h-full shrink pb-4.5">
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

      <View className="shrink-0 gap-2 bg-gray-300 p-4">
        <Button
          onPress={() => {
            router.goBack(undefined, 100);
          }}
          title="Go Back to Route B"
        />

        <Button
          onPress={() => {
            router.navigate("route-d", undefined, 100);
          }}
          title="Go to Route D"
        />
      </View>
    </View>
  );
};

const RouteD = ({
  router,
}: RouteScreenProps<"nested-action-sheet", "route-d">) => (
  <View className="gap-4 pb-4.5">
    <View className="shrink-0 bg-gray-300 px-4">
      <TextInput
        placeholder="Multiline input"
        multiline
        className="h-24 align-top leading-4"
        textAlignVertical="top"
      />
    </View>

    <View className="px-4">
      <Button
        onPress={() => {
          router.goBack(undefined, 100);
        }}
        title="Go back to Route C"
      />
    </View>
  </View>
);

const routes: Route[] = [
  {
    name: "route-a",
    component: RouteA,
  },
  {
    name: "route-b",
    component: RouteB,
  },
  {
    name: "route-c",
    component: RouteC,
  },
  {
    name: "route-d",
    component: RouteD,
  },
];

export default function NestedActionSheet() {
  return (
    <ActionSheet
      isModal={false}
      gestureEnabled
      routes={routes}
      initialRoute="route-a"
      enableRouterBackNavigation={true}
    />
  );
}
