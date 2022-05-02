import Card from "../../Components/Card";
import Header from "../../Components/Header";

import { Container } from "./styles";

import createShowcaseThunk from "../../Store/Modules/Products/thunk";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createShowcaseThunk());
  }, []);

  const products = useSelector((store) => store.products);

  console.log(products);

  return (
    <>
      <Header />
      <Container>
        {products.map((product) => (
          <div key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </Container>
    </>
  );
};

export default Dashboard;
