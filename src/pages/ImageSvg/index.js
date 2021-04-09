import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ilustrasiDashboardsvg from '../../assets/image/dashboard.svg';

const ImageSvg = () => {
  // petama kita harus install beberapa library tambahan untuk react native agar bisa menggunakan
  // image format svg
  // kunjungi link ini : https://github.com/react-native-svg/react-native-svg#automatically
  // kemudian kita akan menginstall labarary tersebut secara otomatis klik automatically

  // 1. ketikan pada terminal kode ini
  // >>yarn add react-native-svg
  // atau menggunakan npm
  // >> npm install react-native-svg

  //2. baca dokumentasi nya dan kita akan menggunakn svg file
  //ini digunakan untuk svg/gambar yang di simpan di dalam folder aplikasi kita
  //yaitu menggunakn react native svg transformer
  //link cara install react native svg transformer : https://github.com/kristerkari/react-native-svg-transformer#installation-and-configuration

  //3. install library svg transformer
  // >>yarn add --dev react-native-svg-transformer

  //4. Pada file metro.config.js kita tambahkan kodinan ini dan kodingan yang lama hapus saja/di skip aj
  // >>>const { getDefaultConfig } = require("@expo/metro-config");
  //      module.exports = (async () => {
  //      const {
  //      resolver: { sourceExts, assetExts }
  //       } = await getDefaultConfig(__dirname);
  //      return {
  //      transformer: {
  //       babelTransformerPath: require.resolve("react-native-svg-transformer")
  //      },
  //      resolver: {
  //       assetExts: assetExts.filter(ext => ext !== "svg"),
  //       sourceExts: [...sourceExts, "svg"]
  //      }
  //      };
  //      })();

  //5. sampe sini kita sudah bisa menggunakan gambar format svg di react native
  //cari gambar dan dowload lalu simpan di project kita ini link web penyedia gambar svg : https://undraw.co/illustrations

  return (
    <View style={styles.container}>
      <Text>Materi Membuat Image Svg Dalam React Native</Text>

      {/* <ilustrasiDashboardsvg width={200} height={200} /> */}
    </View>
  );
};

export default ImageSvg;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: 'coral',
  },
  textTitle: {
    textAlign: 'center',
  },
});
