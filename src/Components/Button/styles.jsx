import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => (props.finish ? "#001f36" : "#0fbab7")};
  border: 2px solid;
  border-color : ${(props) => (props.finish ? "#001f36" : "#0fbab7")};
  color: #fff;
  font-weight: 600;
  width: 95%;
  height: 30px;
  border-radius: 2px;
  :hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;


