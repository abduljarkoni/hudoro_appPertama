import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Jarkoni from './jarkoni.jpeg';

//ini adalah materi flexbox yaitu materi tentang cara layouting di react native
class MateriFlexBox extends Component {
  render() {
    return (
      <>
        <View>
          {/* // tinggi view pembungkus akan mengikuti chile yang di dalamnya jika
        tidak di kasih heightnya */}
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'orange',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {/*           
        <Text>ini materi flex box coy</Text> */}
            {/* ketika view hanya di isi backgroundColor saja maka tidak muncul apa2 jika
        tidak kasih widthnya dan tingginya */}
            <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
            <View style={{backgroundColor: 'red', width: 50, height: 50}} />
            <View style={{backgroundColor: 'green', width: 50, height: 50}} />
            <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
          </View>
          {/* //implementasi layouting dengan flexbox untuk menu/pagenation */}
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text>Beranda</Text>
            <Text>video</Text>
            <Text>playlist</Text>
            <Text>channel</Text>
            <Text>tentang</Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Image
              source={Jarkoni}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginLeft: 10,
                marginRight: 10,
                shadowColor: 'rgba(0,0,0,0.9)',
              }}
            />
            <View style={{flexDirection: 'column', marginTop: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Abdul Jarkoni
              </Text>
              <Text>fullstack Developer</Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default MateriFlexBox;
