import { getProducts } from "../Data";
import ProductComponent from "./ProductComponent";

function ProductList({ category = null, count = null }) {
  const products = getProducts({ category, count });

  return products.map((product) => (
    <ProductComponent key={product.id} product={product} />
  ));
}

export default ProductList;
