import React from 'react';
import { Text, View, Button } from 'react-native';

export default function EcranAccueil({navigation}) {
    return(
        <View>
            <Text>Evaluation de biere de microbrasseries</Text>
            <Button title="ajouter une evaluation" onPress={()=>navigation.navigate('AjouterEvaluation')}></Button>
            <Button title="voir les evaluations"></Button>
        </View>
    )
}