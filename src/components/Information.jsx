import { useSelector } from "react-redux";
import { selectItems } from "../redux/covidSlice";

export default function Information() {
  const data = useSelector(selectItems);
  //console.log(data);
  return (
    <div className="information">
      <div className="body infected">
        <h4>Infected</h4>
        <span className="count">{data?.confirmed}</span>
        <div className="date">
          Last Updated at: <div> {data?.last_update} PM</div>
        </div>
        <div className="bottom">Number Of active casses of COVID-19 US</div>
      </div>
      <div className="body recovered">
        <h4>Recovered</h4>
        <span className="count">{data?.recovered}</span>
        <div className="date">
          Last Uptaed: <div>{data?.last_update} PM</div>
        </div>
        <div className="bottom">Number Of active casses of COVID-19 US</div>
      </div>
      <div className="body deaths">
        <h4>Deaths</h4>
        <span className="count">{data?.deaths}</span>
        <div className="date">
          Last Uptaed: <div>{data?.last_update} PM</div>
        </div>
        <div className="bottom">Number Of active casses of COVID-19 US</div>
      </div>
      <div className="body active">
        <h4>Active</h4>
        <span className="count">{data?.active}</span>
        <div className="date">
          Last Uptaed: <div>{data?.last_update} PM</div>
        </div>
        <div className="bottom">Number Of active casses of COVID-19 US</div>
      </div>
    </div>
  );
}
