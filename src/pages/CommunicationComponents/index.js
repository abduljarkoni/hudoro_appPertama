import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CommunicationComponents = () => {
  return (
    <View style={styles.section_communication}>
      <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>
        materi komunikasi antar komponen
      </Text>
    </View>
  );
};

export default CommunicationComponents;

const styles = StyleSheet.create({
  section_communication: {
    marginTop: 20,
    padding: 20,
  },
});
