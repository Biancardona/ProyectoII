import { AddToCartIcon } from './Icons';

const Products = ({ products }) => {
  return (
    <>
      {products.length ? (
        <>
          <h2 className='text-3xl font-bold text-center'>
            Listado de Productos{' '}
          </h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <div>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
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
          </ul>
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
