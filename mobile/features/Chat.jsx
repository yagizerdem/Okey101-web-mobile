import { Fragment, useState } from "react";
import { Dimensions, ScrollView, TextInput } from "react-native";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import queryObject from "../queryObject";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Chat() {
  const [open, setOpen] = useState(false);
  const msg = open ? "close chat" : "open chat"; //derived state
  const [chatmsg , setChatmsg] = useState('')
  const allChat = useSelector((state) => state.game).globalChat;

  function sendChat(){
    if(chatmsg.trim().length > 0) queryObject.sendChat(chatmsg)
  }
  return (
    <Fragment>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setOpen((prev) => !prev)}
      >
        <View>
          <Text>{msg}</Text>
        </View>
      </TouchableOpacity>
      {open && (
        <Fragment>
                    <View style={styles.container}>
          {/* close chat */}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setOpen((prev) => !prev)}
          >
            <View>
              <Text>{msg}</Text>
            </View>
          </TouchableOpacity>
          <ScrollView style={styles.scroll}>
            <View style={styles.chat}>
              {allChat.map((item , i) => (
                <Text style={styles.text} key={i}>{item}</Text>
              ))}
            </View>
          </ScrollView>
        </View>
        <TextInput style={styles.input} placeholder="you can chat " onChangeText={(e)=>setChatmsg(e)}></TextInput>
        <TouchableOpacity onPress={sendChat} style={styles.chatbtncontainer} >
            <View style={styles.chatbtn} >
                <Text>send chat</Text>
            </View>
        </TouchableOpacity>
        </Fragment>
      )}
    </Fragment>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 40,
    backgroundColor: "#d0bdf4",
    position: "absolute",
    top: "50%",
    left: 20,
    marginTop: -20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "black",
    opacity: 0.7,
    position: "absolute",
    zIndex: 1,
  },
  scroll: {
    width: 200,
    height: 200,
    backgroundColor: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -140,
    marginLeft: -100,
  },
  chat: {
    padding: 10,
  },
  text: {
    textAlign: "center",
    marginTop: 10,
  },
  input:{
    position:'absolute',
    backgroundColor:'#e5eaf5',
    width:200,
    height:30,
    bottom:80,
    left:'50%',
    marginLeft:-100
  },
  chatbtn:{
    width:100,
    height:30,
    backgroundColor:'#d0bdf4',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
},
  chatbtncontainer:{
    position:'absolute',
    bottom:40,
    left:'50%',
    marginLeft:-50
  }
});
