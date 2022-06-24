import React, { useState, useEffect } from "react";

function App() {
  const [isLoaded, setIsloaded] = useState(false);
  const [img, setImg] = useState({});

  useEffect(()=> {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((dog) => {
        setIsloaded(true);
        setImg(dog.message);
      });
  }, []);

  if(!isLoaded) return <p>Loading...</p>

  return (
    <div>
      <img src={ img } alt="A Random Dog"/>
    </div>
  );
}

export default App;