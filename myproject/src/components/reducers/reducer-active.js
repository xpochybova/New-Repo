export default function(state={}, action){
  switch(action.type){
    case "RECIPE_SELECTED":
      return action.loadr;
    //  break;
  }
  return state;

}
