import React from 'react';
import PropTypes from 'prop-types';

function Search ({ghGet}) {

  return (
    <section className="searchSection">
      <h2>This will be SEARCH!</h2>
      <div className="searchInput">
        <textarea></textarea>
        <button value="Search" onClick={ghGet}>Search</button>
      </div>
    </section>
  )
}

Search.propTypes = {
  ghGet: PropTypes.func
}

export default Search;