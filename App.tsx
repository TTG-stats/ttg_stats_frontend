import React from "react";
import { useTranslation } from "react-i18next";

import { View, Text, Button } from "react-native-ui-lib";

import initLocalization from "./src/i18n";

initLocalization();

const App = () => {
  const { t } = useTranslation();

  return (
    <View flex center>
      <Text black text40>
        Choose profile
      </Text>
      <View>
        <Button label="Login with Google" disabled marginT-20 />
        <Button label={t("Use local profile")} marginT-20 />
      </View>
    </View>
  );
};

export default App;
