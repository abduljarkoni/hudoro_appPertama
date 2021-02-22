import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Macbook from './mac.jpeg';

//belajar styling react native component
//
const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.title_home}>styling component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#74b9ff',
          borderWidth: 2,
          borderColor: 'orange',
          marginTop: 20,
          marginLeft: 20,
        }}
      />

      {/* membuat Card */}
      {/* //jika view/wadah/ yang mau di styling dengan warna harus ada widthnya/lebarnya jika view akan 
        //melebar selebar layar */}
      <View
        style={{
          padding: 12,
          backgroundColor: 'lightblue',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={Macbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Macbook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            // fontWeight: 'bold',
            color: 'blue',
            marginTop: 12,
          }}>
          Rp. 25.000.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: 'green',
            paddingTop: 6,
            paddingBottom: 6,
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

//membuat function stylesheet untuk styling text/title_home sepert styling css nya
const styles = StyleSheet.create({
  title_home: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 40,
    marginTop: 20,
  },
});

export default StylingReactNativeComponent;
