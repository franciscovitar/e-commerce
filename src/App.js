import Navbar from "./component/Navbar";
import Main from "./component/Main";
import Text from "./component/Text";
import Cart from "./component/Cart";
import Carts from "./component/Carts";
import Modal from "./component/Modal";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const less = (e) => {
    e.preventDefault();
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const mas = (e) => {
    e.preventDefault();
    setNumber(number + 1);
  };

  const [numbers, setNumbers] = useState(0);

  const sendCart = (e) => {
    e.preventDefault();
    setNumbers(number + numbers);
    setNumber(0);
  };

  const num = numbers;

  const trash = () => {
    setNumbers(0);
  };

  return (
    <div className="App">
      <Navbar num={num}></Navbar>
      <Carts num={num} trash={trash}></Carts>
      <div className="row contenedor">
        <div className="col-md-6 zapas">
          <Main></Main>
          <Modal />
        </div>
        <div className="col-md-6 p-md-5 texto">
          <Text></Text>
          <Cart
            number={number}
            sendCart={sendCart}
            less={less}
            mas={mas}
          ></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
