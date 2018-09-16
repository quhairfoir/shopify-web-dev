import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults.jsx'

function Search ({ghGet, myStars}) {

  console.log(myStars)

  const searchDisplay = myStars ? myStars.data[0].name : ''

  return (
    <section className="searchSection">
      <h2>This will be SEARCH!</h2>
      <div className="searchInput">
        <textarea></textarea>
        <button value="Search" onClick={ghGet}>Search</button>
      </div>
      {searchDisplay}
      <SearchResults />
    </section>
  )
}

Search.propTypes = {
  ghGet: PropTypes.func,
  myStars: PropTypes.oneOfType([
    PropTypes.boolean,
    PropTypes.object
  ])
}

export default Search;