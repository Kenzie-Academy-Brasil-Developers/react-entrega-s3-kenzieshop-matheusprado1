import { StyledButton } from "./styles";

const Button = ({ children, finish, onClick }) => {
  return (
    <StyledButton finish={finish} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
