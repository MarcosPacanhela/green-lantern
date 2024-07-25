import React, {useState} from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import lanternOn from './assets/pictures/symbol-on.png';
import lanterOff from './assets/pictures/symbol-off.png';
export default function App() {
  const [ActiveLantern, setActiveLantern] =useState(false);
  function handleSymbol() {
    setActiveLantern((oldValue: boolean) => {
        return !oldValue
    })
  }
  return (
    <View style={ActiveLantern? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image 
        source={
          ActiveLantern ? 
          lanternOn: 
          lanterOff}/>
      </TouchableOpacity>  
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
