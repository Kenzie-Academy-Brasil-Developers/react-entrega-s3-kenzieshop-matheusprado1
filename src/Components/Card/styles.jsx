import styled from "styled-components";

const Container = styled.div`
  background-color: #fffffd;
  width: 230px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 2px;
  border: 1px solid #d3d3d3;
  padding: 8px;
  margin: 3px;
  img {
    width: 100px;
    height: 100px;
  }
  p {
    margin: 2px 0px;
  }
`;
export default Container;
