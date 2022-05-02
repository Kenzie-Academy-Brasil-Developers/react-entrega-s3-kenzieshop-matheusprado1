import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Header from "../../Components/Header";

import { useSelector } from "react-redux";
import { Container } from "./styles";

const CartPage = () => {
  const cartProducts = useSelector((store) => store.cart);
  const price = cartProducts.reduce((acc, product) => acc + product.price, 0);
  const quantity = cartProducts.length;

  return (
    <>
      <Header />
      <Container>
        {cartProducts.map((product) => (
          <>
            <Card cart product={product} />
          </>
        ))}
        <aside>
          <h3>Resumo do pedido</h3>
          {quantity > 1 || quantity === 0 ? (
            <p>{`${quantity} produtos`}</p>
          ) : (
            <p>{`${quantity} produto`}</p>
          )}
          <span>{`R$ ${price.toFixed(2)}`}</span>
          <Button onClick finish>
            Finalizar pedido
          </Button>
        </aside>
      </Container>
    </>
  );
};

export default CartPage;
