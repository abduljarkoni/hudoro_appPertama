import React, {Component, useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import Jarkoni from '../../assets/image/jarkoni.jpeg';

//ini adalah materi flexbox yaitu materi tentang cara layouting di react native
//
//materi lifecycle/siklus hidup class component
//
// class FlexBox extends Component {
//   //meenggunakan constructor dan super
//   constructor(props) {
//     super(props);
//     console.log('==> ini dari construktor');

//     //2.prosesupdating
//     //.ini sample agar component update bisa berubah
//     // kita akan merubah nilai subcriber menjadi dinamis
//     this.state = {
//       subscriber: 200,
//     };
//   }

//   //ini menggunakn fungsi componentdidmount
//   componentDidMount() {
//     console.log('==> ini dari componentdidmount');

//     //p3.roses updating
//     //settimeout agar komponen berubah dengan delai 2 detik/ 2000 milisecond
//     //ini akan merubah nilai subcribernya
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       });
//     }, 2000);
//   }

//   //1. updating mengunakan method componendid update
//   //nant disini tidak akan yang muncul di console.
//   //karena tidak ada yang di ubah didalam komponent oleh karena itu
//   //kita harus bikin sample untuk merubah komponen agar nanti muncul di konsole
//   //
//   //component didupdate baru terpanggil jika sudah terjadi perubahan di komponentnya
//   componentDidUpdate() {
//     console.log('==> ini dari componentdidupdate');
//   }

//   //merupakan method yang akan muncul jika komponen
//   //nya hilang.
//   //kita liat pada app.js kita akan hilangkan component flexbox
//   //jika komponen ny sdah hilang mak component wil mount akan muncul di konsole
//   componentWillUnmount() {
//     console.log('==> ini adalah dari componentWillUnmount');
//   }
//   render() {
//     //pertama testing dengan consolog
//     console.log('==> ini dari render');
//     return (
//       <>
//         <View>
//           {/* // tinggi view pembungkus akan mengikuti chile yang di dalamnya jika
//         tidak di kasih heightnya */}
//           <View
//             style={{
//               flexDirection: 'row',
//               backgroundColor: 'orange',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//             }}>
//             {/*
//         <Text>ini materi flex box coy</Text> */}
//             {/* ketika view hanya di isi backgroundColor saja maka tidak muncul apa2 jika
//         tidak kasih widthnya dan tingginya */}
//             <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
//             <View style={{backgroundColor: 'red', width: 50, height: 50}} />
//             <View style={{backgroundColor: 'green', width: 50, height: 50}} />
//             <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
//           </View>
//           {/* //implementasi layouting dengan flexbox untuk menu/pagenation */}
//           <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//             <Text>Beranda</Text>
//             <Text>video</Text>
//             <Text>playlist</Text>
//             <Text>channel</Text>
//             <Text>tentang</Text>
//           </View>

//           <View style={{flexDirection: 'row', marginTop: 20}}>
//             <Image
//               source={Jarkoni}
//               style={{
//                 width: 100,
//                 height: 100,
//                 borderRadius: 50,
//                 marginLeft: 10,
//                 marginRight: 10,
//                 shadowColor: 'rgba(0,0,0,0.9)',
//               }}
//             />
//             <View style={{flexDirection: 'column', marginTop: 20}}>
//               <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//                 Abdul Jarkoni
//               </Text>
//               <Text>fullstack Developer</Text>
//               <Text>{this.state.subscriber} Subscriber</Text>
//             </View>
//           </View>
//         </View>
//       </>
//     );
//   }
// }
//
//
// materi baru belajr lifecycle komponen pada react
// siklus hidup program fungsional komponen
// di lifecycle component ini menggunakn useEffect yang mampu menghandle ketiga component di atas
// sepert componentDidMount, component updating, dan componentwillunmount
const FlexBox = () => {
  //
  //2.membuat useState
  const [subscriber, setSubscriber] = useState(400);

  // 1. ketika menggunakan function componen maka kita menggunakn useeffect metode lifecycle nya
  //untuk melakukan didmount
  useEffect(() => {
    console.log('ini adalah did mount');
    //tambahkan return dan copy pasti useeffect yang ditahap 3
    setTimeout(() => {
      setSubscriber(500);
    }, 3000);

    //arrow fungsion pada return berfungsi untuk melihat perubahan did update dan juga ketika komponen hilang unmount
    //dan juga berfungsi sebagai clearence nya pembersihanya
    return () => {
      console.log('ini adalah did update');
    };

    //isi nilai dengan nilai yang inign kita lihat perubahannya klo disini yaitu nilai subscriber
  }, [subscriber]);

  //3. untuk melakukan perubahan did update
  //4. ini bisa di sederhanakan menjadi masuk ke tahap1 jd hanya ad 1 useeffect saja
  // useEffect(() => {
  //   console.log('ini adalah did update');

  //   //  KITA SET perubahan nilai subscriber dari 400 jd 500 dalam 3 detik
  //   setTimeout(() => {
  //     setSubscriber(500);
  //   }, 3000);
  // }, [subscriber]);

  return (
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
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Abdul Jarkoni</Text>
          <Text>fullstack Developer</Text>
          <Text>{subscriber} Subcriber</Text>
        </View>
      </View>
    </View>
  );
};
export default FlexBox;
