open Js
open ReactNative

module StatusBar = {
  @module("expo-status-bar") @react.component
  external make: (~style: string) => React.element = "StatusBar"
}

@react.component
let make = () => {
  let r = Random.getRandomBytesAsync(3)
  Console.log(r)

  <View> <Text> {"Hello world!"->React.string} </Text> <StatusBar style="auto" /> </View>
}
