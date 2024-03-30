import { Fragment, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { setGameState } from "../gameSlice";
import SD from "../SD";
import queryObject from "../queryObject"

export default function Gate() {
  const [name, setName] = useState("");
  const dispatch = useDispatch()
  function onChange(e) {
    console.log(e);
    setName(e);
  }
  function findMatch(){
    if(name.trim().length == 0) return
    else{
        dispatch(setGameState(SD.gameStates.search))
        queryObject.findMatch(name)
    } 
  }
  return (
    <Fragment>
      <Text style={styles.title}>Okey 101</Text>
      <TextInput
        onChangeText={(e) => onChange(e)}
        style={styles.input}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={findMatch}>
        <Text style={{ color: "#a0d2eb" }}>find match...</Text>
      </TouchableOpacity>
    </Fragment>

  );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  input: {
    width: 150,
    height: 30,
    backgroundColor: "red",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#e5eaf5",
  },
  button: {
    width: 100,
    height: 30,
    backgroundColor: "#e5eaf5",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
