import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

const HomeCategory = ({category}) => {
  const renderItem = ({item}) => {
    return <Image source={{uri: item.poster}} style={styles.image} />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 170,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 5,
    margin: 5,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
});
export default HomeCategory;
