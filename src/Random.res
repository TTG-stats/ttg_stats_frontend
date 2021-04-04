// this file
// https://github.com/draftbit/reason-expo/blob/master/packages/reason-expo/src/Random.re
// converted with
// node_modules/.bin/bsc -format MyFile.re > MyFile.res
// from
// https://rescript-lang.org/docs/manual/v8.0.0/migrate-from-bucklescript-reason

@module("expo-random")
external getRandomBytesAsync: int => Js.Promise.t<Js.Typed_array.Uint8Array.t> =
  "getRandomBytesAsync"
