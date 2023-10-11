import { StyleSheet, Text, Image, ImageBackground, Alert } from "react-native";
import backgroundImg from "./assets/bg.png";
import characterImg from "./assets/mametchi.png";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import { useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [scale, setScale] = useState(1);
  const [savedScale, setSavedScale] = useState(1);

  const cubit = Gesture.Pinch()
    .onUpdate((event) => {
      console.log(event.scale, "<<< scale habis di cubit");
      setScale(event.scale * savedScale);
    })
    .onEnd(() => {
      setSavedScale(scale);
    });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      // Alert.alert("Double Tap nih");
      setScale(1);
      setSavedScale(1);
    });

  const gestureCompose = Gesture.Exclusive(cubit, doubleTap);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerSafeArea}>
        <Card />
        {/* <GestureHandlerRootView style={{ flex: 1 }}>
          <ImageBackground source={backgroundImg} style={styles.background}>
            <Text style={styles.topText}>TamaGotchiApp</Text>
            <GestureDetector gesture={gestureCompose}>
              <Image
                source={characterImg}
                style={{
                  transform: [
                    {
                      scale: scale,
                    },
                  ],
                }}
              />
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
    justifyContent: "center",
    alignItems: "center",
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
