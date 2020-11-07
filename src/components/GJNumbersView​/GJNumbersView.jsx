import React, { useState, useEffect } from "react";
import axios from "axios";
import "./selected.css";

const GJNumbersView = (props) => {
  const [data, setData] = useState();
  let selectedItem =
    props.selectedBitstamp !== "" && props.selectedBitstamp.url_symbol;

  const enableCors = 'https://cors-anywhere.herokuapp.com/';

  const fetchData = async () => {
    const selectedButton = await axios.get(enableCors +
      `https://www.bitstamp.net/api/v2/ticker/${
        selectedItem ? selectedItem : "btcusd"
      }`
    );
    setData(selectedButton.data);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 500);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [selectedItem]);


  let dataSelected = data !== undefined && data;

  let timestamp = dataSelected.timestamp;
  let date = new Date(timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);


  return (
    <div className="sb-container">
      <div className="selected_container text-center">
        <div className="row">
          <div className="col">
            <p>
              <b>High:</b> {dataSelected.high}
            </p>
          </div>
          <div className="col">
            <p>
              <b>Low:</b> {dataSelected.low}
            </p>
          </div>
        </div>
        <div className="row my-3">
          <h1 className="mx-auto">
            {dataSelected.last}{" "}
            <span className="bitstamp_name">
              {" "}
              {props.selectedBitstamp !== ""
                ? props.selectedBitstamp.name
                : "BTC/USD"}
            </span>
          </h1>
        </div>
        <div className="row">
          <div className="col">
            <p className="green">
              <b>Bid: </b>{dataSelected.bid}
            </p>
          </div>
          <div className="col">
            <p className="red">
              <b>Ask: </b>{dataSelected.ask}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <b>Time:</b> {formattedTime}
            </p>
          </div>
          <div className="col">
            <p>
              <b>Vol:</b> {parseFloat(dataSelected.volume).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <b>Open:</b> {dataSelected.open}
            </p>
          </div>
          <div className="col">
            <p>
              <b>Vwap:</b> {dataSelected.vwap}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GJNumbersView;
