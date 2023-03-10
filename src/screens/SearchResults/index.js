import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

import {useRoute} from "@react-navigation/native"

const SearchResults = props => {
  const route = useRoute();

  console.log("params",route.params);
  const {originPlace,destinationPlace} = route.params;
  return (
    <View style={{display: 'flex',justifyContent:'space-between'}}>
      <View style={{height:Dimensions.get('window').height - 450}}>
        <RouteMap origin={originPlace} destination={destinationPlace}/>
      </View>
      <View style={{height:400}}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
