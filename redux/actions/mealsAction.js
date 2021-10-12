export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTER = 'SET_FILTER';

export const toggleFavorite = (id) => {
  return {type: TOGGLE_FAVORITE, payload: id};
};

export const setFilter = (favSetting) => {
  return {type: SET_FILTER, payload: favSetting};
};
