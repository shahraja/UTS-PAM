import React, {View,StyleSheet,Text} from "react-native";
import react from "react";

const Biodata = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>UTS PENGEMBANGAN APLIKASI MOBILE RA</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Nama:</Text>
          <Text style={styles.text}>Shah Raja Abdullah Al Turtusi</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>NIM:</Text>
          <Text style={styles.text}>120140064</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Program Studi:</Text>
          <Text style={styles.text}>S1 Teknik Informatika</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Tempat Tanggal Lahir:</Text>
          <Text style={styles.text}>Tangerang, 1 Desember 2002</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Alamat:</Text>
          <Text style={styles.text}>Jl. P. Tirtayasa Gg Rewok</Text>
        </View>
      </View>
      
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    label: {
      flex: 1,
      fontWeight: 'bold',
    },
    text: {
      flex: 2,
    },
  });
  
  export default Biodata;