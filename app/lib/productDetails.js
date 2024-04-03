export const ProductDetails = async () => {
    const details = await new Promise((resolve) => setTimeout(() => {
        resolve({
            name: "Google Pixel 7",
            price: 100,
            brand: "pixel",
            color: "green",
        });
    }, 3000));
    return (<section className="product-details">
        <h2>Product: {details?.name}</h2>
        <p>Price: {details?.price}</p>
        <p>Brand: {details?.brand}</p>
    </section>);
  };