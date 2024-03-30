import { View, StyleSheet ,Text ,Image} from 'react-native';
export default function Card({name ,src}){

    return(
        <View style={styles.card}>
                  <Image
        source={src}
        style={styles.image}
      />
        <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        width:50,
        height:70,
    },
    image:{
        width:50,
        height:50,
    },
    name:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:14
    }
  });
  