// import { Suspense } from "react";

import { ProductDetails } from "../lib/productDetails";
import { ProductReviews } from "../lib/productReviews";

export default function ProductDetailPage() {
  return (
    <section className="product-container">
      <h1>Product page</h1>
      {/* <Suspense fallback={<span>Loading...</span>}> */}
        <ProductDetails />
        <ProductReviews />
      {/* </Suspense> */}
    </section>
  );
}


