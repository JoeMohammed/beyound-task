import { weatherActions } from "./wather";

export const fetchWeatherData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const req = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=47dabdb70f29b8d91fab924df38b3def"
      );

      if (!req.ok) {
        throw new Error("Could not fetch Weather data!");
      }

      const res = await req.json();
      return res;
    };

    try {
      const weatherData = await fetchData();
      dispatch(
        weatherActions.getWather({
            weather: weatherData?.weather || [{code: 400}],
        })
      );
    } catch (err) {
        throw new Error("Could not fetch Weather data!!!");
    }
  };
};
