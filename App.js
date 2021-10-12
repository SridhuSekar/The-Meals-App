/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import MealsNavigation from './navigation/MealsNavigation';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {store} from './redux/store/store';

enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <MealsNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
