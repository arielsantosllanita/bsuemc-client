import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import useFetch from './useFetch';

/**
 * Custom hook for form submissions
 * @param {String} url Relative url of the backend
 * @param {String} method The method of the request, keep it in uppercase letters for convention
 * @param {Object} includeFiles Files to be added (Optional)
 */
const useSubmitForm = (url, method, includeFiles = null) => {
  // Retrieve csrf token protection from server
  useFetch('/xsrf', 'GET');

  // Memoize each value to prevent infinite loop to useEffect hook
  const source = useMemo(() => (axios.CancelToken.source()), []);
  const initialState = useMemo(() => ({ loading: false, response: null, failure: null, toggleAlert: false }), []);

  // State of the form being sent
  const [formState, setFormState] = useState(initialState);

  // Function that submits the data inside the form (to backend)
  const submit = async (data) => {
    try {
      const response = await axios(url, {
        cancelToken: source.token,
        method: method,
        data: data
      })
      setFormState({ ...initialState, response: response, toggleAlert: true })
    } catch (err) {
      setFormState({ ...initialState, failure: err.response, toggleAlert: true })
    }
  }

  // Function that retrieves data inside the form
  const submitHandler = (e) => {
    e.preventDefault();
    setFormState({ ...initialState, loading: true });
    const neededElements = ['INPUT', 'SELECT'];

    // Get all needed elements from the form and extract the data
    const data = Array.from(e.target).reduce((accumulator, current) => {
      let validElement = neededElements.some(element => element === current.nodeName);
      if (validElement) {
        // Dont accept empty names or values
        if (!current.name || !current.value) return accumulator;
        return { ...accumulator, [current.name]: current.value }
      } else {
        return accumulator
      }
    }, {});

    // If there are files indluded, append them
    submit(includeFiles ? { ...data, ...includeFiles } : data);
  }

  useEffect(() => {
    return () => {
      setFormState(initialState);
      source.cancel();
    }
  }, [source, initialState])

  return [formState, submitHandler]
}

export default useSubmitForm
