import React from 'react';
import {Platform, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTitleStyle: {
      // fontFamily:'open-sand-bold'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  },
};
/* var headerStyling = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
}; */
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      // navigationOptions: headerStyling,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      // navigationOptions: headerStyling,
    },
    MealDetails: MealsDetailsScreen,
  },
  defaultStackNavOptions,
);

const FavNavigator = createStackNavigator(
  {Favorites: FavoritesScreen, MealDetail: MealsDetailsScreen},
  defaultStackNavOptions,
);

//variable created to reduce code and used as a 1st argument in createNavigators
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        const iconss = (
          <Icon name="restaurant" size={25} color={tabInfo.tintColor} />
        );
        return iconss;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: <Text style={{fontFamily: 'open-sand-bold'}}>Meals!</Text>,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: (
        <Text style={{fontFamily: 'open-sand-bold'}}>Favorites!</Text>
      ),
      tabBarIcon: (tabInfo) => {
        const iconss = <Icon name="star" size={25} color={tabInfo.tintColor} />;
        return iconss;
      },
      tabBarColor: Colors.primaryColor,
    },
  },
};

const MealFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.accentColor,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  defaultStackNavOptions,
);

//To add drawer navigator t swipe right to open menu
const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealFavTabNavigator,
      navigationOptions: {drawerLabel: 'Meals'},
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sand-bold',
      },
    },
  },
);

// export default createAppContainer(MealsNavigator);
export default createAppContainer(MainNavigator);
// Syntax createStackNavigator:
// createStackNavigator({routeName: Component},{ defaultNavigationOption})
