import { AddToCartIcon } from './Icons';

const Product = ({ productProp }) => {
  const { thumbnail, title, price } = productProp;

  const handleAddToCart = () => {
    console.log(`${title} agregado al carrito`);
  };
  return (
    <div className='mx-2 my-4 bg-white shadow-md rounded-lg p-4'>
      <div className='flex justify-center mb-4'>
        <img
          src={thumbnail}
          alt={title}
          className='w-full h-auto object-cover rounded-md'
        />
      </div>
      <div className='text-center mb-4'>
        <strong>{title}</strong> -${price}
      </div>
      <div className='flex justify-center'>
        <button>
          <AddToCartIcon />
        </button>
      </div>
    </div>
  );
};

export default Product;
