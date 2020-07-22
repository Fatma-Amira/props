import React from 'react'
import PropTypes from 'prop-types';
import './Table.css';
export default function ProductTable(props) {
    const { name,Category,Price} = props;
    return (
        <div className='product_container'>
          <h1>{name}</h1>
          <h1>{Category}</h1>
          <h1>{Price}</h1>
          </div>
        );
      
}
ProductTable.propTypes ={
  name: PropTypes.string, Category: PropTypes.string, Price: PropTypes.number
}
