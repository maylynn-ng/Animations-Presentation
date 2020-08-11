import React, { useRef, useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import Modal from 'react-native-modal';

import Slide from './slides/slide'
import { whatPoints, whyPoints, howPoints } from './points';

import learning from './animations/learning.json';
import welcome from './animations/welcome.json';
import editing from './animations/editing.json';
import floatingGuy from './animations/floatingGuy.json';
import ideas from './animations/ideas.json';
import thinking from './animations/thinking.json';
import how from './animations/how.json';
import what from './animations/what.json';
import firework from './animations/firework.json';


export default function App() {

  const [isWhatVisible, setIsWhatVisible] = useState(false);
  const [isWhyVisible, setIsWhyVisible] = useState(false);
  const [isHowVisible, setIsHowVisible] = useState(false);

  const learningAnimation = useRef(null);
  const welcomeAnimation = useRef(null);
  const editingAnimation = useRef(null);
  const floatingGuyAnimation = useRef(null);
  const ideasAnimation = useRef(null);
  const thinkingAnimation = useRef(null);
  const howAnimation = useRef(null);
  const whatAnimation = useRef(null);
  const fireworkAnimation = useRef(null);
 

  return (
    <View style={styles.container}>
      <View style={styles.dashboard}>
      <Button 
        title="PRESS FOR AWESOME"
        onPress={fireworkAnimation.current.play()} />
      <LottieView
        autoPlay={true}
        ref={welcomeAnimation}
        source={welcome} />
      <LottieView
        style={styles.learning}
        autoPlay={true}
        ref={learningAnimation}
        source={learning} />

      
      <LottieView
        style={styles.firework}
        autoplay={true}
        loop={true}
        ref={fireworkAnimation}
        source={firework} />

      </View>

      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => setIsWhatVisible(true)}>
          <View>  
          <LottieView
            style={styles.buttons}
            autoPlay={true}
            ref={editingAnimation}
            source={editing} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsWhyVisible(true)}>
          <LottieView
            style={styles.buttons}
            autoPlay={true}
            ref={floatingGuyAnimation}
            source={floatingGuy} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsHowVisible(true)}>
          <LottieView
            style={styles.buttons}
            autoPlay={true}
            ref={ideasAnimation}
            source={ideas} /> 
        </TouchableOpacity>
      </View>

      <Modal
        onBackdropPress={() => setIsWhatVisible(false)}
        isVisible={isWhatVisible} >
        <Slide heading={"WHAT IS IT"} points={whatPoints} animationSource={what} animationRef={whatAnimation} />
      </Modal>
      <Modal
        onBackdropPress={() => setIsWhyVisible(false)}
        isVisible={isWhyVisible} >
        <Slide heading={"WHY USE IT"} points={whyPoints} animationSource={thinking} animationRef={thinkingAnimation}/>
      </Modal>
      <Modal
        onBackdropPress={() => setIsHowVisible(false)}
        isVisible={isHowVisible} >
        <Slide heading={"HOW USE IT"} points={howPoints} animationSource={how} animationRef={howAnimation}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcome: {
    width: 200,
  },
  learning: {
    width: 200,
    height: 200,
    marginTop: 80,
  },
  firework: {
    position: 'absolute',
    width: 800,
    height: 800,
  },
  dashboard: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    flexDirection: 'row',
    marginTop: 200,
  },
  buttons: {
    width: 100,
  }
});

// import firework from './animations/firework.json';

// const [isFireworkVisible, setIsFireworkVisible] = useState(false);

// const fireworkAnimation = useRef(null);


{/* <Button
title="PRESS FOR AWESOME"
onPress={async () => {
  await setIsFireworkVisible(true)
  fireworkAnimation.current.play()}} />
<LottieView
  style={styles.learning}
  autoPlay={true}
  ref={learningAnimation}
  source={learning} />

{isFireworkVisible && 
<LottieView
  style={styles.firework}
  loop={true}
  ref={fireworkAnimation}
  source={firework} />} */}