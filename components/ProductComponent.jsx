import Link from "next/link";
import iphon from "../assets/products/iphone-2.jpg";

const ProductComponent = ({ product }) => {
  // const { title, description, price } = product || "";
  console.log(product);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
      {/* <!-- Product 1 Start --> */}
      <div>
        <div
          // style={{ backgroundImage: `url(${product.thumbnail})` }}
          style={{ backgroundImage: `url(${iphon.src})` }}
          className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform"
        ></div>
        <h2 className="text-sm lg:text-base mt-2">
          <Link className="text-base font-bold" href="./productPage.html">
            {/* {product.title} */}
          </Link>
          <span className="text-[#919090]">
            <Link href="./category.html"></Link>
          </span>
        </h2>
        <p className="text-[#919090] text-sm "></p>

        <p className="text-rose-600 text-sm mt-4">
          <span className="text-[#919090] line-through">$205.00</span>
          {/* {product.price} */}
        </p>
      </div>
    </div>
  );
};

export default ProductComponent;
