import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
const UberTypeRow = props => {
    // console.log(props)
    const {type} = props;
    const getImageName=()=>{
        if (type.type === "UberX"){
            return require('../../assets/images/UberX.jpeg');
        }
        if (type.type === "Comfort"){
            return require('../../assets/images/Comfort.jpeg');
        }
        if (type.type === "UberXL"){
            return require('../../assets/images/UberXL.jpeg');
        }
    }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={getImageName()}
      />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          <Ionicons name={'person'} size={18} />3
        </Text>
        <Text style={styles.time}>8:03pm drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'}/>
        <Text style={styles.price}>
            Rs {type.price}
        </Text>
      </View>
    </View>
  );
};

export default UberTypeRow;
