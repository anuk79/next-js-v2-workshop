import { cookies } from 'next/headers';

export default function Tweet() {
    const cookieStore = cookies();
    const someCookie = cookieStore.get("someCookie");
    console.log("cookie", someCookie);
    return (
        <section>
            <h2>About</h2>
        </section>
    );
}
