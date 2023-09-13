import { StyleSheet, Text, Image, ImageBackground, Alert } from "react-native";
import backgroundImg from "./assets/bg.png";
import characterImg from "./assets/mametchi.png";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useState } from "react";
import BaseCard from "./components/BaseCard";

export default function App() {
  // let scale = 1;
  const [scale, setScale] = useState(1);
  const [savedScale, setSavedScale] = useState(1);

  const singleTap = Gesture.Tap().onStart(() => {
    Alert.alert("Single Tap nih");
  });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      Alert.alert("Double Tap nih");
      // hit endpoint bookmarks => simpan / hapus bookmarks
    });

  const cubit = Gesture.Pinch()
    .onUpdate((event) => {
      // console.log(event, "<<< event on Start");
      // scale = event.scale;
      setScale(event.scale * savedScale);
      // Alert.alert("Cubit nih");
    })
    .onEnd(() => {
      setSavedScale(scale);
    });

  const gestureComposed = Gesture.Exclusive(cubit, doubleTap, singleTap);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerSafeArea}>
        <BaseCard></BaseCard>

        {/* <GestureHandlerRootView style={{ flex: 1 }}>
          <ImageBackground source={backgroundImg} style={styles.background}>
            <Text style={styles.topText}>TamaGotchiApp</Text>
            <GestureDetector gesture={gestureComposed}>
              <Image source={characterImg} style={{ transform: [{ scale }] }} />
            </GestureDetector>
          </ImageBackground>
        </GestureHandlerRootView> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    // backgroundColor: "#5C3526",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  character: {
    width: 400,
    height: 400,
    opacity: 1,
    resizeMode: "contain",
  },
  topText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    color: "#42261c",
    margin: 10,
    position: "absolute",
    top: 0,
  },
});
