import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

export class CategoryGridTile extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.gridItem}>
        <TouchableNativeFeedback
          style={styles.nativeFeed}
          onPress={this.props.onSelect}>
          <View
            style={{
              ...styles.container,
              ...{backgroundColor: this.props.color},
            }}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 8,
  },
  nativeFeed: {flex: 1},
  container: {
    flex: 1,
    borderRadius: 10,
    /* shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0, height:2},
    shadowRadius:10, */

    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sand-bold',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CategoryGridTile;
