import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const Button = (props) => (
    <TouchableOpacity
          activeOpacity={0.8}
          onPress={props.onPress}
          style={{
            width: width * 0.9,
            height: height * 0.08,
            backgroundColor: '#000000',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5
            }}>
            <Text style={{
                color: 'white',
                fontWeight: 'bold',
            fontSize: 19}}>{props.text}</Text>
          </TouchableOpacity>
);

export {Button};
