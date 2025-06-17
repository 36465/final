import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions, Pressable, Button} from 'react-native';
import {useVideoPlayer, VideoView} from 'expo-video';
import { useEvent } from 'expo';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const App = () => {

    const [number, setNumber] = useState(1);
    const [HEIGHT, setHEIGHT] = useState();
    const [WIDTH, setWIDTH] = useState();
 
const video1 = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
// replace video2-3 urls later.
const video2 = 'https://videos.pexels.com/video-files/32228777/13745033_1440_2560_30fps.mp4';
const video3 = 'https://videos.pexels.com/video-files/32591082/13898190_1440_2560_30fps.mp4';
const video4 = 'https://videos.pexels.com/video-files/27349959/12121107_2560_1440_30fps.mp4';
const video5 = 'https://videos.pexels.com/video-files/31049468/13269779_1440_2560_30fps.mp4';
const video6 = 'https://videos.pexels.com/video-files/32523077/13869278_1440_2560_60fps.mp4';
const video7 = 'https://videos.pexels.com/video-files/31740830/13523848_1440_2560_100fps.mp4';
const video8 = 'https://videos.pexels.com/video-files/32144507/13705434_1440_2560_30fps.mp4';
const video9 = 'https://videos.pexels.com/video-files/32391111/13816877_1440_2082_25fps.mp4';
const video10 = 'https://videos.pexels.com/video-files/32263573/13760090_1080_1920_30fps.mp4';


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


// player 1
useEffect(() => {
player1.pause();
    }, [number]);

    useEffect(() => {
player1.pause();
    }, []);

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


  const player1 = useVideoPlayer(video1, player1 => {
    player1.loop = true;
    player1.play();
  });

  const { isPlaying } = useEvent(player1, 'playingChange', { isPlaying: player1.playing });

// player 2
  useEffect(() => {
player2.pause();
    }, [number]);

    useEffect(() => {
player2.pause();
    }, []);

  const player2 = useVideoPlayer(video2, player2 => {
    player2.loop = true;
    player2.play();
  });

  // player 3
  useEffect(() => {
player3.pause();
    }, [number]);

    useEffect(() => {
player3.pause();
    }, []);

  const player3 = useVideoPlayer(video3, player3 => {
    player3.loop = true;
    player3.play();
  });

  // player 4
  useEffect(() => {
player4.pause();
    }, [number]);

    useEffect(() => {
player4.pause();
    }, []);

  const player4 = useVideoPlayer(video4, player4 => {
    player4.loop = true;
    player4.play();
  });

    // player 5
  useEffect(() => {
player5.pause();
    }, [number]);

    useEffect(() => {
player5.pause();
    }, []);

  const player5 = useVideoPlayer(video5, player5 => {
    player5.loop = true;
    player5.play();
  });

     // player 6
  useEffect(() => {
player6.pause();
    }, [number]);

    useEffect(() => {
player6.pause();
    }, []);

  const player6 = useVideoPlayer(video6, player6 => {
    player6.loop = true;
    player6.play();
  });

     // player 7
  useEffect(() => {
player7.pause();
    }, [number]);

    useEffect(() => {
player7.pause();
    }, []);

  const player7 = useVideoPlayer(video7, player7 => {
    player7.loop = true;
    player7.play();
  });

     // player 8
  useEffect(() => {
player8.pause();
    }, [number]);

    useEffect(() => {
player8.pause();
    }, []);

  const player8 = useVideoPlayer(video8, player8 => {
    player8.loop = true;
    player8.play();
  });

     // player 9
  useEffect(() => {
player9.pause();
    }, [number]);

    useEffect(() => {
player9.pause();
    }, []);

  const player9 = useVideoPlayer(video9, player9 => {
    player9.loop = true;
    player9.play();
  }); 

     // player 10
  useEffect(() => {
player10.pause();
    }, [number]);

    useEffect(() => {
player10.pause();
    }, []);

  const player10 = useVideoPlayer(video10, player10 => {
    player10.loop = true;
    player10.play();
  });

 

  return (

   <>
{
  
    // vertical number 1
    HEIGHT>WIDTH&&number==1?
    <View style={styles.container}>
  <Pressable onPress={() => changenumber()}>
    <Text style={styles.header}>Top 10 Videos: {number}</Text>
    <Text style={styles.title}>Big Buck Bunny</Text>
  </Pressable>
  <VideoView
    style={styles.video}
    player={player1}/>
        <Pressable onPress={() => changenumber()}>
          <Text style={styles.title}>Big bunny gets teased by three bullies</Text>
        </Pressable>
</View>
    
:

    // horizontal number 1
    WIDTH>HEIGHT&&number==1?
    <View style={styles.container}>
      <Pressable onPress={() => changenumber()}>
        </Pressable>
        <VideoView
    style={styles.video}
    player={player1}/>
        <Pressable onPress={() => changenumber()}>
        </Pressable>
    </View>

:

    // vertical number 2
       HEIGHT>WIDTH&&number==2?
    <View style={styles.container}>
      <Pressable onPress={() => changenumber()}>
   <Text style={styles.header}>Top 10 Videos: {number}</Text>
   <Text style={styles.title}>Boat</Text>
        </Pressable>
        <VideoView
    style={styles.video}
    player={player2}/>
        <Pressable onPress={() => changenumber()}>
          <Text style={styles.title}>Boat swaying in the waves at sunset</Text>
        </Pressable>
    </View>
    
:

    // horizontal number 2
    WIDTH>HEIGHT&&number==2?
    <View style={styles.container}>
        <VideoView
    style={styles.video}
    player={player2}/>
    </View>
    
:
  
// vertical number 3
      HEIGHT>WIDTH&&number==3?
    <View style={styles.container}>
      <Pressable onPress={() => changenumber()}>
   <Text style={styles.header}>Top 10 Videos: {number}</Text>
   <Text style={styles.title}>Meditation</Text>
  </Pressable>
       <VideoView
    style={styles.video}
    player={player3}/>
        <Pressable onPress={() => changenumber()}>
          <Text style={styles.title}>Meditation on a side of a rock</Text>
        </Pressable>
    </View>
    
:
    
    // horizontal number 3
    WIDTH>HEIGHT&&number==3?
    <View style={styles.container}>
        <VideoView
    style={styles.video}
    player={player3}/>
    </View>
    
:
    
    // vertical number 4
    HEIGHT>WIDTH&&number==4?
    <View style={styles.container}>
      <Pressable onPress={() => changenumber()}>
   <Text style={styles.header}>Top 10 Videos: {number}</Text>
   <Text style={styles.title}>Beach</Text>
        </Pressable>
        <VideoView
    style={styles.video}
    player={player4}/>
        <Pressable onPress={() => changenumber()}>
          <Text style={styles.title}>Zoom out drone shot of a pretty beach</Text>
        </Pressable>
    </View>
    
    
:
    
    // horizontal number 4
        WIDTH>HEIGHT&&number==4?
    <View style={styles.container}>
        <VideoView
    style={styles.video}
    player={player4}/>
    </View>
    
:
    
    // vertical number 5
    HEIGHT>WIDTH&&number==5?
    <View style={styles.container}>
      <Pressable onPress={() => changenumber()}>
   <Text style={styles.header}>Top 10 Videos: {number}</Text>
   <Text style={styles.title}>Riverside</Text>
        </Pressable>
        <VideoView
    style={styles.video}
    player={player5}/>
        <Pressable onPress={() => changenumber()}>
          <Text style={styles.title}>Couple standing on a riverside</Text>
        </Pressable>
    </View>
    
    
:
    
    // horizontal number 5
        WIDTH>HEIGHT&&number==5?
    <View style={styles.container}>
        <VideoView
    style={styles.video}
    player={player5}/>
    </View>

:
    
// vertical number 6
    HEIGHT>WIDTH&&number==6?
    <View style={styles.container}>
      <Pressable onPress={() => changenumber()}>
   <Text style={styles.header}>Top 10 Videos: {number}</Text>
   <Text style={styles.title}>Forest</Text>
        </Pressable>
        <VideoView
    style={styles.video}
    player={player6}/>
        <Pressable onPress={() => changenumber()}>
          <Text style={styles.title}>Pretty drone shot of a forest</Text>
        </Pressable>
    </View>
    
:

    // horizontal number 6
    WIDTH>HEIGHT&&number==6?
    <View style={styles.container}>
        <VideoView
    style={styles.video}
    player={player6}/>
    </View>

:

    // vertical number 7
       HEIGHT>WIDTH&&number==7?
    <View style={styles.container}>
      <Pressable onPress={() => changenumber()}>
   <Text style={styles.header}>Top 10 Videos: {number}</Text>
   <Text style={styles.title}>Beach 2</Text>
        </Pressable>
        <VideoView
    style={styles.video}
    player={player7}/>
        <Pressable onPress={() => changenumber()}>
          <Text style={styles.title}>Still of another pretty beach</Text>
        </Pressable>
    </View>
    
:

    // horizontal number 7
    WIDTH>HEIGHT&&number==7?
    <View style={styles.container}>
        <VideoView
    style={styles.video}
    player={player7}/>
    </View>
    
:
  
// vertical number 8
      HEIGHT>WIDTH&&number==8?
    <View style={styles.container}>
      <Pressable onPress={() => changenumber()}>
   <Text style={styles.header}>Top 10 Videos: {number}</Text>
   <Text style={styles.title}>Road</Text>
        </Pressable>
        <VideoView
    style={styles.video}
    player={player8}/>
        <Pressable onPress={() => changenumber()}>
          <Text style={styles.title}>Woman stands in the middle of the road and clicks her heels together</Text>
        </Pressable>
    </View>
    
:
    
    // horizontal number 8
    WIDTH>HEIGHT&&number==8?
    <View style={styles.container}>
        <VideoView
    style={styles.video}
    player={player8}/>
    </View>
    
:
    
    // vertical number 9
    HEIGHT>WIDTH&&number==9?
    <View style={styles.container}>
      <Pressable onPress={() => changenumber()}>
   <Text style={styles.header}>Top 10 Videos: {number}</Text>
      <Text style={styles.title}>Windmills</Text>
        </Pressable>
        <VideoView
    style={styles.video}
    player={player9}/>
        <Pressable onPress={() => changenumber()}>
          <Text style={styles.title}>Two windmills spinning</Text>
        </Pressable>
    </View>
    
    
:
    
    // horizontal number 9
        WIDTH>HEIGHT&&number==9?
    <View style={styles.container}>
        <VideoView
    style={styles.video}
    player={player9}/>
    </View>
    
:
    
    // vertical number 10
    HEIGHT>WIDTH&&number==10?
    <View style={styles.container}>
      <Pressable onPress={() => changenumber()}>
   <Text style={styles.header}>Top 10 Videos: {number}</Text>
   <Text style={styles.title}>Motorcycle</Text>
        </Pressable>
        <VideoView
    style={styles.video}
    player={player10}/>
        <Pressable onPress={() => changenumber()}>
          <Text style={styles.title}>Motorcyclist driving down a narrow road with trees</Text>
        </Pressable>
    </View>
    
    
:
    
    // horizontal number 10
        WIDTH>HEIGHT&&number==10?
    <View style={styles.container}>
        <VideoView
    style={styles.video}
    player={player10}/>
    </View>
    
:null
    
}
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
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    alignSelf: 'center',
    padding: '20',
  },
  contentContainer: {
  flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,

  },
});

export default App;