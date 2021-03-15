import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Button } from "react-native-ui-lib";

import { StackNavigationProp } from "@react-navigation/stack";

// TODO: move out types
type RootStackParamList = {
  Initial: undefined;
  Home: undefined;
};

type InitialScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Initial"
>;

type Props = {
  navigation: InitialScreenNavigationProp;
};

const InitialScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

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
          onPress={() => {
            navigation.push("Home");
          }}
        />
      </View>
    </View>
  );
};

export default InitialScreen;
