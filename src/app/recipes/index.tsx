import { Text, View , FlatList } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"

import { Recipe } from "@/components/Recipe"

export default function Recipes(){
  return (
      <View style={styles.container}>
        <View style={styles.header}>
            <MaterialIcons 
            name="arrow-back" 
            size={32} 
            onPress={() => router.back()}/>

          <Text style={styles.tittle}>Igredientes</Text>


        </View>

       

        <FlatList 
          data={["1"]}
          keyExtractor={(item) => item}
          renderItem={() => (
            <Recipe recipe={{ name: "Omelete", image: "https://tse1.mm.bing.net/th?id=OIP.xrYDcY81imTWXA8aRe63CwHaEw&pid=Api&P=0&h=180",
            minutes: 10 }} /> 
           
          )}   
         />   
      
      </View>   
  
  )
}