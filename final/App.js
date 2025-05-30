import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions, Pressable} from 'react-native';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const App = () => {
  const [number, setNumber] = useState(1);
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

 const changenumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    } else {
      setNumber(10);
    }
  };


  // Screens
  const renderContent = () => {
    switch(number) {
      case 1:
        return (
          <View>
            <Text style={styles.subHeader}>best video</Text>
            <Text>this video if funny, please enjoy the video that is 100% shown right now.</Text>
          </View>
        );

      case 2:
        return (
          <View>
            <Text style={styles.subHeader}>best video</Text>
            <Text>this video if funny, please enjoy the video that is 100% shown right now.</Text>
          </View>
        );

      case 3:
        return (
          <View>
            <Text style={styles.subHeader}>best video</Text>
            <Text>this video if funny, please enjoy the video that is 100% shown right now.</Text>
          </View>
        );

      case 4:
        return (
          <View>
            <Text style={styles.subHeader}>best video</Text>
            <Text>this video if funny, please enjoy the video that is 100% shown right now.</Text>
          </View>
        );

      case 5:
        return (
          <View>
            <Text style={styles.subHeader}>best video</Text>
            <Text>this video if funny, please enjoy the video that is 100% shown right now.</Text>
          </View>
        );

      case 6:
        return (
          <View>
            <Text style={styles.subHeader}>best video</Text>
            <Text>this video if funny, please enjoy the video that is 100% shown right now.</Text>
          </View>
        );
      
      case 7:
        return (
          <View>
            <Text style={styles.subHeader}>best video</Text>
            <Text>this video if funny, please enjoy the video that is 100% shown right now.</Text>
          </View>
        );

      case 8:
        return (
          <View>
            <Text style={styles.subHeader}>best video</Text>
            <Text>this video if funny, please enjoy the video that is 100% shown right now.</Text>
          </View>
        );

      case 9:
        return (
          <View>
            <Text style={styles.subHeader}>best video</Text>
            <Text>this video if funny, please enjoy the video that is 100% shown right now.</Text>
          </View>
        );

      case 10:
        return (
          <View>
            <Text style={styles.subHeader}>best video</Text>
            <Text>this video if funny, please enjoy the video that is 100% shown right now.</Text>
          </View>
        );

      // blank
      default:
        return (
          <View>
            <Text style={styles.subHeader}>best video</Text>
            <Text>this video if funny, please enjoy the video that is 100% shown right now.</Text>
          </View>
        );


  // 
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      }
    );
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Pressable 
        onPress={changenumber} 
        style={styles.pressableArea}
      >
        <Text style={styles.header}>Top 10 videos: {number}</Text>
        {renderContent()}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  pressableArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: '#444',
  },
});

export default App;