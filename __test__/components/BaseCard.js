import { View, StyleSheet, Dimensions, Image, Text } from "react-native";

const { height } = Dimensions.get("window");
function BaseCard() {
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.container}>
        <View style={styles.cardImg}>
          <Image
            source={{
              uri: "https://v1.tailwindcss.com/img/card-top.jpg",
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.cardContent}>
          <View style={{ padding: 15 }}>
            <Text
              style={{ fontSize: 24, fontWeight: "bold", color: "#4a5568" }}
            >
              The Coldest Sunset
            </Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </Text>
            <View style={{ paddingTop: 5, flexDirection: "row" }}>
              <View style={styles.tagContainer}>
                <Text style={styles.tagText}>#photography</Text>
              </View>
              <View style={styles.tagContainer}>
                <Text style={styles.tagText}>#travel</Text>
              </View>
              <View style={styles.tagContainer}>
                <Text style={styles.tagText}>#winter</Text>
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
    height: height / 2,
    width: "90%",
    backgroundColor: "tomato",
    // borderColor: "grey",
    // borderWidth: 0.5,
    borderRadius: 15,
    overflow: "hidden",
  },
  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  cardImg: { flex: 1, backgroundColor: "green" },
  img: { flex: 1, resizeMode: "cover" },
  cardContent: { flex: 1, backgroundColor: "#fff" },
  content: {
    color: "#4a5568",
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 1.5 * 16,
  },
  tagContainer: {
    borderRadius: 16,
    backgroundColor: "#edf2f7",
    padding: 8,
    marginRight: 8,
  },
  tagText: { color: "#4a5568", fontWeight: "600" },
});

export default BaseCard;
