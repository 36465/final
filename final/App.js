import React, {useState, useEffect} from 'react';
import {useVideoPlayer, VideoView} from 'expo-video';
import {View, StyleSheet, Text, Dimensions, Pressable} from 'react-native';
import {useEvent} from 'expo';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');


const App = () => {

    const [number, setNumber] = useState(1);
    const [HEIGHT, setHEIGHT] = useState();
    const [WIDTH, setWIDTH] = useState();

    
   

  const changenumber = () => {
    if (number < 10) {
      setNumber(number + 1);
    } else {
      setNumber(1);
    }
  };
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    setHEIGHT(dimensions.screen.height);
    setWIDTH(dimensions.screen.width)
  }, [dimensions]);

  useEffect(() => {
  console.log("This is my height ", HEIGHT, " And this is my width, ", WIDTH)
  }, [HEIGHT,WIDTH]);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });

console.log("height =",dimensions.screen.height, "width =", dimensions.screen.width);


  return (
   <>
    <View style={styles.container}>
      <Pressable onPress={() => changenumber()}>
   <Text style={styles.header}>{number}</Text>

      <Text style={styles.header}>Window Dimensions </Text>
      {Object.entries(dimensions.window).map(([key, value]) => (
        <Text key={key}>
          {key} - {value}
        </Text>
      ))}
      <Text style={styles.header}>Screen Dimensions</Text>
      {Object.entries(dimensions.screen).map(([key, value]) => (
        <Text key={key}>
          {key} - {value}
        </Text>
      ))}
        </Pressable>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default App;