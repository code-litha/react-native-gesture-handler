import { StyleSheet, Text, Image, ImageBackground } from "react-native";
import backgroundImg from "./assets/bg.png";
import characterImg from "./assets/mametchi.png";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerSafeArea}>
        <ImageBackground source={backgroundImg} style={styles.background}>
          <Text style={styles.topText}>TamaGotchiApp</Text>
          <Image source={characterImg} />
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: "#5C3526",
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
