// @flow
/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import {
  StyleSheet, View, Animated, useWindowDimensions,
} from 'react-native';

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [5, 30, 5],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />;
      })
      }
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 5,
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 7.5,
  },
});
