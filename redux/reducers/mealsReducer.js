import {MEALS} from '../../data/dummy-data';
import {SET_FILTER, TOGGLE_FAVORITE} from '../actions/mealsAction';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload,
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favoriteMeals: updatedFavMeals};
      } else {
        const meal = state.meals.find((meal) => meal.id === action.payload);
        return {...state, favoriteMeals: state.favoriteMeals.concat(meal)};
      }
    case SET_FILTER:
      const appliedFilters = action.payload;
      const updatedFilterMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }

        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals: updatedFilterMeals};
    default:
      return state;
  }
};

export default mealsReducer;
