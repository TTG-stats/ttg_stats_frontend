open ReactNative
open ReactNavigation

include Stack.Make({
  type params = unit
})

@react.component
let make = () => {
  <Native.NavigationContainer>
    <Navigator screenOptions={unit => options(~headerShown=false, ())}>
      <Screen name="Home" component={Home.make} />
    </Navigator>
  </Native.NavigationContainer>
}
