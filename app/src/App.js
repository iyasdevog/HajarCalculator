import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [state, setstate] = useState([]);
  const [todo, settodo] = useState(36);
  const [values, setvalue] = useState([]);
  let [avg, setAvg] = useState([]);
  // useEffect(
  //   function () {
  //     const promsg = prompt(`i didn't want decimal part? answer yes or no`);

  //     if (promsg === "yes") {
  //       avg = avg.map((el) => Math.floor(el));
  //     } else {
  //       avg = avg.map((el) => el.toFixed(2));
  //     }
  //   },
  //   [avg]
  // );

  function getpercentage(array, state) {
    avg = array.map((el) => (el / state) * 100);
    const value=prompt("i want to avoid  fractional part? print yes or no")
    if(value==='yes'){
          avg = avg.map((el) => Math.floor(el));

    }else{
    avg = avg.map((el) => el.toFixed(2));

    }
    
    setAvg(avg);
  }
  function init() {
    setstate([]);
    settodo([36]);
    setvalue([]);
    setAvg([]);
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="hajar_box">
          <h1>Hajar percentage calculator</h1>
          <div className="first-box">
            <input
              type="number"
              placeholder="enter Attended days"
              value={state}
              className=" form form_one"
              onChange={(e) => setstate(Number(e.target.value))}
            />
            {/* <label htmlFor="">Attended days</label> */}
            <input
              type="number"
              placeholder="enter Total days"
              value={todo}
              className="form form_two"
              onChange={(e) => settodo(Number(e.target.value))}
            />
            {/* <label htmlFor="">Total days</label> */}

            <button
              className="form"
              onClick={() => setvalue([...values, state])}
            >
              submit
            </button>
          </div>

          <div className="typed">{values.join()}</div>
          <button
            className="percentage"
            onClick={() => getpercentage(values, todo)}
          >
            getpercentage
          </button>
          <div className="results">{avg.join()}</div>
          <button className="refresh" onClick={() => init()}>
            refresh
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
