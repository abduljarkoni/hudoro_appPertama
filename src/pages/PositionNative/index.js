import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Keranjang from '../../assets/icon/keranjang.png';

//memahami konsep positioning component dalam reactnative
//seperti pemberitahuan dalam install akan muncul angka 14
//dan ada lingkaran merah di atas icon gambar

export default function PositionNative() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text_titel}>Materi Positioning Komponen</Text>
      <View style={styles.cardWrapper}>
        <Image source={Keranjang} style={styles.iconCard} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text>Keranjang belanjaan anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text_titel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    justifyContent: 'center',
  },
  wrapper: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardWrapper: {
    borderWidth: 1,
    borderColor: 'green',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',

    //ini ditambahkan agar komponen notif tidak keluar dari bungkusannya
    position: 'relative',
  },
  iconCard: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: 'green',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,

    // position absolute agar component mudah di atur di dalam compnent
    //atau agar mudah digeser dimanapun
    //dan tambahkan pada
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
