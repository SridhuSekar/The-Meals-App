import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import MealItem from './MealItem';

class MealList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.list}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={this.props.listData}
          style={{width: '95%', marginTop: '2%'}}
          //*****doubt in this function callback area*****//
          renderItem={(itemData) => {
            return (
              <MealItem
                title={itemData.item.title}
                items={itemData.item}
                duration={itemData.item.duration}
                onSelectMeal={() => {
                  this.props.navigation.navigate({
                    routeName: 'MealDetails',
                    params: {mealId: itemData.item.id},
                    mealTitle: itemData.item.title,
                  });
                }}
              />
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding:15
  },
});
export default MealList;
