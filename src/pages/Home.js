import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import message from "../person";
import { Garage } from "../car";
import AnimatedWordDisplay from "../AnimatedWordDisplay";

const Main = ({ children }) => {
  return <main>{children}</main>;
};

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }

  show() {
    return this.present() + ", it is a " + this.model;
  }
}

const CarComponent = () => {
  const myCar = new Model("Ford", "Mustang");

  return (
    <div>
      <h5>{myCar.show()}</h5>
      <p>You should get a {myCar.brand} too!</p>
    </div>
  );
};

const myFruits = ["apple", "banana", "cherry", "date"];

const otherFruits = ["pineapple", "water melon", "pawpaw", "mango"];

const allFruits = [...myFruits, ...otherFruits];

const FruitComponent = ({ title, fruits }) => {
  return (
    <div className="fruitWrapper">
      <h3>{title}</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

// destructuring
// const vehicles = ['Cybertruck', 'Chiron', '911']
// const [electric, iec, hybrid] = vehicles;

const vehicleOne = {
  brand: "Tesla",
  model: "Cybertruck",
  type: "SUV",
  year: "2024",
  color: "silver",
};

function myVehicle({ type, color, brand, model, year }) {
  const message = `My ${type} is a ${year} ${color} ${brand} ${model}.`;
  return message;
}

const VehicleComponent = ({ vehicle }) => {
  return <p>{vehicle}</p>;
};

const cars = ["Tesla", "Porsche", "BMW", "Mercedes"];

function Form() {
  const [inputs, setInputs] = useState({
    username: "",
    age: "",
    message: "Write us a message",
    car: "Tesla",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, age, message, car } = inputs;
    alert(`Name: ${username}\nAge: ${age}\nMessage: ${message}\nCar: ${car}`);
    console.table(inputs);
  };

  return (
    <form className="column" onSubmit={handleSubmit}>
      <div className="fieldwrapper column">
        <label htmlFor="username">Enter First Name</label>
        <input
          type="text"
          id="username"
          name="username"
          autoComplete="name"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </div>
      <div className="fieldwrapper column">
        <label htmlFor="age">Enter Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </div>
      <div className="fieldwrapper column">
        <label>Text-Area</label>
        <textarea
          id="message"
          name="message"
          value={inputs.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="fieldwrapper column">
        <label>Select a car</label>
        <select id="car" name="car" value={inputs.car} onChange={handleChange}>
          <option>Tesla</option>
          <option>BMW</option>
          <option>Mercedes</option>
          <option>Porsche</option>
        </select>
      </div>
      <button type="submit" className="btn-primary">
        submit
      </button>
    </form>
  );
}

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let timer = setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    return <h1>I've rendered {count} times!</h1>;
}

const Home = () => {
  return (
    <Fragment>
      <Main>
        <AnimatedWordDisplay word="Hello World" />
        <Timer />
        <CarComponent />
        <FruitComponent title={"Some Fruits"} fruits={myFruits} />
        <FruitComponent title={"Other Fruits"} fruits={otherFruits} />
        <FruitComponent title={"All Fruits"} fruits={allFruits} />
        <VehicleComponent vehicle={myVehicle(vehicleOne)} />
        <p>{message()}</p>
        <Garage cars={cars} />
        <Form />
      </Main>
    </Fragment>
  );
};

export default Home;

// const Home = () => {
//   return <h1>Home</h1>;
// };
