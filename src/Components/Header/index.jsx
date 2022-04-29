import { StyledHeader } from "./styles";

import { useHistory } from "react-router-dom";

import { FishoppingCart, FiLogin } from "react-icons/fi";

import { useSelector } from "react-redux";

const Header = () => {
  const history = useHistory();

  const cartProducts = useSelector((store) => store.cart);
  const quantity = cartProducts.length;

  return (
    <StyledHeader>
      <h2 onClick={() => history.push("/")}>Kenzie Shop</h2>
      <div>
        <FishoppingCart onClick={() => history.push("/cart")} />
        {quantity > 0 && (
          <section>
            <span>{`${quantity}`}</span>
          </section>
        )}
        <p>Carrinho</p>
        <FiLogin />
        <p>Entrar</p>
      </div>
    </StyledHeader>
  );
};

export default Header;
