import Link from "next/link";

export default function Custom404() {
    return (
        <main>
            <h1>404 - That page does not exist...</h1>
            <iframe
                src="./lain-avi.gif"
                width="480"
                height="480"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
            ></iframe>
            <Link href="/">
                <button className="btn-blue">Back to Home</button>
            </Link>
        </main>
    );
}