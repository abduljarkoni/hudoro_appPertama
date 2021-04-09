import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const BasicJavascript = () => {
  // 1. variabel
  // contoh variabel dalam matik
  // 1 jenurk + 2 jeruk = 3 jeruk
  // dapat di sederhanakan menjadi
  //1 j + 2 j = 3 j
  //variabel bisa menggunkan const dan let

  //contoh tipe data primitive
  const nama = 'abdul jarkoni'; //tipe data String
  let usia = 30; //tipe data number
  const apakahLakiLaki = true; //tipe data boolean

  // contoh tipe data complex
  const hewanPeliharaan = {
    // tipe data object
    nama: 'Meong',
    jenis: 'Kucing',
    usia: 2,
    apakahHewanLocal: true,
    warna: 'kuning',

    //bisa memasukan data object di dalam object
    orngtua: {
      jantan: 'kaisar',
      betina: 'quin',
    },
  };

  //tipe data complex object berupa function
  //tipe data function
  const sapaOrang = (name, age) => {
    return console.log(`Hello ${name} usia anda ${age}`);
  };
  sapaOrang('Abdul Jarkoni', 31);

  //tipe data object dalam bentuk array
  const namaOrang = [
    'abdul jarkoni',
    'lusi',
    'yayah',
    'ali',
    'via',
    'ato illah',
  ]; // tipe data object - array
  typeof namaOrang; //tipe data object

  //contoh logik/logika
  //jika hujan turun, maka kalau kerja bawa payung,
  //jika perut lapar maka harus makan

  //membuat fungsi kondisinsapa hewan menggunakan if else
  // const sapaHewan = (objectHewan) => {
  //   // membuat varialbel penampung hasil sapa hewan
  //   let hasilSapa = '';

  //   //
  //   if (objectHewan.nama === 'Meong') {
  //     hasilSapa = 'Hallo Meong, Apa kabar?';
  //   } else {
  //     hasilSapa = 'Ini hewan siapa?';
  //   }
  //   return hasilSapa;
  // };

  //fungsi di atas dapat disederhankan dengan
  //membuat fungsi sapa hewan menggunakan fungsi operator ternary operator
  const sapaHewan = (objectHewan) => {
    // logik nya jika object hewan sma dengan meong
    return objectHewan.nama === 'Meong'
      ? //jika benar maka tampilkan ini setelah tanda ? jka benar/kondisi true
        'Hallo Meong, Apa kabar?'
      : //jika bukan meong namanya maka tampilkan ini setelah tanda : jika kondisi salah/flase
        'Ini hewan siapa?';
  };

  //looping/perulangan dalam js react native

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Basic Javascript React Native</Text>

      <Text>Nama : {nama}</Text>
      <Text>Usia : {usia}</Text>

      {/* fungsi logik/logika if else dan ternari operator*/}
      <Text>{sapaHewan(hewanPeliharaan)}</Text>

      {/* fungsi looping/perulangan */}
      <Text>{namaOrang[0]}</Text>
      <Text>{namaOrang[1]}</Text>
      <Text>{namaOrang[2]}</Text>
      {/* cara membuat looping nama orng */}
      {/* ini akan bertambah otomatis jika isi data array/object nya di tambahkan */}
      {/* para meternya bebas bisa orng sebagai ganti index untuk keseluruhan
      bisa juga x atau apa aja */}
      {namaOrang.map((x) => (
        <Text>{x}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
