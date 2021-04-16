import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import initLocalization from "./src/i18n";
import InitialScreen from "./src/screens/Welcome";
import HomeScreen from "./src/screens/Home/Home";
import ScreensList from "./src/screens/screensList";

initLocalization();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreensList.Home} component={HomeScreen} />
        <Stack.Screen name={ScreensList.Welcome} component={InitialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
