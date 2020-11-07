import React, { useState, useEffect } from "react";
import axios from "axios";

const AvgTicker = () => {
  const [bitstampData, setBitstampData] = useState();
  const [coinbaseData, setCoinbaseData] = useState();
  const [bitfinexData, setBitfinexData] = useState();

  const enableCors = 'https://cors-anywhere.herokuapp.com/';

  const bitstampAPI = enableCors + "https://www.bitstamp.net/api/v2/ticker/btcusd";
  const coinbaseAPI = enableCors + "https://api.coinbase.com/v2/exchange-rates?currency=BTC";
  const bitfinexAPI = enableCors + "https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD";

  const fetchData = async () => {
    const res1 = await axios.get(bitstampAPI);
    const res2 = await axios.get(coinbaseAPI);
    const res3 = await axios.get(bitfinexAPI);
    setBitstampData(res1.data);
    setCoinbaseData(res2.data);
    setBitfinexData(res3.data);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 500);
    return () => clearInterval(interval);
  }, []);

  let bitstampNum = bitstampData !== undefined && parseFloat(bitstampData.last);
  let coinbaseNum =
    coinbaseData !== undefined && parseFloat(coinbaseData.data.rates.USD);
  let bitfinexNum = bitfinexData !== undefined && bitfinexData[0][1];

  let arr = [bitstampNum, coinbaseNum, bitfinexNum];
  let average = (
    (bitstampNum + coinbaseNum + bitfinexNum) /
    arr.length
  ).toFixed(2);

  return (
    <div>
      <div>
        <div className="api">
          <p>Bitstamp : <span>{bitstampNum}</span></p>
          <p>Coinbase : <span>{coinbaseNum}</span></p>
          <p>Bitfinex : <span>{bitfinexNum}</span></p>
        </div>
        <div className='average-container'>
               <p className="m-0 text-center">BTC/USD</p>
        <h2 className="m-0 text-center">{average && average}</h2>   
        </div>

      </div>
    </div>
  );
};

export default AvgTicker;
