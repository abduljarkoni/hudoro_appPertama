import React, {useState, Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

//function component menggunakan usestate
//2.membuat componen  alathitung
const AlatHitung = () => {
  // 3.membuat state nya dengan useState karena kita akan merubah angka default nya nol ini menjadi dinamis
  // ketika di klik tambah maka akan bertambah
  //karena kita akan memulainy dari maka kita set nol pada useState(0)
  const [number, setNumber] = useState(0);
  return (
    <View>
      {/* 1. kita akan membuat angka nol ini ketika di klik tambah maka akan angkanya akan bertambah menjadi 0,1,2,3,4 */}
      {/* 4.taro state number untuk menjadi penampung nilai state */}
      <Text>{number}</Text>

      {/* 5.tambahkan onPress={()=>()} yang merupakan fungsi dari react native ketika button di tekan maka
       akan menjalankan sebuah fungsi */}
      {/* tes onpress dengan alert */}
      {/* <Button title="tambah" onPress={() => alert('hello button')} /> */}

      <Button title="tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

// # class component menggunakan state
//buat componen class
class AlatHitungClass extends Component {
  //1. membuat state untuk class component
  //buat state dengan nama "number" dan nilai value nya nol/nilai awalnya adalah nol
  state = {
    number: 0,
  };

  render() {
    return (
      <View>
        {/* 2.cara pemanggilan state nya menggunakan "this.state.number"
          this maksudnya adalah class ini
          state maksudnya adalah sate yang di atas
          number maksudnya adalah nama statenya */}
        <Text>{this.state.number}</Text>

        {/* 3. cara memanggil fungsi state untuk merubah/menambah nilai 
        maka gunakan this.setState({number: this.state.number +1}) */}
        <Button
          title="tambah"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

//1. ini materi membuat komponen dinamis dengan state
//ada 2 jenis state
// jika menggunakan class component maka kita gunakan state
// jika menggunakn function component maka kita gunakn useState

//1.function component menggunakan usestate
const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTittle}>
        Materi Component Dinamis Dengan State
      </Text>
      <Text style={styles.titleSection}>contoh FUNCTION COMPONENT (HOOKS)</Text>
      <AlatHitung />
      <AlatHitung />

      <Text style={styles.titleSection}>contoh CLASS COMPONENT</Text>

      <AlatHitungClass />
      <AlatHitungClass />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },

  textTittle: {
    textAlign: 'center',
  },

  titleSection: {
    marginTop: 20,
  },
});
