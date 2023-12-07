import React from 'react';
import Formfields from './Formfields';


const App = () => {
  // Here, you can make a fetch request to your server endpoint
  // Example:
  // fetch('http://localhost:3000/api/register', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(formData),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log('Server Response:', data);
  //   })
  //   .catch((error) => console.error('Error submitting form:', error));

  return (
    <Formfields/>
  );
};

export default App;
