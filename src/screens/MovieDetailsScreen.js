import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import movie from '../assets/data/movie';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EpisodeItem from '../components/EpisodeItem';

const MovieDetailsScreen = () => {
  const firstEpisode = movie.seasons.items[0].episodes.items[0];
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}> Movie Details Screen</Text>
      <Image source={{uri: firstEpisode.poster}} style={styles.image} />
      <EpisodeItem episode={firstEpisode} />
      <View style={{padding: 12}}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.match}>98% match</Text>
          <Text style={styles.year}>{movie.year}</Text>
          <View style={styles.ageContainer}>
            <Text style={styles.age}>12+</Text>
          </View>
          <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
          <MaterialIcons name="hd" size={24} color="white" />
        </View>
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playButtonText}>
            <Entypo name="controller-play" size={16} color="black" />
            Play
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>
            <AntDesign name="download" size={16} color="white" /> Download
          </Text>
        </TouchableOpacity>
        <Text style={{color: 'white', marginVertical: 10}}>{movie.plot}</Text>
        <Text style={styles.year}>Cast: {movie.cast}</Text>
        <Text style={styles.year}>Creator: {movie.creator}</Text>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{alignItems: 'center', marginHorizontal: 20}}>
            <AntDesign name="plus" size={30} color="white" />
            <Text style={{color: 'darkgrey'}}>My List</Text>
          </View>
          <View style={{alignItems: 'center', marginHorizontal: 20}}>
            <Feather name="thumbs-up" size={24} color="white" />
            <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
          </View>
          <View style={{alignItems: 'center', marginHorizontal: 20}}>
            <FontAwesome name="send-o" size={24} color="white" />
            <Text style={{color: 'darkgrey', marginTop: 5}}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  match: {
    color: '#59d467',
    fontWeight: 'bold',
    marginRight: 5,
  },
  year: {
    color: '#757575',
  },
  ageContainer: {
    backgroundColor: '#e6e229',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 5,
  },
  age: {
    color: 'black',
    fontWeight: 'bold',
  },
  playButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  playButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  downloadButton: {
    backgroundColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MovieDetailsScreen;
