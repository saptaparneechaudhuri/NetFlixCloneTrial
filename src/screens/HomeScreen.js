import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import categories from '../assets/data/categories';
import HomeCategory from '../components/HomeCategory';

const HomeScreen = () => {
  // const [categories, setCategories] = useState([]);

  const firstCategory = categories.items[0];
  const renderItem = ({item}) => {
    return <HomeCategory category={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={categories.items} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default HomeScreen;
