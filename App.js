import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  View,
  Text,
} from 'react-native';
import {Input, Button} from './src/components';


const App = () => {
  const [toDoTitle, settoDoTitle] = useState('');
  const [toDoDesc, settoDoDesc] = useState('');
  const [toDoData, settoDoData] = useState([]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.toDoTitle}</Text>
      <Text style={styles.dsc}>{item.toDoDesc}</Text>
    </View>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 0.7}}>
        <View style={{flex: 1, alignItems: 'center', paddingTop:20}}>
          <Input
           placeholder={'Title'}
           value={toDoTitle}
           onChangeText={(tite) => settoDoTitle(tite)}
          />
          <Input
           placeholder={'take a notes..'}
           value={toDoDesc}
           onChangeText={(desc) => settoDoDesc(desc)}
          />
          <Button
            text={'Save'}
            onPress={() => {
              let array = toDoData.slice()
              let object = {
                id: toDoData.length,
                toDoTitle,
                toDoDesc,
              };
              array.push(object);

              settoDoData(array);
            }}
          />


        </View>
        <FlatList
          style={{ flex:1}}
          data={toDoData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => {
            return (
              <View style={{ alignItems: 'center', marginTop:25}}>
                <Text style={{ fontSize: 15, color: 'gray'}}>Note not found, save a note</Text>
              </View>
            )
          }}
          ListHeaderComponent={() => {
            return (
              <View style={{ height: 50, alignItems:'center'}}>
                <Text style={{ fontSize: 30, fontWeight: 'bold'}}> Notes </Text>
              </View>
            )
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'gray'

  },
  title: {
    fontSize: 18,
  },
  dsc: {
    fontSize: 14,
    color: 'gray'
  },
});

export default App;