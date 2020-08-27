import React, { Fragment } from 'react';
import Image from 'react-bootstrap/Image';

import Warehouse from './db.json';

function Products(props) {
  const category = parseInt(props.category);
  const search = props.search;

  return (
    <Fragment>
      { Warehouse.products.map((product, index) => {
        if (category !== 0 && search !== "") { 
          if (product.categories.includes(category) && product.name.includes(search)) {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td><Image src={product.img} thumbnail/></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>1</td>
                <td>{product.available? 'SI' : 'NO'}</td>
                <td>{product.description}</td>
              </tr>
            )  
          }
        }
        else {
          if (category !== 0 || search !== "") {
            if (product.categories.includes(category) || (product.name.includes(search) && search !== "")) {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td><Image src={product.img} thumbnail/></td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>1</td>
                  <td>{product.available? 'SI' : 'NO'}</td>
                  <td>{product.description}</td>
                </tr>
              )  
            }
          }
          else {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td><Image src={product.img} thumbnail/></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>1</td>
                <td>{product.available? 'SI' : 'NO'}</td>
                <td>{product.description}</td>
              </tr>
            )
          }
  
        }
       })
      }
    </Fragment>
  );
}

export default Products;
