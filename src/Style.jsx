import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{ margin:0;
padding:0;
box-sizing: border-box;
overflow: hidden;
}

`;

export const rotateLeft = keyframes`
      0% {
    transform: translateZ(0);
  }
  100% {
    transform: translate3d(-50%,0,0);
  }

`;
export const Main = styled.main`
  background-image: 
/* linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), */ url(https://img.goodfon.com/wallpaper/nbig/b/5b/alisa-v-strane-chudes-tim-7375.webp);
  background-size: cover;
  background-position: center;
  box-shadow: 0px -83px 131px 64px rgba(0, 0, 0, 1) inset;
  -webkit-box-shadow: 0px -20px 131px 20px rgba(0, 0, 0, 1) inset;
  -moz-box-shadow: 0px -60px 131px 40px rgba(0, 0, 0, 1) inset;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: "Orbitron", sans-serif;
`;

export const CalculatorContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  position: relative;
  background-color: #201b28;
  border-radius: 3rem;
  z-index: 4;
  box-shadow: 0px -83px 131px 64px rgba(0, 0, 0, 1) inset;
-webkit-box-shadow: 0px -20px 131px 20px rgba(0, 0, 0, 1) inset;
-moz-box-shadow: 0px -60px 131px 40px rgba(0, 0, 0, 1) inset;
transition: all 0.8s ease;
        position: relative;
        overflow: hidden;

        &:hover {
            transform: translateY(-5px);
        }
  h1 {
    color: #f8f4fa;
    font-size: 2rem;
    /* padding-bottom: 3rem; */
  }
`;

export const Cloud = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  background-size: cover;
  position: absolute;
  bottom: 0;
  width: 250.625em;
  height: 100%;
  animation: ${rotateLeft} 80s linear infinite;
  z-index: 1;

  img {
    margin: 0;
  }
`;
export const CalculatorSection = styled.section`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 4;
  border-radius: 3rem;
  padding: 2rem;
  
`;
export const InputButton = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 18rem;
  height: 8rem;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #0c0b0d;
`;
export const InputSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  /* border: 1px solid pink; */

  input {
    width: 7.7rem;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: #201b28;
    color: orange;
    display: flex;
    justify-content: center;
    text-align: center;

    &:hover {
      border: 2px solid orange;
    }
  }
`;
export const ButtonContainer = styled.div`
  display: flex;

  /* flex-wrap: wrap; */
  button {
    width: 3rem;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: orange;
    color: #efe5e5;
    cursor: pointer;

    transition: all 0.8s ease;
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: #b32100;
      box-shadow: 12px 24px 15px 0px rgba(0, 0, 0, 0.85);
      transform: translateY(-1px);
    }
  }
`;
export const Resultado = styled.div`
  width: 15rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #0c0b0d;
  font-family: "Orbitron", sans-serif;
  color: orange;
  font-size: 3rem;
  border-radius: 2rem;
`;
