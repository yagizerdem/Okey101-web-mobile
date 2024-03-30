import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import queryObject from "../queryObject";
import { useSelector } from "react-redux";
export default function TileStack({ no }) {
  const gameSlice = useSelector((state) => state.game);

  function takePiece() {
    queryObject.takePiece({ stackno: no });
  }
  function pushPiece() {
    if(gameSlice.from.length == 0) return
    const uuid = gameSlice.boardMatrix[gameSlice.from[0]][gameSlice.from[1]].uuid
    console.log(no)
    queryObject.dropPiece(uuid,no)
  }
  var toppiece = null;
  if (no == 1) toppiece = gameSlice.stack1;
  else if (no == 2) toppiece = gameSlice.stack2;
  else if (no == 3) toppiece = gameSlice.stack3;
  else if (no == 4) toppiece = gameSlice.stack4;

  let onPressHandler = null;
  if (no == gameSlice.no || no == 5) onPressHandler = takePiece;
  else if ((gameSlice.no % 4) + 1 == no) onPressHandler = pushPiece;

  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.container}>
    <View>
      {no == 5 && (
          <View style={styles.tile}>
            <LinearGradient
              colors={["#dbcdcc", "#c4b9b9", "#c4b9b9", "#b3abab", "#dbcdcc"]}
              style={styles.background}
            />
          </View>
      )}
    </View>
        {no != 5 && toppiece != null && (
          <View style={styles.tile}>
            <LinearGradient
              colors={["#dbcdcc", "#c4b9b9", "#c4b9b9", "#b3abab", "#dbcdcc"]}
              style={styles.background}
            />
            <Text style={{ color: toppiece.color }}>{toppiece.number}</Text>
            <Text style={{ color: toppiece.color, fontSize: 8 }}>
              {toppiece.color}
            </Text>
          </View>
        )}
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    top: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "dotted",
  },
  tile: {
    width: 500 / 15,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5, // Add border width
    borderColor: "black", // Add border color
    overflow: "hidden", // Ensure border doesn't overflow
  },
  background: {
    width: "100%", // Use percentage width
    height: "100%", // Use percentage height
    position: "absolute",
  },
});
