import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";


export default function App(){

  const [donnees, setDonnees] = useState([]);
  const [chargement, setChargement] = useState(true);

  async function loader(){
    try{
      const response = await fetch('https://api.jsonbin.io/v3/b/655a97bc12a5d376599bdc0a?meta=false');
      const json = await response.json();
      setDonnees(json);
    }
    catch(err){
      console.error(err)
    }
    finally{
      setChargement(false);
    }
  }

  useEffect(() => {
    loader();
  }, []);

  return (
    <View>
      {chargement ? <Text>chargement en cours</Text> : 
      <FlatList 
        data={donnees} 
        renderItem={({item}) =>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        }
      />
      }
    </View>
  );
}


// notes :

// await : un mot clé où on fait en sorte d'attendre un resultat de la ligne (positif ou non) avant de passer à la ligne suivante
// async : simplification de la syntaxe lorsqu'on utilise du code asynchrone à l'intérieure de notre somposant qui lui est synchrone (js de base) blocking

// FlatList props:
  // data
  // renderItem
  // keyExtractor