import { combineReducers } from 'redux';

const selectedRestaurantReducer = (selectedRestaurant = {highlights: [],location:''}, action) =>{
    if(action.type==='RESTAURANT_SELECTED'){
        return action.payload;
    }

    return selectedRestaurant;
}

const selectedRestaurantsReducer = (selectedRestaurants =[], action) =>{
    if(action.type==='RESTAURANTS_SELECTED'){
        return action.payload;
    }

    return selectedRestaurants;
}

export default combineReducers({
    selectedRestaurant: selectedRestaurantReducer,
    selectedRestaurants: selectedRestaurantsReducer
})
