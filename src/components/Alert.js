import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

function Alert({ show, type, title, content }) {
  const [visible, setVisible] = useState(false);
  const visibilityHandler = () => setVisible(false);

  useEffect(() => {
    show ? setVisible(true) : setVisible(false)
  }, [show])

  return visible ? (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`w-full mb-2 rounded-md shadow p-5 relative ${typeDetermine(type)}`}
    >
      <strong className="text text-opacity-75 dark:text-opacity-100">{title}</strong>
      <p className="text text-opacity-75 dark:text-opacity-100">{content}</p>
      <button
        type="button"
        onClick={visibilityHandler}
        aria-label="Close"
        className="absolute right-0 top-0 p-3"
      >
        <MdClose className="fill-current text-black dark:text-white" />
      </button>
    </motion.div>
  ) : (
    <React.Fragment />
  )
}

// Determine what type the alert component would look like
const typeDetermine = (type) => {
  switch (type) {
    case "success":
      return "bg-green-400";
    case "danger":
      return "bg-red-400";
    case "warning":
      return "bg-yellow-400";
    case "info":
      return "bg-blue-300";
    default:
      return "bg-gray-400";
  }
}

Alert.defaultProps = {
  show: false,
  title: "Title",
  content: "This is a content"
}

Alert.propTypes = {
  show: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
}

export default Alert
