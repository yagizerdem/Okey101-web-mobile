import { View ,Text ,StyleSheet ,ActivityIndicator} from "react-native";

export default function Wait(){


    return(
        <View style={styles.container}>
            <Text style={styles.text}>waiting for players to join ...</Text>
            <ActivityIndicator size="large" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width:200,
        height:100,
        marginTop:50,
        display:'felx',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:20,
        textAlign:'center'
    }
  });
  