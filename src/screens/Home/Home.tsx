import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native-ui-lib";

import ScreensList from "../screensList";
import { HomeScreenNavigationProp } from "./Home.types";

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  useEffect(() => {
    (async () => {
      const isWelcomeScreenAlreadyShown = await AsyncStorage.getItem(
        "@isWelcomeScreenAlreadyShown"
      );
      Boolean(isWelcomeScreenAlreadyShown)
        ? null
        : navigation.replace(ScreensList.Welcome);
    })();
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
