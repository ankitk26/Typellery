import axios from "axios";
import React, { createContext, useState } from "react";

export const ImageContext = createContext<ImageContextInterface | null>(null);

const ImageProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [images, setImages] = useState<Images>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState<Image | null>(null);

  const itemsPerPage: number = 20;
  const config = {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
    },
  };
  const BASE_URL = "https://api.unsplash.com";

  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${BASE_URL}/photos?per_page=${itemsPerPage}&page=${currentPage}`,
        config
      );
      setImages(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${BASE_URL}/search/photos?query=${search}&per_page=${itemsPerPage}&page=${currentPage}`,
        config
      );
      setImages(res.data.results);
      setTotalPages(res.data.total_pages);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchImageById = async (id: string) => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/photos/${id}`, config);
      setCurrent(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const clearCurrent = () => {
    setCurrent(null);
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        totalPages,
        loading,
        current,
        search,
        itemsPerPage,
        currentPage,
        fetchImages,
        fetchSearchResults,
        fetchImageById,
        setCurrentPage,
        setSearch,
        clearCurrent,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
