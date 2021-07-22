import React, {useRef} from 'react'
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native'
import {welcomeData} from '../../provitionalData/welcomeData'
import Paginator from '../atoms/Paginator'
import WelcomeItem from '../molecules/WelcomeItem'

const Carrousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={welcomeData}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <WelcomeItem item={item}/>}
        scrollEventThrottle={32}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
          useNativeDriver: false
        })}
      />
      <Paginator data={welcomeData} scrollX={scrollX}/>
    </View>
  )
}

export default Carrousel

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: 'center',
  }
})