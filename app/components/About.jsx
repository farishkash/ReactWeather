var React = require('react');



var About = (props) => {
  return(
    <div>
    <h1 className="text-center"> About </h1>
      <ol>
        <li>
          <a href="https://facebook.github.io/react/">Built with React </a>
        </li>
        <li>
          <a href="https://openweathermap.org">and OpenWeatherMap.Org </a>
        </li>

        <li>
          <a href='https://github.com/farishkash/ReactWeather'>Source Code </a>
        </li>
      </ol>
    </div>
  )
};

module.exports = About;
