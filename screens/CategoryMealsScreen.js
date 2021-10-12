import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

export class CategoryMealsScreen extends Component {
  constructor() {
    super();
  }

  render() {
    const catId = this.props.navigation.getParam('CategoryId');

    /////////////////from mapStateToProps
    const displayedMeals = this.props.filteredArray.filter(
      (meal) => meal.categoryIds.indexOf(catId) >= 0,
    );
    if (displayedMeals.length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.emptyText}>No meals found. </Text>
          <Icon name="leaf" size={30} color='green'/>
          <Text style={styles.emptyText}>May be check your Filters.....</Text>
        </View>
      );
    }
    return (
      <MealList listData={displayedMeals} navigation={this.props.navigation} />
    );
  }
}
//To get data dynamically from another component through props into the function eg:(this.props.navigation)=>(navigationData.navigation)
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('CategoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    title: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  emptyText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
const mapStateToProps = (state) => {
  return {
    filteredArray: state.meals.filteredMeals,
  };
};

export default connect(mapStateToProps)(CategoryMealsScreen);
