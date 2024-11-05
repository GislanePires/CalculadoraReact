import { useState } from "react";
import * as S from "./Style";

export default function App() {


  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };
  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = (e) => {
    e.preventDefault();
    setResultado(primeiroValor + segundoValor);
  };
  const subtracao = (e) => {
    e.preventDefault();
    setResultado(primeiroValor - segundoValor);
  };
  const multiplicacao = (e) => {
    e.preventDefault();
    setResultado(primeiroValor * segundoValor);
  };
  const divisao = (e) => {
    e.preventDefault();
    setResultado(primeiroValor / segundoValor);
  };

  const limpar = (e) => {
    e.preventDefault();
    setPrimeiroValor("");
    setSegundoValor("");
    setResultado("");
  };

  return (
    <S.Main>
      <S.GlobalStyle />
      <S.CalculatorContainer>
          <h1>calculator</h1>
        <S.CalculatorSection>
          <S.Resultado>
            <h3>{resultado}</h3>
          </S.Resultado>
          <S.InputButton>
          <S.InputSection>
            <input
              type="number"
              placeholder="Digite um número"
              value={primeiroValor}
              onChange={capturandoPrimeiroValor} //captura a mudança do estado dentro do input
            />
            <input
              type="number"
              placeholder="Digite um número"
              value={segundoValor}
              onChange={capturandoSegundoValor}
            />
          </S.InputSection>
          <S.ButtonContainer>
            <button onClick={soma}>+</button>
            <button onClick={subtracao}>-</button>
            <button onClick={multiplicacao}>x</button>
            <button onClick={divisao}>/</button>
            <button onClick={limpar}>Limpar</button>
          </S.ButtonContainer>
          </S.InputButton>
        </S.CalculatorSection>
      </S.CalculatorContainer>
      <S.Cloud>
        <img
          src="https://demos.creative-tim.com/paper-kit-react/static/media/clouds.3c700c13.png"
          alt=""
        />
           <img
          src="https://demos.creative-tim.com/paper-kit-react/static/media/clouds.3c700c13.png"
          alt=""
        />
      </S.Cloud>
    </S.Main>
  );
}
