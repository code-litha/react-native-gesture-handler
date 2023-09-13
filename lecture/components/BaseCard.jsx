import { Image, StyleSheet, View, Text, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");
export default function BaseCard() {
  return (
    <View style={styles.shadowContainer}>
      <View style={[styles.container]}>
        {/* Gambar */}
        <View style={{ backgroundColor: "blue", flex: 1 }}>
          <Image
            style={{ flex: 1, resizeMode: "cover" }}
            source={{ uri: "https://v1.tailwindcss.com/img/card-top.jpg" }}
          />
        </View>

        {/* Content */}
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
          <View style={{ padding: 12 }}>
            <Text
              style={[
                styles.textXL,
                styles.textColor,
                { fontWeight: "700", marginBottom: 10 },
              ]}
            >
              The Coldest Sunset
            </Text>
            <Text
              style={[
                styles.textMedium,
                styles.textColor,
                { lineHeight: 1.4 * 16 },
              ]}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.{" "}
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                marginTop: 20,
              }}
            >
              <View
                style={[styles.tagBgColor, { padding: 8, borderRadius: 15 }]}
              >
                <Text style={[styles.textColor, { fontWeight: "600" }]}>
                  #photography
                </Text>
              </View>
              <View
                style={[styles.tagBgColor, { padding: 8, borderRadius: 15 }]}
              >
                <Text style={[styles.textColor, { fontWeight: "600" }]}>
                  #travel
                </Text>
              </View>
              <View
                style={[styles.tagBgColor, { padding: 8, borderRadius: 15 }]}
              >
                <Text style={[styles.textColor, { fontWeight: "600" }]}>
                  #winter
                </Text>
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
    // borderWidth: 1,
    borderRadius: 20,
    width: "80%",
    height: height * 0.47,
    // height: "50%",
    overflow: "hidden",
  },
  textColor: {
    color: "rgb(74, 85, 104)",
  },
  textXL: {
    fontSize: 25,
  },
  textLarge: {
    fontSize: 20,
  },
  textMedium: {
    fontSize: 16,
  },
  textSmall: {
    fontSize: 12,
  },
  tagBgColor: {
    backgroundColor: "#edf2f7",
  },
  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: "transparent",
  },
});
