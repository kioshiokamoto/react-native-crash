import React, {useState} from 'react';
import {Alert, FlatList, StyleSheet, View} from 'react-native';
import uuid from 'uuidv4';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';

function App() {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Compra 1'},
    {id: uuid(), text: 'Compra 2'},
    {id: uuid(), text: 'Compra 3'},
  ]);

  const deleteItem = id => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Porfavor ingrese item');
      return;
    }
    setItems(prev => [...prev, {id: uuid(), text}]);
  };

  return (
    <View style={styles.container}>
      <Header title="Lista de compra" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
