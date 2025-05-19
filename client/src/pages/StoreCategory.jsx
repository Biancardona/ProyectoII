import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productsData from '../mocks/products.json';
import Products from '../components/Products';

const StoreCategory = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = productsData.filter((p) => p.category === category);
    setFilteredProducts(filtered);
    window.scrollTo(0, 0); // opcional: vuelve arriba cuando cambias de categoría
  }, [category]); // ← solo se ejecuta cuando cambia la categoría

  const categoryNames = {
    SW: 'Street Wear',
    MT: 'Minimal Tees',
  };

  return (
    <div className='p-6'>
      <h1 className='text-4xl font-bold mb-6 text-center'>
        {categoryNames[category] || 'Productos'}
      </h1>
      <Products products={filteredProducts} />
    </div>
  );
};

export default StoreCategory;
