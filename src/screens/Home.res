open ReactNative

let test = "Home component"->React.string

@react.component
let make = (~navigation, ~route) => {
  // <ReactNative.Text>{"Home" -> React.string}</ReactNative.Text>
  // <ReactNative.Text>{test}</ReactNative.Text>

  React.useEffect0(() => {
    let isWelcomeScreenAlreadyShown = AsyncStorage.getItem("@isWelcomeScreenAlreadyShown")

    // isWelcomeScreenAlreadyShown
    Some(() => ())
  })

  <View> <Text> {"Home"->React.string} </Text> </View>
}
