import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList';
//import {MEALS} from '../data/dummy-data';
import {connect} from 'react-redux';
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

export class FavoritesScreen extends Component {
  render() {
    const {favMeals} = this.props;
    if (favMeals.length === 0 || !favMeals) {
      return (
        <View style={styles.favoriteEmpty}>
          <Icon name="search" size={30} color={Colors.primaryColor} />
          <Text style={styles.emptyText}>
            There is no favorite added yet.....
          </Text>
        </View>
      );
    }
    return (
      <MealList
        listData={this.props.favMeals}
        navigation={this.props.navigation}
      />
    );
  }
}

FavoritesScreen.navigationOptions = (navData) => {
  const menuIcon = <Icon name="menu" size={30} />;
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons>
        <Item
          title={menuIcon}
          iconName="menu"
          color="white"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginLeft: 20,
    color: 'orange',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    favMeals: state.meals.favoriteMeals,
  };
};
/* const mapDispatchToProps = (dispatch) => {
  return {
    addressformData: (inputObj) => dispatch(addressData(inputObj)),
  };
}; */

export default connect(mapStateToProps /* , mapDispatchToProps */)(
  FavoritesScreen,
);
