// In App.js in a new project

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

import { View, Text } from "react-native";
//header style
import transparentHeaderStyle from "../src/utils/HeaderStyle";

//components
import OnBoarding from "../src/screens/onboarding";
import SignInScreen from "../src/screens/signIn";

//redux
import { useSelector, useDispatch } from "react-redux";

const Stack = createStackNavigator();

function AppNavigator() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let token;

      try {
        token = await AsyncStorage.getItem("userToken");
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: token });
    };

    bootstrapAsync();
  }, [auth.isLoading, auth.userToken]);

  if (auth.isLoading) {
    // We haven't finished checking for the token yet
    return (
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Loading..</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {auth.userToken == null ? (
        // No token found, user isn't signed in
        <Stack.Screen
          name='SignIn'
          component={SignInScreen}
          options={{
            title: "Sign in",
            // When logging out, a pop animation feels intuitive
            // You can remove this if you want the default 'push' animation
            animationTypeForReplace: auth.isSignout ? "pop" : "push"
          }}
        />
      ) : (
        // User is signed in
        <Stack.Screen
          name='OnBoarding'
          component={OnBoarding}
          options={{
            headerStyle: transparentHeaderStyle,
            headerTransparent: true,
            title: null
          }}
        />
      )}
    </Stack.Navigator>
  );
}

export default AppNavigator;
