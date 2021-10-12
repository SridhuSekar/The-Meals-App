import React, {Component} from 'react';
import {View, Button, FlatList} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Icon from 'react-native-vector-icons/Ionicons';

export class CategoriesScreen extends Component {
  constructor() {
    super();
  }

  renderGridItems = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          this.props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              CategoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={CATEGORIES}
          renderItem={this.renderGridItems}
          numColumns={2}
        />
        <Button
          title="Go To Meals!"
          onPress={() => {
            this.props.navigation.navigate({routeName: 'CategoryMeals'});
          }}
        />
      </View>
    );
  }
}

CategoriesScreen.navigationOptions = (navigationData) => {
  const menuIcon = <Icon name="menu" size={30} />;
  return {
    title: 'Meal Categories',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        {/* Icon placing */}
        <Item
          title={menuIcon}
          IconName="menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default CategoriesScreen;
