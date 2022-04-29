import { Container } from "./styles";

import Button from "../Button";

import { addCartThunk, removeCartThunk } from "../../Store/Modules/Cart/thunk";

import { useDispatch } from "react-redux";

const Card = ({ cart, product }) => {
  const dispatch = useDispatch();

  const handleClickRemove = () => {
    dispatch(removeCartThunk(product));
  };

  const handleClickAdd = () => {
    dispatch(addCartThunk(product));
  };

  return (
    <Container>
      <img src={product.image} alt="product" />
      <p>{product.title}</p>
      <span>{`R$ ${product.price}`}</span>
      {cart ? (
        <Button onClick={handleClickRemove}>Remover</Button>
      ) : (
        <Button onClick={handleClickAdd}>Remover</Button>
      )}
    </Container>
  );
};

export default Card;
