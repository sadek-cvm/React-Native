import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const guignoleeImage = require("./images/guignolee.jpg");



function App() {

  const [don, setDon] = useState(0);

  function ajouter1Dollar(){
    setDon(don + 1);
  }

  function ajouter2Dollar(){
    setDon(don + 2);
  }

  return (
    <View style={styles.mainContainer}>
      <View>
        <Image style={styles.image} source={guignoleeImage} />
      </View>
      <View>
        <Text style={styles.text}>Voulez-vous faire un Don ?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={ajouter1Dollar}> 
          <Text style={styles.buttonText}>don de 1$</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={styles.button} onPress={ajouter2Dollar}> 
          <Text style={styles.buttonText}>don de 2$</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>Merci pour votre don de : {don} $</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer : {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image : {
    width:160,
    height:160,
  },
  button : {
    backgroundColor: "red",
    paddingHorizontal: 45,
    paddingVertical: 15,
    marginHorizontal: 20,
  },
  text : {
    color: "red",
  },
  buttonText : {
    color: "white",
  },
  buttonContainer : {
    flexDirection: "row",
  },
});

export default App;
