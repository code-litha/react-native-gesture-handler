import { StyleSheet, View, Dimensions, Image, Text } from "react-native";

const { height } = Dimensions.get("window");

export default function Card() {
  return (
    <View style={styles.shadowContainer}>
      <View style={[styles.container]}>
        <View style={{ backgroundColor: "blue", flex: 1 }}>
          <Image
            source={{ uri: "https://v1.tailwindcss.com/img/card-top.jpg" }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ padding: 15, flex: 1, gap: 10 }}>
            <Text
              style={{ color: "#4a5568", fontSize: 20, fontWeight: "bold" }}
            >
              The Coldest Sunset
            </Text>
            <Text
              style={{ color: "#566172", fontSize: 17, lineHeight: 1.3 * 17 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </Text>

            <View
              style={{ flex: 1, flexDirection: "row", gap: 10, marginTop: 30 }}
            >
              <View
                style={{
                  backgroundColor: "#edf2f7",
                  borderRadius: 15,
                  padding: 10,
                }}
              >
                <Text>#photography</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#edf2f7",
                  borderRadius: 15,
                  padding: 10,
                }}
              >
                <Text>#travel</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#edf2f7",
                  borderRadius: 15,
                  padding: 10,
                }}
              >
                <Text>#winter</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // height: "60%",
    height: height / 2,
    width: "80%",
    // borderWidth: 2,
    // borderColor: "black",
    borderRadius: 15,
    overflow: "hidden",
  },
  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
