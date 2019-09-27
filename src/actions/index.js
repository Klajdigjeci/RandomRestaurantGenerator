export const setRestaurant = (restaurant) =>{
    return{
        type: 'RESTAURANT_SELECTED',
        payload: restaurant
    }
}

export const setRestaurants = (restaurants) =>{
    return{
        type: 'RESTAURANTS_SELECTED',
        payload: restaurants
    }
}
