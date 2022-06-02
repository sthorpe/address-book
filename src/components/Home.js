import React from 'react';

function Home(props) {
  return (
    <div>
      <center style={{ paddingTop: '140px'}}>
      <h1>Address Book Test</h1>
      Welcome! Please have a look at the two pages you requested.<br />
      <br />
      1. <a href="/address-book-table">AddressBookTable View</a><br />
      <br />
      2. <a href="/address-book-card">AddressBookCard View</a>
      </center>
    </div>
  );
}

export default Home;
