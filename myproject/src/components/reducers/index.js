import {combineReducers} from 'redux';
import RecipeReducer from './reducer-recipes';
import ActiveReducer from './reducer-active'

const allReducers = combineReducers({
  recipes: RecipeReducer,
  activeRecipe: ActiveReducer,

});

export default allReducers;
