import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EpisodeItem = ({episode}) => {
  return (
    <Pressable>
      <View style={styles.episodeRow}>
        <Image style={styles.image} source={{uri: episode.poster}} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>
        <AntDesign name="download" size={24} color="white" />
      </View>
      <Text style={styles.plot}>{episode.plot}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  episodeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: 'black',
  },
  image: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    borderRadius: 3,
  },
  title: {
    color: 'white',
  },
  titleContainer: {
    padding: 5,
    justifyContent: 'center',
    flex: 1,
  },
  duration: {
    color: 'darkgrey',
    fontSize: 10,
  },
  plot: {
    color: 'darkgrey',
  },
});

export default EpisodeItem;
