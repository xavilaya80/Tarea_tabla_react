import React, { useState, useEffect } from 'react';

const ProductTable = () => {
  // 1. Estado para guardar el arreglo de productos
  const [products, setProducts] = useState([]);

  // 2. Efecto para hacer el fetch una sola vez al montar el componente
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        // 3. Guardar el arreglo de productos en el estado
        setProducts(data);
      })
      .catch((error) => console.error("Error al obtener los productos:", error));
  }, []); // El arreglo vacío [] es fundamental para que corra solo una vez

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Lista de Productos</h2>
      
      {/* 4. Renderizar la tabla */}
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f6f7f9' }}>
            <th style={{ padding: '10px' }}>Título</th>
            <th style={{ padding: '10px' }}>Precio</th>
            <th style={{ padding: '10px' }}>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {/* 6. Recorrer el arreglo con .map() */}
          {products.map((product) => (
            // Uso de la propiedad key con el id único de cada producto
            <tr key={product.id}>
              {/* 5. Extraer y mostrar las columnas solicitadas */}
              <td style={{ padding: '10px' }}>{product.title}</td>
              <td style={{ padding: '10px' }}>${product.price}</td>
              <td style={{ padding: '10px' }}>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;