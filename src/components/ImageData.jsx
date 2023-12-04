import React, { useState, useEffect } from "react";
import "./imagedata.css";
import Navbar from "./Navbar";
import Spinner from "./Spinner";


function ImageData({ searchQuery, setSearchQuery }) {
  const [imageData, setImageData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(15);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiKey = "zBMna9tGGoDoR0OGL7ilc7AZfyj04RIeQYIut2NcCFU";
        let apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${currentPage}&per_page=${imagesPerPage}`;

        if (searchQuery) {
          apiUrl = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${searchQuery}&page=${currentPage}&per_page=${imagesPerPage}`;
        }

        const data = await fetch(apiUrl);
        const parsedData = await data.json();
console.log(parsedData)
        if (searchQuery) {
          setImageData(parsedData.results);
        } else {
          setImageData(parsedData);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setError("Error fetching images.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
   
      <Navbar setSearchQuery={setSearchQuery} />
     
      {loading ? <Spinner /> : (
        <div className="container">
          {imageData.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.urls.regular}  />
              <div className="card-title">{item.alt_description}</div>
            </div>
          ))}
        </div>
      )}

      <div className="container d-flex btns">
        <button className="Pbtn" disabled={currentPage === 1} onClick={handlePreviousPage}>
          <i class="ri-arrow-left-s-line"></i>Previous
        </button>
        <button className="Nbtn" onClick={handleNextPage}>
          Next<i class="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </>
  );
}

export default ImageData;
