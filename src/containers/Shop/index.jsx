import { useContext } from "react";
import { ProductsContext } from "../../Context/product.context";

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products &&
        products.map(({ id, name }) => (
          <div key={id}>
            <h1>{name}</h1>
          </div>
        ))}
    </div>
  );
};
