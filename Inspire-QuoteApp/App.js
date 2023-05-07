import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DailyQuoteCard } from './script';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';


export default function App() {
  const [hasCameraPermissions, setHasCameraPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [image, setImage] = useState(null)
  const cameraRef = useRef(null)

  const toggleCameraType = () => {
    setType(current => {
      console.log(current);
      current === CameraType.back ? CameraType.front : CameraType.back
    })
  }


  useEffect(()=> {
       (async () => {
        MediaLibrary.requestPermissionsAsync()
        const cameraStatus = await Camera.requestCameraPermissionsAsync()
        setHasCameraPermission(cameraStatus.status === 'granted')
       })()
  })

  const savePicture = async () => {

  }

  const takePicture = async () => {
    if(cameraRef) {
      try {
        const data = awaitcameraRef.current.takePictureAsync()
        setImage(data.uri)
      }
      catch(err) {
        console.error(err)

      }
    }
  }

  return (
    <View style={styles.container}>
      <DailyQuoteCard />
      <Camera style={styles.Camera} type={type}>
        <View style={styles.camerawrapper}>
          
        </View>
        <View style={styles.controls}>
          <TouchableOpacity>
            <text>Tag billede</text>
          </TouchableOpacity>
          <TouchableOpacity onPress={
            () => {setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              )

            }
          }>
            <text>Skift skærm</text>
          </TouchableOpacity>
          <TouchableOpacity>
            <text>Flash</text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Camera: {
    flex: 5,
    borderRadius: 20
  },
  camerawrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30

  },
  controls: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 30,
    paddingHorizontal: 5,
    justifyContent: 'space-evenly',
    height: '100%',
  }
});
