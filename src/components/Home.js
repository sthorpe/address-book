import React from 'react';

function Home(props) {
  return (
    <div>
      Welcome! Please have a look at the two pages you requested.

      1. <a href="/address-book-table">AddressBookTable View</a>
      2. <a href="/address-book-card">AddressBookCard View</a>
    </div>
  );
}

export default Home;
