import React, {View,StyleSheet,Text} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const Header=(navigation)=>{
      return (
        <View className='App-Header' style={styles.Header}>
          <View style={styles.title}>
            <Text id='title' style={styles.title}>T O K O          H E L M<FontAwesome5/></Text>
          </View>
          
          
        </View>

      )

}


export default Header;


const styles = StyleSheet.create({

  Header:{
    backgroundColor: '#2596B3',
    height:50,
    fontsize: 'large',
    fontweight: 'bolder',
    textalign: 'center',

  },


title:{
    fontSize:22,
    padding:5,
},




},


);