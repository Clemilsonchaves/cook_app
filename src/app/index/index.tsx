import { useEffect } from "react"
import { View, Text, ScrollView, Alert } from "react-native"  
import { router } from "expo-router"  

import { services } from "@/services"

import { styles } from  "./styles"  

import { Ingredient } from "@/components/ingredient"
import { useState } from "react"
import { Selected } from "@/components/Selected"

export default function Index(){ 
  const [selected, setSelected] = useState<string[]>([])
  const [ ingredients, setIgredients] = useState<IngredientResponse[]>([])

  function handleToggleSelected(value: string){
   if(selected.includes(value)) {
    return setSelected((state) => state.filter((item) => item !== value ))
   }

   setSelected((state) => [...state, value])
   console.log(selected)
  }

  function handleClearSelected(){
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) },
    ] )
    setSelected([])
  }

  function handleSearch(){
    router.navigate("/recipes")
  } 

  useEffect(() => {
    services.ingredients.findAll().then(setIgredients)
  }, [])

  return (
    <View style={styles.container}>  
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descubra a receita baseada nos produtos que você escolheu
      </Text>

      <ScrollView  
      contentContainerStyle={styles.ingredients}
      showsVerticalScrollIndicator={false}
      > 
        
          {ingredients.map((item ) => (
            <Ingredient 
            key={item.id} 
            name={item.name}
            image={`${services.Storage.imagePath}/${item.image}`} 
            selected = {selected.includes(String(item.id))}
            onPress={() => handleToggleSelected(String(item.id))} />
          ))}
      </ScrollView>

      {selected.length > 0 && (
        <Selected  
       quantity={selected.length}
       onClear={handleClearSelected}
       onSearch={handleSearch}
       
       />
      )}
      
    </View>  

  )
}