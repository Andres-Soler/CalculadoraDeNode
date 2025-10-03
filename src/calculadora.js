import { useState } from "react";
import Button from "./boton";

const Calculadora = () => {
  const [input, setInput] = useState("");

  const asignarNumero = (num) => {
    setInput((prev) => prev + String(num));
  };

  const sumar = () => setInput((prev) => prev + "+");
  const restar = () => setInput((prev) => prev + "-");
  const multiplicar = () => setInput((prev) => prev + "*");
  const dividir = () => setInput((prev) => prev + "/");
  const porcentaje = () => setInput((prev) => prev + "%");

  const calcular = () => {
    try {
      const expresion = input.replace(/%/g, "/100");
      let resultado = eval(expresion);

      if (resultado === Infinity || resultado === -Infinity) {
        setInput("Syntax Error");
      } else {
        setInput(String(resultado));
      }
    } catch {
      setInput("Syntax Error");
    }
  };

  const limpiar = () => setInput("");

  return (
    <div className="Contador">
      <label>Resultado: {input || 0}</label>
      <br />

      <Button onClick={() => asignarNumero(1)}>1</Button>
      <Button onClick={() => asignarNumero(2)}>2</Button>
      <Button onClick={() => asignarNumero(3)}>3</Button>
      <Button onClick={sumar}>+</Button>
      <br />

      <Button onClick={() => asignarNumero(4)}>4</Button>
      <Button onClick={() => asignarNumero(5)}>5</Button>
      <Button onClick={() => asignarNumero(6)}>6</Button>
      <Button onClick={restar}>-</Button>
      <br />

      <Button onClick={() => asignarNumero(7)}>7</Button>
      <Button onClick={() => asignarNumero(8)}>8</Button>
      <Button onClick={() => asignarNumero(9)}>9</Button>
      <Button onClick={multiplicar}>*</Button>
      <br />

      <Button onClick={() => asignarNumero(0)}>0</Button>
      <Button onClick={() => asignarNumero(".")}>.</Button>
      <Button onClick={calcular}>=</Button>
      <Button onClick={dividir}>/</Button>
      <br />

      <button onClick={porcentaje}>%</button>
      <Button onClick={limpiar}>C</Button>
    </div>
  );
};

export default Calculadora;