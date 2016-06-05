var React = require('react');


var WeatherMessage = ({temp, location}) => {
    return(
      <div>
        <p>The temp is {temp} in {location}.</p>
      </div>
    );
}

module.exports = WeatherMessage;
