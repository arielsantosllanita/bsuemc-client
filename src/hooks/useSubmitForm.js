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
  useFetch('/', 'GET');
  // Memoize each value to prevent infinite loop to useEffect hook
  const source = useMemo(() => (axios.CancelToken.source()), []);
  const initialState = useMemo(() => ({
    loading: false,
    response: null,
    failure: null,
    toggleAlert: false
  }), []);
  // State of the form being sent
  const [formState, setFormState] = useState(initialState);

  // Function that submits the data (to backend) inside the form
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
    // Elements that holds data
    const formElements = ['INPUT', 'SELECT'];
    // Stores data inside object
    const data = {};
    setFormState({ ...initialState, loading: true });

    // Loop through the form's children and get the data needed
    for (let index = 0; index < e.target.length; index++) {
      if (formElements.some((v) => v === e.target[index].nodeName)) {
        let name = e.target[index].name;
        let value = e.target[index].value;
        if ((name === '' || name == null) || (value === '' || value == null)) continue;
        data[name] = value;
      }
    }
    // If there are files indluded, append them
    submit((includeFiles) ? { ...data, ...includeFiles } : data)
  }

  useEffect(() => {
    return () => {
      setFormState(initialState);
      source.cancel();
    }
  }, [source, initialState])

  return { formState, submitHandler }
}

export default useSubmitForm
