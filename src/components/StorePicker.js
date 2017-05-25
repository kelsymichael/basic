import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
  
  // constructor(props) {
  //   // creates a react component then adds our own stuff
  //   super(props);
  //   // looks for goToStore method then binds itself to StorePicker
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event){
    // prevent the default behavior of refreshing page
    event.preventDefault();
    console.log('you changed url');
    // first grab the text from the box
    const storeId = this.storeInput.value;
    // second transition from / to /store/:storeid
    // uses html5 push-state and does not reload entire page
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    // eslint-disable-next-line 
  {/* this is how to comment in JSX putting below return will cause err, unless wrapped in elem */}
    return(
      <div>
        <h1>order total</h1>
        <form className='store-selector' onSubmit={this.goToStore.bind(this)}>
          <h2>please enter a store</h2>
          <input type="text" required placeholder='StoreName' defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
          <button type='submit'>visit store 👉️ </button>
        </form>
      </div>
    )
  }
}

// storepicker is expecting a router to be made avail to it
// make the router avail to parent
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;