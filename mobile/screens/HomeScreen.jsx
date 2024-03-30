import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Gate from '../features/Gate';
const bakcgroundimg = require('../assets/background.jpg')
export default function HomeScreen(){

    return(
        <ImageBackground style={styles.home} source={bakcgroundimg}>
            <Gate></Gate>
        </ImageBackground>
    )
}

const styles =  StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:'red'
    }
})
