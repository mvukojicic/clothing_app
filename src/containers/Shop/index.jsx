import { useContext } from "react";
import { ProductsContext } from "../../Context/product.context";
import { ProductCard } from "../../components/Product-Card";
import styled from "@emotion/styled/macro";

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <ProductsWrapper>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </ProductsWrapper>
  );
};

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`;
