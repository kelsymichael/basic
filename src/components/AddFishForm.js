import React from 'react';

class AddFishForm extends React.Component{
  createFish(event){
    event.preventDefault();
    console.log('gonna amke some fish');
    
    // getting the users inputs
    const fish = {
      name: this.name.value,
      price: this.price.value
    }
    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render(){
    return(
      <form ref={(input) => this.fishForm = input}className='fish-edit' onSubmit={(e) => this.createFish(e)}>
        <input ref={(input) => this.name = input}type="text" placeholder='fish name' />
        <input ref={(input) => this.price = input}type="text" placeholder='fish name' />
        <select ref={(input) => this.status = input}>
          <option value="available">Fresh</option>
          <option value="unavilable">Sold Our</option>
        </select>
        <input ref={(input) => this.name = input}type="text" placeholder='fish name' />
        <input type="text" placeholder='fish name' />
        <button type='submit'></button>
      </form>
    )
  }
}

export default AddFishForm;