import Head from "next/head";

export default function Metatags({
    title = 'Next.js Firebase Tutorial Project'
    , description = 'A guide to next.js with firebase by Fireship.io'
    , image = 'https://fireship.io/courses/react-next-firebase/img/featured.png'
}) {
    return (
        <Head>
            <title>{title}</title>

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
    );
}