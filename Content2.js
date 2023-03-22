import React, {FlatList,View,StyleSheet,Text} from "react-native";

const data = [
  { Type: 'KYT Kyoto', Deskripsi: 'KYT kyoto merupakan helm half face yang lagi di gandrungi di kalangan remaja sekarang dikarenakan desain yang bagus dan juga harga yang tergolong murah' },
  { Type: 'KYT R10', Deskripsi: 'KYT R10 meruakan helm fullface yang sangat populer dikarenakan model dan harga yang cukup bagus untuk kalangan pelajar'},
  { Type: 'NJS Kairoz', Deskripsi: 'NJS Kairoz merupakan helm yang saat ini sedang ramai dikalangan bikers dikarenakan di harga yang masih terjangkau helm ini menawwarkan fitur seerti helm berharga jutaan, tak heran helm ini menjadi naik harganya di pedagang' },
  { Type: 'ARAI RX7X', Deskripsi: 'ARAI RX7X merupakan helm terbaik yang harus anda miliki karena memiliki kenyamanan yang sangat nyaman dan juga ini merupakan helm yang sangat adem jika dipakai berkendara lama' },
  { Type: 'SHOEI X14', Deskripsi: 'SHOEI X14 merupakan helm dengan bentuk yang sangat aerodinamis dan juga memiliki desain yang sangat cocok dengan anak muda masa kini' },
  { Type: 'SUOMY SR GP', Deskripsi: 'SUOMY SR GP merupakan helm dengan brand asal ITALY yang perusahaan tersebut diakuisisi oleh brand asal Indonesia yaitu KYT' },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.itemType}>{item.Type}</Text>
    <Text style={styles.itemDeskripsi}>{item.Deskripsi}</Text>
  </View>
);

const Table = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 500,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#0099d1',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  itemType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDeskripsi: {
    fontSize: 14,
    paddingLeft:67,
    paddingRight: 40,
  },
});
export default Table;