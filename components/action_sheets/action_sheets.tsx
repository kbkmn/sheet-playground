import {
  SheetRegister,
  SheetDefinition,
  RouteDefinition,
} from "react-native-actions-sheet";

import SimpleActionSheet from "./simple";
import ComplexActionSheet from "./complex";
import NestedActionSheet from "./nested";

declare module "react-native-actions-sheet" {
  interface Sheets {
    "simple-action-sheet": SheetDefinition;
    "complex-action-sheet": SheetDefinition;
    "nested-action-sheet": SheetDefinition<{
      routes: {
        "route-a": RouteDefinition;
        "route-b": RouteDefinition;
        "route-c": RouteDefinition;
        "route-d": RouteDefinition;
      };
    }>;
  }
}

export default function ActionSheets() {
  return (
    <SheetRegister
      sheets={{
        "simple-action-sheet": SimpleActionSheet,
        "complex-action-sheet": ComplexActionSheet,
        "nested-action-sheet": NestedActionSheet,
      }}
    />
  );
}
