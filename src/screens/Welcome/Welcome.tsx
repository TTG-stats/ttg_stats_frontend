import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import { View, Text, Button } from "react-native-ui-lib";

import ScreensList from "../screensList";
import { WelcomeScreenNavigationProp } from "./Welcome.types";

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const onLocalProfilePress = async () => {
    await AsyncStorage.setItem("@isWelcomeScreenAlreadyShown", "true").then(
      () => {
        navigation.replace(ScreensList.Home);
      }
    );
  };

  return (
    <View flex center>
      <Text black text40>
        Choose profile
      </Text>
      <View>
        <Button label="Login with Google" disabled marginT-20 />
        <Button
          label={t("Use local profile")}
          marginT-20
          onPress={onLocalProfilePress}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
