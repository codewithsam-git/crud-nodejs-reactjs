import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Home() {

  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5555/books")
      .then((res) => {         
        return res.json();         
      })
      .then((data) => {
        console.log("Fetched book and price details:", data.data);
        setBookData(data.data);
      })
      .catch((err) => {
        console.log("Failed to fetch books:", err);
      });
  }, []);


  return (
    <div className=''>
      {/* <h1>Home1</h1> */}
      {bookData.map((book, index) => (
        <li key={index}>
          {book.name} - {book.price}
        </li>
      ))}
    </div>
  );
}

export default Home;
