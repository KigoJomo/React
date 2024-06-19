import React, {Fragment} from "react";

// function component

function Show(props) {
    return (
        <li>I am a { props.brand }</li>
    )
}

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
          {cars.length > 0 &&
              <Fragment>
                  <h2>You have {cars.length} cars in your garage </h2>
                  <ul>
                      {cars.map((car, index) => (
                          <Show brand={car} key={index} />
                      ))}
                  </ul>
              </Fragment>
          }
    </>
  );
}

export { Garage };