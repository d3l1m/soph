import React, { useState, useEffect } from 'react';

const Barsss = () => {
  const imageStyles = {
    width: '5%',
    height: '5%',
  };
  const textStyle = {
    color: 'gray',
    fontSize: '20px',
  };
  const textStyleemail = {
    fontSize: '30px',
    color: 'solid black',
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const selectedImageStyle = {
    borderTop: '2px solid green',
  };
  const [linkContent, setLinkContent] = useState('My name is');
  const [buttonContent, setButtonContent] = useState({
    padlock: 'Loading...',
    location: 'Loading...',
    mail: 'Loading...',
    files: 'Loading...',
    telephone: 'Loading...',
    user: 'Loading...',
  });
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };
  const fetchDataFromAPI = () => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        const randomUserData = data.results[0];
        const { name, location, email, dob, phone, login } = randomUserData;
        setButtonContent({
          password: login.password,
          address: `${location.street.number} ${location.street.name}, ${location.city}`,
          mail: email,
          birthday: formatDate(dob.date),
          telephone: phone,
          name: `${name.first} ${name.last}`,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    
    fetchDataFromAPI();
  }, []); 

  const handleImageClick = (imageId) => {
    setSelectedImage(imageId);

    const newLinkContent = `My ${imageId} is`;
    setLinkContent(newLinkContent);
  };

  return (
    <div className="bar-container">
      <a style={textStyle}>{linkContent}</a>
      <div><a style={textStyleemail}>{buttonContent[selectedImage]}</a></div>
      
      <div className="image-row">
      <img
          src={require('./pngs/user.png')}
          alt="logo"
          style={selectedImage === 'name' ? { ...imageStyles, ...selectedImageStyle } : imageStyles}
          onClick={() => handleImageClick('name')}
        />
        <img
          src={require('./pngs/mail.png')}
          alt="logo"
          style={selectedImage === 'mail' ? { ...imageStyles, ...selectedImageStyle } : imageStyles}
          onClick={() => handleImageClick('mail')}
        />
         <img
          src={require('./pngs/files.png')}
          alt="logo"
          style={selectedImage === 'birthday' ? { ...imageStyles, ...selectedImageStyle } : imageStyles}
          onClick={() => handleImageClick('birthday')}
        />
        <img
          src={require('./pngs/location.png')}
          alt="logo"
          style={selectedImage === 'address' ? { ...imageStyles, ...selectedImageStyle } : imageStyles}
          onClick={() => handleImageClick('address')}
        />
         <img
          src={require('./pngs/telephone.png')}
          alt="logo"
          style={selectedImage === 'telephone' ? { ...imageStyles, ...selectedImageStyle } : imageStyles}
          onClick={() => handleImageClick('telephone')}
        />
        <img
          src={require('./pngs/padlock.png')}
          alt="logo"
          style={selectedImage === 'password' ? { ...imageStyles, ...selectedImageStyle } : imageStyles}
          onClick={() => handleImageClick('password')}
        />

       
      </div>

    </div>
  );
};

export default Barsss;
