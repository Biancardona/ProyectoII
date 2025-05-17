import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className='py-10 bg-indigo-600'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
        <Link to='/' className='font-bold text-2xl text-indigo-200 text-center'>
          Tee <span className='text-white'>Lab</span>
        </Link>
        <nav className='flex flex-col items-center lg:flex-row mt-5 lg:mt-0 gap-4'>
          <Link className='text-white uppercase' to='/tienda'>
            {' '}
            Tienda
          </Link>
          <div
            className='relative'
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className='uppercase text-white hover:underline'>
              Categorías
            </button>

            <div
              className={`absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50 transition-all duration-150 ease-in-out ${
                showDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <Link
                to='/tienda/SW'
                className='block px-4 py-2 hover:bg-gray-100'
              >
                Street Wear
              </Link>
              <Link
                to='/tienda/MT'
                className='block px-4 py-2 hover:bg-gray-100'
              >
                Minimal Tees
              </Link>
            </div>
          </div>

          <Link className='text-white uppercase' to='/quienes-somos'>
            {' '}
            Quienes somos
          </Link>
          <Link className='text-white uppercase' to='/politicas'>
            {' '}
            Políticas{' '}
          </Link>
          {/*   <button type='button' className='text-white uppercase'>
            {' '}
            Iniciar Sesion
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
