import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Touchable,
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
function AddItem({addItem}) {
  const [newItem, setNewItem] = useState('');
  const onChange = value => setNewItem(value);
  return (
    <View>
      <TextInput
        placeholder="Agregar item..."
        style={styles.input}
        onChangeText={onChange}
        value={newItem}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(newItem);
          setNewItem('');
        }}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Agregar Item
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
