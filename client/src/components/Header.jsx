import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Cierra el dropdown si haces clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside); // para móviles

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <header className='py-10 bg-indigo-600'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
        <Link to='/' className='font-bold text-2xl text-indigo-200 text-center'>
          Tee <span className='text-white'>Lab</span>
        </Link>
        <nav className='flex flex-col items-center lg:flex-row mt-5 lg:mt-0 gap-4'>
          <Link className='text-white uppercase' to='/tienda'>
            Tienda
          </Link>
          <div
            className='relative'
            ref={dropdownRef}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button
              className='uppercase text-white hover:underline'
              onClick={() => setShowDropdown(!showDropdown)} // Soporte para móviles
            >
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
                onClick={() => setShowDropdown(false)}
              >
                Street Wear
              </Link>
              <Link
                to='/tienda/MT'
                className='block px-4 py-2 hover:bg-gray-100'
                onClick={() => setShowDropdown(false)}
              >
                Minimal Tees
              </Link>
            </div>
          </div>

          <Link className='text-white uppercase' to='/quienes-somos'>
            Quienes somos
          </Link>
          <Link className='text-white uppercase' to='/politicas'>
            Políticas
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
