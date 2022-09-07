const request = require("request");

const forecast = (address, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=6148433823afec09a114140680eaa387&query=${address}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to Weather API!", undefined);
    } else if (!body) {
      callback("Cannot find the information!", undefined);
    } else if (body.error) {
      callback("Uable to connect location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions}, It is currently ${body.current.temperature} degrees out. There is a ${body.current.precip}% chance of rain\n` +
          `It feels like ${body.current.feelslike} degree out`
      );
    }
  });
};

module.exports = forecast;
