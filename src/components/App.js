// create your App component here

import React, { useState, useEffect } from "react";

function App(){
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState(null)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then((data)=>{
            setImages(data)
            setIsLoaded(true);
        })
 
}, [])

console.log(images)

if(!isLoaded) return <p>"Loading...""
</p>

    return(
        <div>
            <img src={images.message} alt="A Random Dog"></img>
        </div>
    )
}

export default App