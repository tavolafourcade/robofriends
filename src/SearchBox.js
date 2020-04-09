import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='tc'>
            <input className='tc pa3 ba b--green bg-lightest-blue' 
            type='search' 
            placeholder='Search robots'
            onChange = {searchChange} />
        </div>
        
    );
}

export default SearchBox;