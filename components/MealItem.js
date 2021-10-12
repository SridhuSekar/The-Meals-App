import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import DefaultText from './DefaultText';

class MealItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.mealItem}>
        <TouchableOpacity onPress={this.props.onSelectMeal}>
          <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
              <ImageBackground
                style={styles.bgImage}
                source={{uri: this.props.items.imageUrl}}>
                <Text numberOfLines={1} style={styles.title}>
                  {this.props.items.title}
                </Text>
              </ImageBackground>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetails}}>
              <DefaultText>{this.props.items.duration} min</DefaultText>
              <DefaultText>
                {this.props.items.complexity.toUpperCase()}
              </DefaultText>
              <DefaultText>
                {this.props.items.affordability.toUpperCase()}
              </DefaultText>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    overflow: 'hidden',
    // marginVertical: 10,
  },
  bgImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: '',
    fontSize: 20,
    color: 'white',
    fontStyle: 'italic',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: 2,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  mealRow: {flexDirection: 'row'},
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
});

export default MealItem;
