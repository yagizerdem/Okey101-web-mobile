import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { moveInBoard } from "../gameSlice";
import { setFrom } from '../gameSlice';
export default function EmptyTile({ row, col, showOutline }) {
  const gameSlice = useSelector(state => state.game)
  const dispatch = useDispatch()
  function onPress() {
    if(gameSlice.from.length > 0){
      dispatch(moveInBoard({from:gameSlice.from ,to:[row,col]}))
      dispatch(setFrom([]))
    }
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={
          !showOutline
            ? { ...styles.emptytile }
            : {
                ...styles.emptytile,
                borderWidth: 1,
                borderColor: "#e5eaf5",
                borderStyle: "solid",
              }
        }
      ></View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  emptytile: {
    width: 500 / 15,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
