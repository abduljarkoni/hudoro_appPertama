import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import FlexBox from './pages/FlexBox';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import PositionNative from './pages/PositionNative';

//ini contoh function component
//
const App = () => {
  //karena app.js adalh function component maka disini menggunakan usestate
  //jika class component menggunakan state/this.state
  //ini adalh fungsi untuk menghilangkan component flexbox
  //menggunakn nilai boolean
  //jangan lupa import di paling ada di packege react useeffect dan usesatetnya
  //
  //ini melakukan fungsi menghilangkan komponen / unmount
  const [isShow, SetIsShow] = useState(true);
  // // //
  // // //fungsi hooks dalam useeffect
  //
  useEffect(() => {
    //   //
    //   // ini menghilangkan komponen flexbox dengan delay 6 detik/600 miliscond
    setTimeout(() => {
      //     // memberikan nilai isshow nya false  agar hilang komponenya
      SetIsShow(false);
    }, 6000);
  }, []);

  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}
        {/* <FlexBox /> */}

        {/* jika nilai isshow bernilai true maka tampilkan FlexBox
        bararti jika isshow nya bernilai flase maka komponen flexbox akan hilang */}
        {isShow && <FlexBox />}

        {/* <PositionNative /> */}
      </ScrollView>
    </View>
  );
};

export default App;
