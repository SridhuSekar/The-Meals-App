import React, {Component} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import CustomHeaderButton from '../components/CustomHeaderButton';
import {setFilter} from '../redux/actions/mealsAction';
import {connect} from 'react-redux';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{true: Colors.accentColor, false: 'grey'}}
        thumbColor={Colors.primaryColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};
class FiltersScreen extends Component {
  constructor() {
    super();
    this.state = {
      isGlutenFree: false,
      isLactoseFree: false,
      isVegan: false,
      isVegetarian: false,
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
        <FilterSwitch
          label="Gluten-free"
          state={this.state.isGlutenFree}
          onChange={(newVal) => {
            this.setState({isGlutenFree: newVal});
            navigation.setParams({
              save: {
                glutenFree: newVal,
                lactoseFree: this.state.isLactoseFree,
                vegan: this.state.isVegan,
                vegetarian: this.state.isVegetarian,
              },
            });
            console.log(navigation.getParam('save'));
            // this.props.filteredData(navigation.getParam('save'));
          }}
        />

        <FilterSwitch
          label="Lactose-free"
          state={this.state.isLactoseFree}
          onChange={(newVal) => {
            this.setState({isLactoseFree: newVal});
            navigation.setParams({
              save: {
                glutenFree: this.state.isGlutenFree,
                lactoseFree: newVal,
                vegan: this.state.isVegan,
                vegetarian: this.state.isVegetarian,
              },
            });
            // this.props.filteredData(navigation.getParam('save'));
          }}
        />
        <FilterSwitch
          label="Vegan"
          state={this.state.isVegan}
          onChange={(newVal) => {
            this.setState({isVegan: newVal});
            navigation.setParams({
              save: {
                glutenFree: this.state.isGlutenFree,
                lactoseFree: this.state.isLactoseFree,
                vegan: newVal,
                vegetarian: this.state.isVegetarian,
              },
            });
            // this.props.filteredData(navigation.getParam('save'));
          }}
        />
        <FilterSwitch
          label="Vegetarian"
          state={this.state.isVegetarian}
          onChange={(newVal) => {
            this.setState({isVegetarian: newVal});
            navigation.setParams({
              save: {
                glutenFree: this.state.isGlutenFree,
                lactoseFree: this.state.isLactoseFree,
                vegan: this.state.isVegan,
                vegetarian: newVal,
              },
            });
            // this.props.filteredData(navigation.getParam('save'));
          }}
        />
      </View>
    );
  }
}

FiltersScreen.navigationOptions = (navData) => {
  const menuIcon = <Icon name="menu" size={30} />;
  const saveIcon = <Icon name="save" size={30} />;

  return {
    headerTitle: 'Filter Meals',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title={menuIcon}
          iconName="menu"
          color="white"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title={saveIcon}
          iconName="save"
          color="white"
          onPress={() => navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontWeight: 'bold',
    fontSize: 22,
    margin: 20,
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
});

const mapStateToProps = (state) => {
  return {
    filteredArray: state.meals.filteredMeals,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filteredData: (filteredObj) => dispatch(setFilter(filteredObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersScreen);
