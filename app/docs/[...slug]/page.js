export default function DocumentationPage({ params }) {
    return (
        <section>
            <h2>Docs</h2>
            {
                params.slug.map(id => (
                    <p key={id}>{id}</p>
                ))
            }
        </section>
    );
}

// comments for extra info:
// example: /docs/app-router/routing/dynamic-routes/nested-dynamic-routes
// [...slug] is catches all route inside docs, but /docs will still give 404 if we do not have another page.js for it,
// instead we can also use optional catch-all route, [[...slug]]