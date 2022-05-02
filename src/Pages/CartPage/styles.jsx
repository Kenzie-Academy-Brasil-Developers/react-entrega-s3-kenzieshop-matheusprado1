import styled from "styled-components";

export const Container = styled.div`
  min-width: 300px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px auto;
  aside {
    width: 200px;
    height: 180px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      margin-top: 10px;
    }
    
  }
  @media (min-width: 1024px) {
    position: relative;
    aside {
      position: absolute;
      right: 180px;
      top: 10px;
    }
  }
`;

