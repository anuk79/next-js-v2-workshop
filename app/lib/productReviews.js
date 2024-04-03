export const ProductReviews = async () => {
    const reviews = await new Promise((resolve) => setTimeout(() => {
        resolve([{
            id: 1,
            text: 'Review one'
        },
        {
            id: 2,
            text: 'Review two'
        }]);
    }, 4000));

    return (
        <section className="product-reviews">
            <h2>Product reviews:</h2>
            {reviews.map(review => <p key={review.id}>{review.text}</p>)}
        </section>
    );
};