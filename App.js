import React from 'react';
import {View, ScrollView} from 'react-native';
import MateriFlexBox from './MateriFlexBox';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import PositionReactNative from './PositionReactNative';

//ini contoh function component
//
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <MateriFlexBox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
