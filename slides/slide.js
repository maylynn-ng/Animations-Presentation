import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


export default function Slide({heading, points, animationSource, animationRef}) {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <FlatList
        style={styles.list}
        data={points}
        keyExtractor={(point) => point}
        renderItem={(point) =>
          (<Text style={styles.listItem} > - {point.item}</Text>)
        } />
      <LottieView
        style={styles.animation}
        autoPlay={true}
        loup={true}
        ref={animationRef}
        source={animationSource} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  heading: {
    alignSelf: "center", 
    fontSize: 48,
    margin: 15,
    fontWeight: 'bold',
  },
  list: {
    margin: 10,
  },
  listItem: {
    marginTop: 10,
    fontSize: 24,
  },
  animation:  {
    width: 200,
    alignSelf: "center",
    marginBottom: 10,
  }
})