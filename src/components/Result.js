import React from 'react'
import {connect} from 'react-redux'

class Result extends React.Component{

    render(){
     return (
        <div>
            <div className="ui card">
              <div className="image">
                    <img  className="ui small image" alt="" src={this.props.selectedRestaurant.thumb} width ="200" height="200"/>
              </div>
              <div className="content">
                <a href={this.props.selectedRestaurant.url} target="_blank" className="header">{this.props.selectedRestaurant.name}</a>
                <div className="meta">
                  <span className="date">{this.props.selectedRestaurant.cuisines}</span>
                </div>
                <div className="description">
                 {this.props.selectedRestaurant.highlights.map((highlight) => highlight + ", ")}
                </div> <br />
                 <a target="_blank" href={this.props.selectedRestaurant.location.address}> Address: {this.props.selectedRestaurant.location.address} </a>
              </div>
              <div className="extra content">
                <a target="_blank" href={this.props.selectedRestaurant.url}>
                  <i className="user icon" ></i>
                  Average Cost for two: ${this.props.selectedRestaurant.average_cost_for_two}
                </a>
              </div>
            </div>


        </div>)
}
}

const mapStateToProps = (state) =>{
    return {
        selectedRestaurant:state.selectedRestaurant,
    }
}


export default connect(mapStateToProps)(Result);
