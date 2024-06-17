import React from "react";
import ReactDOM from 'react-dom/client';
import message from "./person";

// const myFirstElement = <h1>Hello World</h1>

class Car{
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car{
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }

  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

const CarComponent = () => {
  const myCar = new Model("Ford", "Mustang");

  return (
    <div>
      <h5>{myCar.show()}</h5>
      <p>You should get a { myCar.brand } too!</p>
    </div>
  );
};

const myFruits = ['apple', 'banana', 'cherry', 'date']

const otherFruits = ['pineapple', 'water melon', 'pawpaw', 'mango']

const allFruits = [...myFruits, ...otherFruits];

const FruitComponent = ({ title, fruits }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{ fruit }</li>
        ))}
      </ul>
    </div>
  )
}

// destructuring
// const vehicles = ['Cybertruck', 'Chiron', '911']
// const [electric, iec, hybrid] = vehicles;

const vehicleOne = {
  brand: 'Tesla',
  model: 'Cybertruck',
  type: 'SUV',
  year: '2024',
  color: 'silver'
}

function myVehicle({ type, color, brand, model, year }) {
  const message = `My ${type} is a ${year} ${color} ${brand} ${model}.`
  return message;
}

const VehicleComponent = ({ vehicle }) => {
  return <p>{ vehicle }</p>
}

function App() {
  return (
    <div>
      <CarComponent />
      <FruitComponent title={"Some Fruits"} fruits={myFruits} />
      <FruitComponent title={"Other Fruits"} fruits={otherFruits} />
      <FruitComponent title={"All Fruits"} fruits={allFruits} />
      <VehicleComponent vehicle={myVehicle(vehicleOne)}/>
      <p>{ message() }</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< App />)