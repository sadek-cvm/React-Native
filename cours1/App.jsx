import React from 'react'
import { View, StyleSheet} from "react-native"
import Chanson from './Chanson'



function creerTab(){
    const tab = [];
    for(let i = 0; i < 4; i++){
        tab.push(<Chanson />);
    }
    return tab;
}

function Playlist(){

    return (
        <View>
            <View style={style.viewAppearance}>
                <Chanson />  
                <Chanson /> 
            </View>
            <View style={style.viewAppearance}>
                <Chanson />  
                <Chanson /> 
            </View>

        </View>
    )
}

const style = StyleSheet.create(
    {
        viewAppearance : {
            flexDirection: "row",
            justifyContent: "space-between"
        }
    }
)

export default Playlist