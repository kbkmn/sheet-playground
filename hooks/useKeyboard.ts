import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  EmitterSubscription,
  Keyboard,
  KeyboardEventListener,
} from "react-native";

type ScreenRect = {
  screenX: number;
  screenY: number;
  width: number;
  height: number;
};

const EMPTY = Object.freeze({
  screenX: 0,
  screenY: 0,
  width: 0,
  height: 0,
});
const INITIAL = {
  start: EMPTY,
  end: EMPTY,
};

export const useKeyboard = () => {
  const [shown, setShown] = useState(false);
  const [coordinates, setCoordinates] = useState<{
    start: undefined | ScreenRect;
    end: ScreenRect;
  }>(INITIAL);
  const [height, setHeight] = useState<number>(0);

  const handleDidShow: KeyboardEventListener = useCallback((event) => {
    setCoordinates({
      start: event.startCoordinates,
      end: event.endCoordinates,
    });
    setHeight(event.endCoordinates.height);
    setShown(true);
  }, []);

  const handleDidHide: KeyboardEventListener = useCallback((event) => {
    setShown(false);

    if (event) {
      setCoordinates({
        start: event.startCoordinates,
        end: event.endCoordinates,
      });
    } else {
      setCoordinates(INITIAL);
      setHeight(0);
    }
  }, []);

  useEffect(() => {
    const subscriptions: EmitterSubscription[] = [
      Keyboard.addListener("keyboardDidChangeFrame", handleDidShow),
      Keyboard.addListener("keyboardDidHide", handleDidHide),
      Keyboard.addListener("keyboardDidShow", handleDidShow),
    ];

    return () => {
      subscriptions.forEach((subscription) => subscription.remove());
    };
  }, [handleDidHide, handleDidShow]);

  return {
    shown,
    coordinates: {
      start: !shown ? EMPTY : coordinates.start,
      end: !shown ? EMPTY : coordinates.end,
    },
    height: !shown ? 0 : height,
  };
};
