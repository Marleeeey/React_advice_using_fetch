import React, { useEffect, useState } from "react";

const Qoutes = () => {
  const [advice, setAdvice] = useState([]);

  const fetchData = async () => {
    const URL = "https://api.adviceslip.com/advice";
    const response = await fetch(URL);
    const data = await response.json();
    const advice = data.slip.advice;
    setAdvice(advice);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    return fetchData();
  };

  return (
    <div className="countainer">
      <div className="card">
        <h1 className="adive">{advice}</h1>
        <button className="button" onClick={handleClick}>
          <span className="advice">ADVICE !!!!</span>
        </button>
      </div>
    </div>
  );
};

export default Qoutes;
