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
                    <div className="m">
                        <p>«Ephémère» (FMR) parce que la mode est éphémère mais que le beau est éternel ! Ephémère est un magazine dans l’air du temps, qui joint la mode et les sujets de société, qui fait rêver et voyager tout en vous informant.</p>
                        <br />
                        <p>Magazine à la fois trendy et engagé, ce numéro combine les looks à la mode et un point de vue écologique ; la tendance verte fait le lien entre ces deux piliers.</p>
                        <br />
                        <p>Coté mode, avec une esthétique épurée, minimale et accessible, ce numéro d’Ephémère vous présente trois éditos mode :</p>
                        <ul>
                            <li>- le premier est minimal avec une inspiration futuriste, des looks forts et audacieux </li>
                            <li>- le deuxième est créé avec des méthodes du futur, grâce à des silhouettes créées en post-production mélangeant des styles différents.</li>
                            <li>- le dernier est inspiré de la nature et de l’écologie, avec des looks frais et lumineux.</li>
                        </ul>
                        <br />
                        <p>Ce numéro existe aussi en version print avec encore plus de shootings créatifs.</p>
                        <br />
                        <p>Éphémère vous fait aussi voyager, avec une ouverture au monde.  Ce numéro vous emmène jusqu’à Singapour en quelques articles, des photos, un témoignage et des adresses incontournables.</p>
                        <br />
                        <p>Pour continuer en Asie au-delà de Singapour, la présentation de deux artistes contemporains vous permettent d’explorer l’art asiatique.</p>
                        <br />
                        <p>Avec Ephémère, soyez à la pointe de la culture et de la mode pour être la plus stylée possible tout en restant engagée !</p>
                    </div>
                </Container>
            </Layout>
        </>
    )
}