import React from 'react'
import Spinner from './Spinner'
import Styling from './Styling'
import Header from './Header'
import RestaurantApi from '../apis/RestaurantApi'
import Result from './Result.js'
import '../styling/App.css'
import {connect} from 'react-redux'
import {setRestaurant,setRestaurants} from '../actions'

class App extends React.Component{

state = { lat: null, long:null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    getRestaurants = async (restaurants) => {
        let i = this.generateRandomRestaurant()
        await this.props.setRestaurant(this.props.selectedRestaurants[i]);
    }

    generateRandomRestaurant(){
        let num = Math.floor(Math.random() * 20);
        return num;
    }


    renderContent=() => {
        if (this.state.errorMessage && !this.state.lat) {
          return (<div className="header-middle">Error: {this.state.errorMessage} <br></br>
          Please Accept geolocation and refresh the page</div>);
      }

        if (!this.state.errorMessage && this.state.lat) {
          return (
                <div>
                    <Header />
                    <Styling />
                    <RestaurantApi lat={this.state.lat} long={this.state.long} getRestaurants={this.getRestaurants}/>

                    <Result />
                </div>
            )
        }

        return <Spinner message="Please accept location request" />;
    }

      render() {
        return <div className="border red">{this.renderContent()}</div>;
      }
}

const mapStateToProps = (state) =>{
    return {
        selectedRestaurant:state.selectedRestaurant,
        selectedRestaurants: state.selectedRestaurants
    }
}


export default connect(mapStateToProps,{setRestaurant: setRestaurant, setRestaurants:setRestaurants})(App);
