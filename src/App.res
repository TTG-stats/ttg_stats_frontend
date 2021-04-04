module StatusBar = {
    @bs.module("expo-status-bar") @react.component
    external make: (~style: string) => React.element = "StatusBar"
}


@react.component
let make = () => {
    <ReactNative.View>
      <ReactNative.Text>{React.string("Hello world!")}</ReactNative.Text>
      <StatusBar style="auto" />
    </ReactNative.View>
}
