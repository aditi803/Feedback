import React from 'react'
import './spinner.css';
import FadeLoader from 'react-spinners/FadeLoader';

function Loader() {
  return (
    <div className="loader">
      <FadeLoader
        // size={20}
        color="purple"
      />
  </div>
  )
}

export default Loader;