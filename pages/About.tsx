import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import Header from "../components/header";

export default function About() {
    return (
        <>
        <Layout>
            <Head>
                <title>{`A propos | EPHEMERE`}</title>
            </Head>
            <Container>
                <Header />
                <p>Ephémère (FMR) est un magazine de mode mettant en valeur les sujets d’actualité avec une esthétique épurée, minimale et accessible.</p>
                <br />
                <p>Le magazine présente trois éditos mode :
                    <ul>
                        <li>- La première est minimale avec une inspiration futuriste et des looks forts et audacieux.</li>
                        <li>- Tandis que le deuxième vient directement du futur, avec des silhouettes crées en post-production mélangeant pleins de styles différents.</li>
                        <li>- Alors que le dernier s’inspire de la nature et de l’écologie, avec des looks frais et lumineux.</li>
                    </ul>
                Dans cette version digitale, je vous présente le shooting 3D et je vous invite à acheter le magazine print afin de découvrir les deux autres shootings réalisés.</p>

                <br />
                <p>Journal à la fois trendy, présentant plusieurs inspirations mode, et engagé, avec un point de vue écologique, autour de la tendance verte.</p>
                <br />
                <p>Éphémère vous fait voyager, avec une certaine ouverture au monde.  Je vous fait voyager jusqu’à Singapour en quelques articles, à travers des photos, un témoignage et des adresses incontournables.</p>
                <br />
                <p>Au-delà de Singapour, je vous emmène dans l’art asiatique en vous présentant deux artistes contemporains.</p>
                <br />
                <p>Ce magazine s’inscrit dans l’actualité culturelle tout en étant à la pointe de la mode en vous présentant les tendances de l’année pour être la plus stylée possible. </p>
                <br />
                <p>Ephémère est un magazine dans l’air du temps, qui joint la mode et les sujets de société, qui fait rêver et informe en même temps. </p>
                <br />
                <p>N’oublions jamais que la mode est ephémère mais que le beau est éternel !</p>
            </Container>
        </Layout>
        </>
    )
}