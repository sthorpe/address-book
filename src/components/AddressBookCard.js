import React from 'react';
import XMLParser from 'react-xml-parser';

import xmlData from '../data/ab';

function AddressBookCard(props) {
  const [contacts, setContacts] = React.useState([]);

  // On page load parse xml
  React.useEffect(() => {
    let tempArray = [];
    const formatData = (data) => {
      const contacts = data.children;
      // Organize the data
      // eslint-disable-next-line
      contacts.map( contact => {
        let contactDetails = {}
        // eslint-disable-next-line
        contact.children.map((details, index) => {
          contactDetails[contact.children[index]?.name] = contact.children[index]?.value;
        })
        tempArray.push(Object.freeze(contactDetails));
      })
      setContacts(tempArray);
    }

    var jsonDataFromXml = new XMLParser().parseFromString(xmlData);
    formatData(jsonDataFromXml);
  }, []);

  const lookup = (e) => {
    let searchKey = e.target.value;
    let results = search(contacts, searchKey)[0];
    setContacts([results]);
  }

  function search(arr, s){
    var matches = [], i, key;
    for ( i = arr.length; i--; )
      for ( key in arr[i] )
        if ( arr[i].hasOwnProperty(key) && arr[i][key].indexOf(s) > -1 )
          matches.push( arr[i] );
    return matches;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      lookup(e);
    }
  };

  return (
    <div>
      <div className="category-name">
        Search: <input type="text" onChange={search} onKeyDown={handleKeyDown} />
      </div>
       <div className="card-category-1">
       {contacts.map((details, key) => {
         return (
           <div className="basic-card basic-card-light" key={key}>
               <div className="card-content">
                   <span className="card-title">{details.ContactName}</span>
                   <p className="card-text">
                     {details.CustomerID}<br />
                     {details.CompanyName}<br />
                     {details.ContactName}<br />
                     {details.ContactTitle}<br />
                     {details.Address}<br />
                     {details.City}<br />
                     {details.Email}<br />
                     {details.PostalCode}<br />
                     {details.Country}<br />
                     {details.Phone}<br />
                     {details.Fax}<br />
                   </p>
               </div>

               <div className="card-link">

               </div>
           </div>
         )
       })}
       </div>
    </div>
  );
}

export default AddressBookCard;
