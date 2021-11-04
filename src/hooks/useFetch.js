import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Custom hook for fetching data
 * @param {String} url The relative url of an endpoint
 * @param {String} method The method of the request e.g. 'GET','PUT', 'POST', 'DELETE'. Must be in uppercase.
 */
const useFetch = (url, method) => {
  const [fetching, setFetching] = useState(true);
  const [response, setResponse] = useState(null);
  const [failed, setFailed] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    (async () => {
      try {
        const res = await axios(url, {
          cancelToken: source.token,
          method: method
        })
        setFetching(false);
        setResponse(res);
      } catch (err) {
        setFetching(false);
        setFailed(err.response);
      }
    })()

    return () => {
      source.cancel();
      setFetching(false);
    }
  }, [url, method])

  return { fetching, response, failed }
}

export default useFetch;