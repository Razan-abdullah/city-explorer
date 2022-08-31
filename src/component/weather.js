import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather-cards">
      {this.props.weatherData.map(item => {
      return (
        <div className="output-data">
          <Card style={{ width: "700px", height: "fit-content" }}>
            <Card.Body>
              <Card.Text>
                <p>
                  <span>Date: </span>{item.datetime}
                </p>
                <p>
                  <span>Description: </span>low of {item.low_temp}, high of {item.max_temp} with {item.description} 
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )
    })
  }
  <br></br>
  </div>
)}
}

export default Weather;