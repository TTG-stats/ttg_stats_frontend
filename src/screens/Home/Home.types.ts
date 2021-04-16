import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../types";
import ScreensList from "../screensList";

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreensList.Home
>;
