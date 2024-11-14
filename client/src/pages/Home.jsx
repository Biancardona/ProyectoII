import Header from '../components/Header';
import Products from '../components/Products';
import products from '../mocks/products';
const Home = () => {
  return (
    <div>
      <Header />
      <Products products={products.products} />
    </div>
  );
};

export default Home;
