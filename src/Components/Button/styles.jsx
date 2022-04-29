import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => (props.finish ? "#3D50B3" : "#8684fc")};
  border: 2px #8684fc solid;
  color: #fff;
  font-weight: 600;
  width: 95%;
  height: 30px;
  border-radius: 2px;
  :hover {
    cursor: pointer;
  }
`;


