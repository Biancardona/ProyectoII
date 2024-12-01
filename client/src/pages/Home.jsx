import Products from '../components/Products';
import products from '../mocks/products';
const Home = () => {
  return (
    <div>
      <Products products={products.products} />
    </div>
  );
};

export default Home;
