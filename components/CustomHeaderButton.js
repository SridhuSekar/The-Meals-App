import React, {Component} from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from 'react-native-vector-icons';
import Colors from '../constants/Colors';

class CustomHeaderButton extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <HeaderButton
        {...this.props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
      />
    );
  }
}

export default CustomHeaderButton;
