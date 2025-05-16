import { useParams } from 'react-router-dom';
import productsData from '../mocks/products.json';
import Products from '../components/Products';

const StoreCategory = () => {
  const { category } = useParams();
  const filtered = productsData.filter((p) => p.category === category);

  const categoryNames = {
    SW: 'Street Wear',
    MT: 'Minimal Tees',
  };

  return (
    <div className='p-6'>
      <h1 className='text-4xl font-bold mb-6 text-center'>
        {categoryNames[category] || 'Productos'}
      </h1>
      <Products products={filtered} />
    </div>
  );
};

export default StoreCategory;
