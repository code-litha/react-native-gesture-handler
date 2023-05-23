import {
  StyleSheet,
  // SafeAreaView,
  Text,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import backgroundImg from "./assets/bg.png";
import characterImg from "./assets/mametchi.png";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";
import { useState } from "react";
import BaseCard from "./components/BaseCard";

export default function App() {
  const [scale, setScale] = useState(1);
  const [savedScale, setSavedScale] = useState(1);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    // .maxDelay(5000)
    .onBegin((e) => {
      // console.log(e, "<<< event dua kali tap");
      // bisa merubah state / mau ngapain
      // Alert.alert("Begin ke tap");
    })
    .onStart((e) => {
      // console.log(e, "<<< event");
      setSavedScale(1);
      setScale(1);
      Alert.alert("Berhasil ke tap 2 kali");
    })
    .onEnd((e) => {
      console.log("tap selesai");
    });

  const pinch = Gesture.Pinch()
    .onUpdate((e) => {
      // console.log(e);
      // setScale(e.scale);
      setScale(savedScale * e.scale);
    })
    .onEnd(() => {
      // console.log("finish pinch");
      setSavedScale(scale);
    });

  const gesture = Gesture.Exclusive(doubleTap, pinch);

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <BaseCard />
    </SafeAreaView>
  );
  // return (
  //   <SafeAreaView style={styles.containerSafeArea}>
  //     <GestureHandlerRootView style={{ flex: 1 }}>
  //       <ImageBackground source={backgroundImg} style={styles.background}>
  //         <Text style={styles.topText}>TamaGotchiApp</Text>
  //         <GestureDetector gesture={gesture}>
  //           <Image
  //             source={characterImg}
  //             style={[
  //               styles.character,
  //               {
  //                 transform: [
  //                   {
  //                     scale,
  //                   },
  //                 ],
  //               },
  //             ]}
  //           />
  //         </GestureDetector>
  //       </ImageBackground>
  //     </GestureHandlerRootView>
  //   </SafeAreaView>
  // );
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
