import {React,useState} from 'react'


import ImageData from './components/ImageData';




function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
    
      
     



<ImageData  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

    </>
  )
}

export default App
