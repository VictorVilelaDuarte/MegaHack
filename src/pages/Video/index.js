/* eslint-disable no-nested-ternary */
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  NativeModules,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {RtcEngine, AgoraView} from 'react-native-agora';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import {Actions} from 'react-native-router-flux';

const {Agora} = NativeModules; // Define Agora object as a native module

const {FPS30, AudioProfileDefault, AudioScenarioDefault, Adaptative} = Agora; // Set defaults for Stream

const Video = () => {
  const [peerIds, setPeerIds] = useState([]);
  const [uid, setUid] = useState(() => {
    return Math.floor(Math.random() * 100);
  });
  const [appid, setAppid] = useState('82010c9790104c52815d778e5f3ce8d2');
  const [channelName, setChannelName] = useState('teste');
  const [vidMute, setVidMute] = useState(false);
  const [audMute, SetAudMute] = useState(false);
  const [joinSucceed, setJoinSucceed] = useState(false);

  const dimensions = {
    // get dimensions of the device to use in view styles
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  };

  const styles = StyleSheet.create({
    buttonBar: {
      height: 50,
      backgroundColor: '#0093E9',
      display: 'flex',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
    },
    localVideoStyle: {
      width: 140,
      height: 160,
      position: 'absolute',
      top: 5,
      right: 5,
      zIndex: 100,
      borderRadius: 8,
    },
    iconStyle: {
      fontSize: 34,
      paddingTop: 15,
      paddingLeft: 40,
      paddingRight: 40,
      paddingBottom: 15,
      borderRadius: 0,
    },
    full: {
      flex: 1,
    },
  });

  const config = {
    // Setting config of the app
    appid, // App ID
    channelProfile: 0, // Set channel profile as 0 for RTC
    videoEncoderConfig: {
      // Set Video feed encoder settings
      width: 720,
      height: 1080,
      bitrate: 1,
      frameRate: FPS30,
      orientationMode: Adaptative,
    },
    audioProfile: AudioProfileDefault,
    audioScenario: AudioScenarioDefault,
  };
  RtcEngine.init(config); // Initialize the RTC engine

  useEffect(() => {
    RtcEngine.on('userJoined', (data) => {
      if (peerIds.indexOf(data.uid) === -1) {
        // If new user has joined
        setPeerIds((oldPeers) => [oldPeers, data.uid]);
      }
    });
    RtcEngine.on('userOffline', (data) => {
      // If user leaves

      setPeerIds(peerIds.filter((uid) => uid !== data.uid));
    });
    RtcEngine.on('joinChannelSuccess', (data) => {
      // If Local user joins RTC channel
      RtcEngine.startPreview(); // Start RTC preview
      setJoinSucceed(true);
    });
    RtcEngine.joinChannel(channelName, uid); // Join Channel
    RtcEngine.enableAudio(); // Enable the audio
  }, []);

  /**
   * @name toggleAudio
   * @description Function to toggle local user's audio
   */
  function toggleAudio() {
    const mute = audMute;
    console.log('Audio toggle', mute);
    RtcEngine.muteLocalAudioStream(!mute);
    SetAudMute(!mute);
  }

  /**
   * @name toggleVideo
   * @description Function to toggle local user's video
   */
  function toggleVideo() {
    const mute = vidMute;
    console.log('Video toggle', mute);

    setVidMute(!vidMute);
    RtcEngine.muteLocalVideoStream(!vidMute);
  }

  /**
   * @name endCall
   * @description Function to end the call
   */
  function endCall() {
    RtcEngine.destroy();
    // Actions.home();
  }

  /**
   * @name peerClick
   * @description Function to swap the main peer videostream with a different peer videostream
   */
  function peerClick(data) {
    const peerIdToSwap = peerIds.indexOf(data);
    setPeerIds(() => {
      const currentPeers = [...peerIds];
      const temp = currentPeers[peerIdToSwap];
      // eslint-disable-next-line prefer-destructuring
      currentPeers[peerIdToSwap] = currentPeers[0];
      currentPeers[0] = temp;
      return currentPeers;
    });
  }

  /**
   * @name videoView
   * @description Function to return the view for the app
   */

  return (
    <View style={styles.full}>
      {peerIds.length > 1 ? (
        <View style={styles.full}>
          <View style={{height: (dimensions.height * 3) / 4 - 50}}>
            <AgoraView
              style={styles.full}
              remoteUid={peerIds[0]}
              mode={1}
              key={peerIds[0]}
            />
          </View>
          <View style={{height: dimensions.height / 4}}>
            <ScrollView
              horizontal
              decelerationRate={0}
              snapToInterval={dimensions.width / 2}
              snapToAlignment="center"
              style={{
                width: dimensions.width,
                height: dimensions.height / 4,
              }}>
              {peerIds.slice(1).map((data) => (
                <TouchableOpacity
                  style={{
                    width: dimensions.width / 2,
                    height: dimensions.height / 4,
                  }}
                  onPress={() => peerClick(data)}
                  key={data}>
                  <AgoraView
                    style={{
                      width: dimensions.width / 2,
                      height: dimensions.height / 4,
                    }}
                    remoteUid={data}
                    mode={1}
                    key={data}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      ) : peerIds.length > 0 ? (
        <View style={{height: dimensions.height - 50}}>
          <AgoraView style={styles.full} remoteUid={peerIds[0]} mode={1} />
        </View>
      ) : (
        <Text>No users connected</Text>
      )}
      {!vidMute ? ( // view for local video
        <AgoraView
          style={styles.localVideoStyle}
          zOrderMediaOverlay
          showLocalVideo
          mode={1}
        />
      ) : (
        <View />
      )}
      <View style={styles.buttonBar}>
        <Icon.Button
          style={styles.iconStyle}
          backgroundColor="#0093E9"
          name={audMute ? 'mic-off' : 'mic'}
          onPress={() => toggleAudio()}
        />
        <Icon.Button
          style={styles.iconStyle}
          backgroundColor="#0093E9"
          name="call-end"
          onPress={() => endCall()}
        />
        <Icon.Button
          style={styles.iconStyle}
          backgroundColor="#0093E9"
          name={vidMute ? 'videocam-off' : 'videocam'}
          onPress={() => toggleVideo()}
        />
      </View>
    </View>
  );
};

export default Video;
