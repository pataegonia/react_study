import { useState, useEffect } from "react";

function Coin_Tracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [val, setCoin] = useState("");
  const [usd, setUsd] = useState(0);
  const [changePrice, setChangePrice] = useState(0);
  const [changeCoin, setChangeCoin] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const findCoin = (element) => {
    if (`${element.name} (${element.symbol})` === val) {
      return true;
    }
  };
  const onChange = (event) => {
    setCoin(event.target.value);
  };
  const usdChange = (event) => {
    setUsd(event.target.value);
  };
  const usdSubmit = (event) => {
    event.preventDefault();
    const myCoin = coins.find(findCoin);
    setChangeCoin(myCoin.symbol);
    const price = parseFloat(myCoin.quotes.USD.price).toFixed(3);
    setChangePrice(parseFloat(usd / price).toFixed(3));
  };
  return (
    <div>
      <h1>The Coins</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <div>
          <select value={val} onChange={onChange}>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol})
              </option>
            ))}
          </select>
          <form onSubmit={usdSubmit}>
            <input
              onChange={usdChange}
              value={usd}
              type="integer"
              placeholder="enter Your USD"
            ></input>
            <button>submit</button>
          </form>
          <h3>
            You can buy {changePrice}
            {changeCoin}
          </h3>
        </div>
      )}
    </div>
  );
}

export default Coin_Tracker;
