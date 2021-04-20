type margins = {
  "margin": option<bool>,
  // "marginL": bool,
  // "marginT": bool,
  // "marginR": bool,
  // "marginB": bool,
  // "marginH": bool,
  // "marginV": bool,
} 

type props = {
  children: React.element,
  // key:
}

@module("react-native-ui-lib") @react.component
external make: (props) => React.element = "View"


// ~children: React.element, ~flex: bool=?, ~center: bool=?