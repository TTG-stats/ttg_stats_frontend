import ScreensList from "../screens/screensList";

// TODO: find better approach to handle this kind of types
export type RootStackParamList = {
  [ScreensList.Welcome]: undefined;
  [ScreensList.Home]: undefined;
};
