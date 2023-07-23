import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CountryData from "../Data";

import { fetchDataByCountry, fetchData } from "../redux/Services";

export default function Form() {
  const [country, setCountry] = useState("TUR");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCountry(e.target.value);
    dispatch(fetchDataByCountry(country));
  };

  return (
    <div className="form">
      <select className="select" value={country} onChange={handleChange}>
        {CountryData.map((item, key) => (
          <option key={key} value={item.iso}>
            {item.iso}
          </option>
        ))}
      </select>
    </div>
  );
}
