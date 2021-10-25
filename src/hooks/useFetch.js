import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Custom hook for fetching data
 * @param {String} url The relative url of an endpoint
 * @param {String} method The method of the request e.g. 'GET','PUT', 'POST', 'DELETE'. Must be in uppercase.
 */
const useFetch = (url, method) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [isFailure, setIsFailure] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    (async () => {
      try {
        const res = await axios(url, {
          cancelToken: source.token,
          method: method
        })
        setIsLoading(false);
        setResponse(res);
      } catch (err) {
        setIsLoading(false);
        setIsFailure(err.response);
      }
    })()

    return () => {
      source.cancel();
      setIsLoading(false);
    }
  }, [url, method])

  return { isLoading, response, isFailure }
}

export default useFetch;