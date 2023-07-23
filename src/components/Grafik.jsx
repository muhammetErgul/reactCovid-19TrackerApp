import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectItems } from "../redux/covidSlice";
Chart.register(CategoryScale);
export default function Grafik() {
  const covidData = useSelector(selectItems);
  const data = {
    labels: ["Infected", "Recovered", "Deaths", "Active"],
    datasets: [
      {
        label: "Cases",
        backgroundColor: ["cornflowerblue ", "darkgreen", "#FA7077", "#F2E678"],
        borderColor: ["#B1D7FE ", "#DDF6E2", "#FA7077", "#F2E678"],
        borderWidth: 1,
        data: [
          covidData?.confirmed,
          covidData?.recovered,
          covidData?.deaths,
          covidData?.active,
        ],
      },
    ],
  };

  return (
    <div className="grafic">
      <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Current state in TUR",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
