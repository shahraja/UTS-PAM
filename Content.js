import React, {FlatList,View,StyleSheet,Text} from "react-native";

const data = [
  { Merk: 'KYT', Model: 'Kyoto, R10' },
  { Merk: 'NJS', Model: 'Kairoz' },
  { Merk: 'ARAI', Model: 'RX7X' },
  { Merk: 'SHOEI', Model: 'X14' },
  { Merk: 'SUOMY', Model: 'SR GP' },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.itemMerk}>{item.Merk}</Text>
    <Text style={styles.itemModel}>{item.Model}</Text>
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
    paddingBottom: 300,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0099d1',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  itemMerk: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemModel: {
    fontSize: 14,
  },
});

export default Table;