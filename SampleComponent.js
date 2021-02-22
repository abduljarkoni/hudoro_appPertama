import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#74b9ff'}} />
      <Text> Hello Word</Text>
      <Jarkoni />
      <Text>Lusi Andriyani</Text>
      <Foto />
      <TextInput style={{borderWidth: 0.5}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Jarkoni = () => {
  return (
    <View>
      <Text>Abdul Jarkoni</Text>
      <Text>Ganteng banget</Text>
    </View>
  );
};

const Foto = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 200, height: 200}}
    />
  );
};

//ini contoh class component
// kita import jga component react supaya ract native tahu ini dari labrary react
class BoxGreen extends Component {
  render() {
    return <Text>ini componen dari class component</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 200, height: 200, borderRadius: 100}}
        />
        <Text style={{color: 'blue', fontSize: 20, textAlign: 'center'}}>
          Ini Gambar Binatang
        </Text>
      </View>
    );
  }
}

export default SampleComponent;
