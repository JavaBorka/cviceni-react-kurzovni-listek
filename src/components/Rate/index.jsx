import './style.css';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 }
};

const Rate = ({from}) => {
  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">
        {from === 'USD' ? `${currencies.USD.CZK} USD` : (
          from === 'EUR' ? `${currencies.EUR.CZK} EUR` : `${currencies.GBP.CZK} GBP`
        )}
      </div>
    </div>
  );
};

export default Rate;