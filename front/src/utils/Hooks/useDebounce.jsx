import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
};


/**
 ********** USAGE 

 import {useDebounce} 
 import {useState, useEffect}

 export const SearchBar = () => {
 const debouncedSearchTerm = useDebounce(searchTerm, 500)
 const [searchTerm, setSerachTerm] = useState("");
 const [result, setResult] = useState([]);

    // Function to fetch search results from API
    async function fetchSearchResults() {
        try{
            const response = await fetch(`api/serach?q=${debouncedSearchTerm}`)
            const data = await response.json()
            setResults(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchSearchResults()
    }, [debouncedSearchTerm])

    return(
        <>
            <input type="text" value={searchTerm} onChage={(event) => setSearchTerm(event.target.value)} 
            placeholder="Search..." />
            <ul>{results.map((result)=>(<li key={crypto.randomUUID()}>{result.name}</li>))}</ul>
        </>
    )
}
 */