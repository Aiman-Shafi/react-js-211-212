import "./App.css";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import MenuCard from "./ui/MenuCard";

function App() {
  // const firstName = "Rakib";
  // const lastName = "Hasan";
  // const age = 34;

  // const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  // const description = "Gregorio Y. Zara";

  // const appStyle = {
  //   color: "red",
  //   backgroundColor: "#FFFFFF",
  //   fontSize: 16,
  // };

  // const person = {
  //   name: "Gregorio Y. Zara",
  //   age: 24,
  //   email: "test@gmail.com",
  //   theme: {
  //     backgroundColor: "black",
  //     color: "pink",
  //   },
  // };

  const menu = [
    { id: 1, name: "Burger", price: 300 },
    { id: 2, name: "Pizza", price: 320 },
    { id: 3, name: "RiceBowl", price: 100 },
    { id: 4, name: "Noodles", price: 400 },
    { id: 5, name: "Pasta", price: 900 },
  ];

  return (
    <div className="app">
      {/* <h2>Let's Learn</h2>
      <img src={avatar} alt={description} />
      <h1>{person.name}</h1>
      <h2>His age is {age}</h2> */}
      {/* <Header
        firstName={firstName}
        lastName={lastName}
        age={age}
        person={person}
      /> */}
      <h2>Menu</h2>
      {/* {menu.map((item) => (
        <div key={item.id}>
          {item.name} ${item.price}
        </div>
      ))} */}

      {menu.map((item) => (
        <MenuCard data={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;
