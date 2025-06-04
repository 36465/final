import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, Pressable } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const App = () => {
  const [number, setNumber] = useState(10);
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

  const renderContent = () => {
    switch (number) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        return (
          <View>
            <Text style={styles.subHeader}>best video</Text>
            <Text>this video is funny, please enjoy the video that is 100% shown right now.</Text>
          </View>
        );
      default:
        return (
          <View>
            <Text style={styles.subHeader}>best video</Text>
            <Text>this video is funny, please enjoy the video that is 100% shown right now.</Text>
          </View>
        );
    }
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setDimensions({ window, screen });
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={changenumber} style={styles.pressableArea}>
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