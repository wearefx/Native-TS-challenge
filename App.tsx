import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import Header from './components/Header';
import dummyData from './assets/dummyData.json';
import SimpleCard from './components/SimpleCard';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#eb0042',
  },
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  text: {
    paddingBottom: 20,
    fontSize: 36,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <View>
          <Text style={styles.text}>TV Shows</Text>
          <FlatList
            data={dummyData}
            renderItem={({item}) => <SimpleCard data={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
