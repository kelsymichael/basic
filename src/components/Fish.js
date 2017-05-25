import React from 'react';

class Fish extends React.Component{
  render(){
    const { details } = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add to order' : 'sold out';
    return (
     <li className='menu-fish'>
       <img src={details.image} alt={details.name} />
       <h3 className="fish-name">{details.name}</h3>
       <p>{details.desc}</p>
       <button disabled={!isAvailable} onClick={() => this.props.addToOrder}>{buttonText}</button>
      </li>
    )
  }
}

export default Fish;