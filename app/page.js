import Header from "@/components/Header";
import ProductComponent from "@/components/ProductC]omponent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* <!-- Product section start --> */}
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
          <ProductComponent />
        </section>
      </main>
    </div>
  );
}
