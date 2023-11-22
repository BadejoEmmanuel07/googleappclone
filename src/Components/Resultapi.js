import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Error from "./Error";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ResultsPage = (handleSearch) => {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("search");

  const key = "AIzaSyABnMpez7GOaXCJAlqBLKo-C4DWobuEU8k";
  const engineId = "263f002ac53ee4f14";
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const FetchSearch = async (inputValue) => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${engineId}&q=${inputValue}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.status === 429)
        throw new Error(
          "Ooops! 😢 Search rate Exceeded \n You are seeing this because Google only allows 100 queries per day."
        );
      if (response.status === 400)
        throw new Error(
          "Ooops! 😢  Results not found \n  Try searching for a different thing."
        );
      const data = await response.json();
      console.log("Data from API:", data);
      setData(data.items);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchSearch(search);
  }, [search]);

  console.log("Data in component state:", data);

  return (
    <div className="container mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 mt-5">
      {loading ? (
        <div className="load">
          <HashLoader />
        </div>
      ) : error ? (
        <Error message={error} />
      ) : data ? (
        <div>
          <Header handleSearch={handleSearch} search={search} />
          {data && data.length > 0
            ? data.map((result, index) => (
                <div key={index} className="max-w-xl mb-8">
                  <div className="search-card p-4 border rounded-lg shadow-md hover:shadow-lg transition">
                    <div className="group">
                      <h3 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                        <a href={result.link}>{result.title}</a>
                      </h3>
                      <h6>
                        <a href={result.link}>{result.displayLink}</a>
                      </h6>
                    </div>
                    <p className="mt-2 line-clamp-2">{result.snippet}</p>
                    

                  </div>
                </div>
              ))
            : null}
        </div>
      ) : null}

      <Footer />
    </div>
  );
};

export default ResultsPage;
