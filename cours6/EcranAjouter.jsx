import { Slider } from '@react-native-assets/slider';
import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default function EcranAjouter({navigation}) {
    return(
        <View>
            <Text>Evaluation de biere artisanales</Text>
            <TextInput placeholder="entrer le nom de la biere"></TextInput>
            <View style={styles.rangee}>
                <Text style={{flex:1}}>Evaluation</Text>
                <Slider maximumValue={5} minimumValue={0}  style={{flex:3}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        rangee:{
            flexDirection:"row"
        }
    }
)