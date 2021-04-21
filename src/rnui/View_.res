

@module("react-native-ui-lib") @react.component
external make: (
  // props
  ~children: React.element,
  ~flex: bool=?,
  ~center: bool=?,
  containerModifiers,
) => (~useSafeArea: bool=?, ~animated: bool=?) => React.element = "View"
