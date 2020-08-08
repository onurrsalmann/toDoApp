import React from 'react';
import {TextInput, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const Input = (props) => (
    <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="#808080"
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={(value) => props.onChangeText(value)}
        style={[{
            width: width * 0.9,
            height: height * 0.08,
            backgroundColor: '#f5f5f5',
            color:'#000000',
            borderRadius: 5,
            borderWidth:0.5,
            borderColor:'#000000',
            paddingLeft: 20,
            marginBottom: height * 0.02,
            fontSize: 18
        }, props.style]}
    />
);

export {Input};
