import React from 'react';
import XMLParser from 'react-xml-parser';

import xmlData from '../data/ab';

function AddressBookTable(props) {
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
    <div className="app">
      <div className="searchArea">
        Search: <input type="text" onChange={search} onKeyDown={handleKeyDown} />
      </div>
      <table>
      <tbody>
        <tr>
          <th>Customer Id</th>
          <th>Company Name</th>
          <th>Contact Name</th>
          <th>Contact Title</th>
          <th>Address</th>
          <th>City</th>
          <th>Email</th>
          <th>Postal Code</th>
          <th>Country</th>
          <th>Phone</th>
          <th>Fax</th>
        </tr>
        {contacts.map((details, key) => {
          return (
            <tr key={key}>
              <td>{details.CustomerID}</td>
              <td>{details.CompanyName}</td>
              <td>{details.ContactName}</td>
              <td>{details.ContactTitle}</td>
              <td>{details.Address}</td>
              <td>{details.City}</td>
              <td>{details.Email}</td>
              <td>{details.PostalCode}</td>
              <td>{details.Country}</td>
              <td>{details.Phone}</td>
              <td>{details.Fax}</td>
            </tr>
          )
        })}
      </tbody>
      </table>
    </div>
  );
}

export default AddressBookTable;
