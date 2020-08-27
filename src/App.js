import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';
import Products from './Products';
import Warehouse from './db.json';

import './App.css';

function App(props) {
  const [ category, setCategory ] = useState(0);
  const [ search, setSearch ] = useState('');

  return (
    <div className="container">
      <div className="row float-right">
        <select className="col-4 form-control m-2" onChange={(e) => setCategory(e.target.value)}>
          <option value="0">Categorias...</option>
          {Warehouse.categories.map((category, index) => {
            return <option key={index} value={category.categori_id}>{category.name}</option>
          })}
        </select>
        <input className="col-4 form-control m-2" type="text" placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Disponible</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <Products search={search} category={category} />
        </tbody>
      </Table>
    </div>
  );
}

export default App;
