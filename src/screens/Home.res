open Promise
open ReactNative
open ReactNavigation

let homeText = "Home component"->React.string

@react.component
let make = (~navigation, ~route) => {
  // <ReactNative.Text>{"Home" -> React.string}</ReactNative.Text>
  // <ReactNative.Text>{test}</ReactNative.Text>

  React.useEffect0(() => {
    AsyncStorage.getItem("@isWelcomeScreenAlreadyShown")
    ->then(data => {
      let option = data->Js.Null.toOption

      switch option {
      | Some(_) => ()
      | None => ()
      }

      resolve()
    })
    ->ignore

    None
  })

  <View> <Text> {homeText} </Text> </View>
}
