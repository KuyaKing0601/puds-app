import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.parent_container}>
      <View style={styles.headview}>
        <Text>HEADER</Text>
      </View>
      <View style={styles.TA1view}>
        <Text>TEXT AREA</Text>
      </View>
      <View style={styles.image_container}>
        <View style={styles.imageview}>
          <Text>IMAGE AREA</Text>
        </View>
        <View style={styles.imageview}>
          <Text>IMAGE AREA</Text>
        </View>
        <View style={styles.imageview}>
          <Text>IMAGE AREA</Text>
        </View>
      </View>
      <View style={styles.TA2_container}>
        <View style={styles.TA2view}>
          <Text>TEXT AREA</Text>
        </View>
        <View style={styles.TA2view}>
          <Text>TEXT AREA</Text>
        </View>
        <View style={styles.TA2view}>
          <Text>TEXT AREA</Text>
        </View>
      </View>
      <View style={styles.TA1view}>
        <Text>TEXT AREA</Text>
      </View>
      <View style={styles.image_container}>
        <View style={styles.imageview}>
          <Text>IMAGE AREA</Text>
        </View>
        <View style={styles.imageview}>
          <Text>IMAGE AREA</Text>
        </View>
        <View style={styles.imageview}>
          <Text>IMAGE AREA</Text>
        </View>
      </View>
      <View style={styles.TA2_container}>
        <View style={styles.TA2view}>
          <Text>TEXT AREA</Text>
        </View>
        <View style={styles.TA2view}>
          <Text>TEXT AREA</Text>
        </View>
        <View style={styles.TA2view}>
          <Text>TEXT AREA</Text>
        </View>
      </View>
      <View style={styles.menuview}>
        <Text>MENU AREA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuview: {
    backgroundColor:'#E0E1DD',
    alignItems:'center',
    justifyContent:'center',
    borderStyle:'solid',
    borderWidth: 1,
    flex:1,
   },
  TA2view: {
    backgroundColor:'#E0E1DD',
    alignItems:'center',
    justifyContent:'center',
    borderStyle:'solid',
    borderWidth: 1,
    flex:1,
   },
  TA2_container: {
    backgroundColor:'#fff',
    alignItems:'stretch',
    flexDirection:'row',
    justifyContent:'center',
    flex:1,
  },
  imageview: {
    backgroundColor:'#E0E1DD',
    alignItems:'center',
    justifyContent:'center',
    borderStyle:'solid',
    borderWidth: 1,
    flex:1,
   },
  image_container: {
    backgroundColor:'#fff',
    alignItems:'stretch',
    flexDirection:'row',
    justifyContent:'center',
    flex:1,
  },
  parent_container: {
    backgroundColor:'#fff',
    alignItems:'stretch',
    flexDirection:'column',
    justifyContent:'center',
    flex:1,
  },
  headview: {
   backgroundColor:'#E0E1DD',
   alignItems:'center',
   justifyContent:'center',
   borderStyle:'solid',
   borderWidth: 1,
   flex:1,
  },
  TA1view: {
   backgroundColor:'#E0E1DD',
   alignItems:'center',
   justifyContent:'center',
   borderStyle:'solid',
   borderWidth: 1,
   flex:1,
  }
});
