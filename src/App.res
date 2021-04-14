open ReactNative

@react.component
let make = () => {
  <View>
    <Text> {"Hello world!"->React.string} </Text>
    <StatusBar backgroundColor="red" />
    <RNUI.Text color="red"> {"Hello world!"} </RNUI.Text>
  </View>
}
