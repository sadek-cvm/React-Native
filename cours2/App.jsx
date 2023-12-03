import React from 'react';
import { ImageBackground, View, StyleSheet, Image } from 'react-native';


const imagePlay = require("./images/play.png");
const imageVolume = require("./images/sound.png");
const imagePleinEcran = require("./images/full-screen.png");
const imageHd = require("./images/hd-sign.png");
const imageFond = require("./images/video.jpg");
// const image = {uri: "https://...jgp"}

// source = {imagePlay}

function LecteurVideo() {
  
  return (
    <View style={styles.mainBackground}>
        <ImageBackground source={imageFond} style={styles.backgroundImage}>
          <View style={styles.conteneurBas}>
            <Image source={imagePlay} />
            <Image source={imageVolume} />
            <View style={styles.progressBar}></View>
            <Image source={imageHd} />
            <Image source={imagePleinEcran} />
          </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  conteneurBas: {
    flexDirection: "row",
    backgroundColor: "black",
    height: 40,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 30,
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  progressBar:{
    width: 100,
    height: 10,
    backgroundColor: "grey",
    borderRadius: 20
  },
  backgroundImage: {
    height: 300
  },
  mainBackground: {
    height: "100%",
    justifyContent: "center"
  }
  
});

export default LecteurVideo;
