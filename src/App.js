import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "./store/wather/watherAction";
import Layput from "./components/layout";
import About from "./pages/about";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);

  return (
    <Fragment>
      <Layput />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </Fragment>
  );
}

export default App;
