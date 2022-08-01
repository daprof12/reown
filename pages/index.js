import Head from "next/head";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import LargeCard from "../components/LargeCard.js";
import MediumCard from "../components/MediumCard.js";
import SmallCard from "../components/smallCard.js";
 
export default function Home({exploreData, cardsData}) {
  return (
    <div >
      <Head>
        <title>Airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
        <meta content="hello world" description="we are here" />
      </Head>

      <Header/>
      <Banner/>
      <main className="max-w-7xl mx-auto px-8">
        <section id="explore" className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull data from server -  API endpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard 
              key={img}  
              img={img}
              location={location}
              distance={distance} 
              />
            ))}
            </div>
        </section>

        <section id="liveAnywhere" className="pt-6">
          <h2 className="text-4xl font-semibold pb-8"> Live Anywhere</h2>
          <div className="flex p-3 -ml-3 space-x-4 overflow-scroll scrollbar-hide">
          {cardsData?.map(({img, title})=>(
            <MediumCard
            key={img}
            img={img}
            title={title}
            />
          ))}
          </div>
        </section>
        <section id="largeCard" className="]">
            <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoor"
            description="Wishlist curated by Airbnb"
            buttonText="Get Inspired"
            />
        </section>

      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then(
  (res) => res.json()
  );

  const cardsData = await fetch('https://links.papareact.com/zp1').
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}