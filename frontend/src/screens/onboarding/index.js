import React from "react";
import { View, Text } from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

const Index = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log("focus");

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  const dispatch = useDispatch();

  setInterval(() => {
    dispatch({ type: "SIGN_OUT" });
  }, 3000);

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>onBoarding</Text>
    </View>
  );
};

export default Index;
