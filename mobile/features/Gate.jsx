import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function Gate() {
  const [name, setName] = useState("");
  function onChange(e) {
    console.log(e);
    setName(e);
  }
  function findMatch(){
    if(name.trim().length == 0) return
    else{
        console.log("find match")
    } 
  }
  return (
    <View style={styles.gate}>
      <Text style={styles.title}>Okey 101</Text>
      <TextInput
        onChangeText={(e) => onChange(e)}
        style={styles.input}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={findMatch}>
        <Text style={{ color: "#a0d2eb" }}>find match...</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  gate: {
    width: 200,
    height: 200,
    backgroundColor: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -100,
    marginLeft: -100,
    borderRadius: 10,
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
