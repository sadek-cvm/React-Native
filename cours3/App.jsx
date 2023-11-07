import React, { useState } from "react";
import { Text, View, Button, Image, TouchableHighlight, StyleSheet } from "react-native";

// class App extends React.Component{
//   state = {valeur: 1};
//   handleButtonPress = () => {
//     this.setState({valeur: this.state.valeur++});
//   }
//   render(){
//     return(
//       <View>
//         <Button onClick={this.handleButtonPress()} title="Click"/>
//         <Text>{this.state.valeur}</Text>
//       </View>
//     )
//   }
  
// }


// En react, toutes les méthodes qui commencent par "Use" sont appelé des "hooks".
// Un hook est une function spéciale qui est diponible quand React et en rafraichissement (au démarage et quand la valeur d'un composant est modifier).
// On ne peut pas les utiliser les dans des boucles ou des conditions, on les mets au début de nos functions/classes

// function App(){
//   const [valeur, setValeur] = useState(1); // valeur initiale

//   return(
//     <View>
//       <Button
//         onPress={() => setValeur(valeur+1)}
//         title={"click"}
//       />
//       <Text>{valeur}</Text>
//     </View>
//   )
// }

const heartImage = require("./images/heart.png");

function App(){

  const [like, setLike] = useState(false); // valeur initiale
  return(
    <View>
      <TouchableHighlight onPress={() => {setLike(!like)}}>
        <Image source={heartImage} style={ like ? styles.like : styles.unlike }/>
      </TouchableHighlight>
      <Text>hello worlddd</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  like: {
    width: 100,
    height: 100,
    tintColor: "#ff0000"
  },
  unlike: {
    width: 100,
    height: 100,
    tintColor: "#f1f1f1"
  }
});




export default App;