/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from "react";
import {View, Text, StyleSheet} from "react-native";

/* composant fonctionnel */
function Chanson() {
    const nom = 'Baby';

    return(
        <View style={styles.viewAppearance}>
            <Text>{nom}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        viewAppearance : {
            backgroundColor: '#fff000',
            borderRadius:8,
            margin:10,
        }
    }
)

/* composant fonctionnel (arrow function */
// const Chanson = () => {
//     const nom = 'Baby';

//     return(
//         <View>
//             <Text>{nom}</Text>
//         </View>
//     )
// }

/* composant de classe */
// class Chanson extends React.Component{

//     render(){
//         const nom = 'Baby';
    
//         return(
//             <View>
//                 <Text>{nom}</Text>
//             </View>
//         )
//     }
    
// }


export default Chanson;