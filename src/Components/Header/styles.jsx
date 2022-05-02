import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
  h2:hover {
    cursor: pointer;
  }
  div {
    width: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  section {
    top: 12px;
    right: 440px;
    background-color: #001f36;
    width: 20px;
    height: 20px;
    font-size: 13px;
    color: #fff;
    border-radius: 20px;
    text-align: center;
    
    font-weight: 600;
    margin: 2px 0px 0px -10px;
  }
  .cart-icon, .login-icon {
    cursor: pointer;
    width: 30px;
    height: 16px;
  }
  
`;
