import React from 'react'
import Footer from '../components/Footer.js';
import Header from "../components/Header.js";
import { useRouter } from 'next/dist/client/router';
import { format } from "date-fns";
import ListingCard from '../components/ListingCard.js';

function Search({ searchResults }) {
const router = useRouter();

console.log(searchResults);

//ES6 Destructuring
const { location, startDate, endDate, noOfGuests} = router.query;
const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
const range = `${formattedStartDate} - ${formattedEndDate}`;


  return (
    <div className='h-screen'>
       <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>

       <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
            <p className='text-xs'>300+ stay - {range} - for {noOfGuests} number of guests</p>
            <h1 className='text-3xl font-semibold mt-2 mb-6'>Stay in {location}</h1>
            <div className='hidden lg:inline-flex  mb-5 space-x-3  text-gray-800 whitespace-nowrap '>
                <p className='button'>Cancellation Flexibility</p>
                <p className='button'>Type of place</p>
                <p className='button'>Price</p>
                <p className='button'>Rooms and Beds</p>
                <p className='button'>More Filters</p>
            </div>

            <div className='flex flex-col'>
            {searchResults.map(({ img, location, title, description, 
            star, price, total })=> (
            <ListingCard 
              key={img}
              img={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total} 
               />
              )
            )}
            </div>
        </section>
         
       </main>

       
       <Footer/>
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").
    then(res => res.json());

    return{
      props: {
        searchResults,
      }
    }
}