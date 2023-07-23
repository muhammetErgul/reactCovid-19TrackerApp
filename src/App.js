import { useEffect } from "react";
import Form from "./components/Form";
import Grafik from "./components/Grafik";
import Header from "./components/Header";
import Information from "./components/Information";
import { fetchData } from "./redux/Services";

import "./styles.scss";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Information />
      <Form />
      <Grafik />
    </div>
  );
}
