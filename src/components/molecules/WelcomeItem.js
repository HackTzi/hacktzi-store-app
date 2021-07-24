// @flow
/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import {
  StyleSheet, Text, View, Image, useWindowDimensions,
} from 'react-native';

const WelcomeItem = ({ item }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image source={item.image} style={[styles.image, { width: width * 0.85, height: height * 0.5 }]} />
      <View style={{ width }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default WelcomeItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',

  },
  description: {
    fontWeight: 'normal',
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
    paddingHorizontal: 15,
  },
});
