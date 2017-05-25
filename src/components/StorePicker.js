import React from 'react';

class StorePicker extends React.Component{
  render() {
    // eslint-disable-next-line 
  {/* this is how to comment in JSX putting below return will cause err, unless wrapped in elem */}
    return(
      <div>
        <h1>order total</h1>
        <form className='store-selector'>
          <h2>please enter a store</h2>
          <input type="text" required placeholder='StoreName' />
          <button type='submit'>visit store 👉️ </button>
        </form>
      </div>
    )
  }
}

export default StorePicker;