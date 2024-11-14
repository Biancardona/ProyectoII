import { AddToCartIcon } from './Icons';

const Products = ({ products }) => {
  return (
    <>
      {products.length ? (
        <>
          <h2 className='text-3xl font-bold text-center'>
            Listado de Productos{' '}
          </h2>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> -${product.price}
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))}
        </>
      ) : (
        <>
          <h2 className='text-3xl font-bold text-center'>
            No hay productos disponibles
          </h2>{' '}
        </>
      )}
    </>
  );
};

export default Products;
