/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App() {
  const [count, setCount] = useState(0);

  function counter() {
    setCount(count + 1);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <TextInput style={styles.text} testID="inputID">
        {count}
      </TextInput>
      <TouchableOpacity style={styles.button} onPress={counter} testID='ClickButton'>
        <Text style={styles.btnText}>Click</Text>
      </TouchableOpacity>
      {/* <Button title="CLick" onPress={counter} testID="ClickButton" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 25,
  },
  button: {
    backgroundColor: 'green',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    margin: 10,
  },
  btnText: {
    fontSize: 30,
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 'bold',
  },
});

export default App;
