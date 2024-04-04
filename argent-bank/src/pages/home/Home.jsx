// Home page component

import Hero from '../../components/hero/Hero';
import Feature from '../../components/feature/Feature';
import features from '../../data/features';

const Home = () => {

    const featuresData = features.features;

    return (
        <main>
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {featuresData.map((feature, index) => (
                <Feature
                key={"feature"+index}
                paragraph={feature.paragraph}
                image={feature.image}
                title={feature.title}
                alt={feature.alt}
                />
                ))}
            </section>
        </main>
    );
};

export default Home;