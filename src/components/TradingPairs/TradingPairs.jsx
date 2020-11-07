import React, { useState, useEffect } from "react";
import axios from "axios";
import "./buttons.css";
import GJNumbersView from "../GJNumbersView​/GJNumbersView";

const TradingPairs = () => {
  const [data, setData] = useState();
  const [selectedBitstamp, setSelectedBitstamp] = useState("");

  const url = "https://www.bitstamp.net/api/v2/trading-pairs-info/";

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(url);
      setData(res.data);
    };
    fetchData();
  }, [url]);

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  };
  
  const onClick = (value) => {
    setSelectedBitstamp(value.item);
    handleScroll();
  };

  return (
    <div className="right">
      <div className="container-title w-100">
        <div className="text-center title">
          <h5>Trading Pairs</h5>
        </div>
      </div>
      <div className="btn-container">
        <div className="but row text-center">
          {data !== undefined &&
            data.map((item) => (
              <div key={item.name} className="col-12 col-md-6 p-0">
                <button
                  onClick={() => onClick({ item })}
                  className="btn button btn-outline-light"
                >
                  {item.name}
                </button>
              </div>
            ))}
        </div>
      </div>
      <div className="w-100 values">
        <GJNumbersView selectedBitstamp={selectedBitstamp} />
      </div>
    </div>
  );
};

export default TradingPairs;