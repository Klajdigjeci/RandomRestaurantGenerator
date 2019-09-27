import React from 'react'
import {connect} from 'react-redux'
import {setRestaurants} from '../actions'


// cbd027e511fd99f3b45e7f7f21f0fedf
class RestaurantApi extends React.Component{

    componentDidMount(){
        const Zomato = require('zomato.js');
        const z = new Zomato('cbd027e511fd99f3b45e7f7f21f0fedf');
        z
            .search({
              lat: this.props.lat,
              lon: this.props.long,
              radius: 16093,
            })
          .then((data) => {
            this.props.setRestaurants(data.restaurants)

          })
          .catch(function(err) {
            window.alert(err);
          });
    }

        handleRestaurants=()=> {
          var restaurants = this.props.selectedRestaurant;
          this.props.getRestaurants(restaurants);
      }

    render(){
        if(this.props.selectedRestaurants.length >0){
            return <button className="mainGreenButton" onClick={this.handleRestaurants}> Generate </button>
        }
        return (<div > {this.props.selectedRestaurants.length} </div>)
    }
}

const mapStateToProps = (state) =>{
    return {
        selectedRestaurant:state.selectedRestaurant,
        selectedRestaurants: state.selectedRestaurants
    }
}


export default connect(mapStateToProps,{setRestaurants:setRestaurants})(RestaurantApi);
