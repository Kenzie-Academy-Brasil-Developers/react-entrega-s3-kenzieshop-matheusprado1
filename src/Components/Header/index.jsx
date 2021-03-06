import { StyledHeader } from "./styles";

import { useHistory } from "react-router-dom";

import { FiShoppingCart, FiLogIn } from "react-icons/fi";

import { useSelector } from "react-redux";

const Header = () => {
  const history = useHistory();

  const cartProducts = useSelector((store) => store.cart);
  const quantity = cartProducts.length;

  return (
    <StyledHeader>
      <h2 onClick={() => history.push("/")}>Kenzie Shop</h2>
      <div className="icons-div">
        <FiShoppingCart
          className="cart-icon"
          onClick={() => history.push("/cart")}
        />
        {quantity > 0 && (
          <section>
            <span>{`${quantity}`}</span>
          </section>
        )}

        <FiLogIn className="login-icon"/>
      </div>
    </StyledHeader>
  );
};

export default Header;
