import { notFound } from "next/navigation";

function getRandomNumber() {
    return Math.floor(Math.random() * 2);
}

export default function BlogComment({ params }) {
    if (getRandomNumber() === 1) {
        throw Error('Error loading comment.')
    }

    if (parseInt(params.commentId) > 500) {
        notFound();
    }
    return (
        <section>
            <h2>Comment {params.commentId} for Blog {params.slug}</h2>
        </section>
    );
}

// works /blog/1/comments/100
// error /blog/1/comments/600