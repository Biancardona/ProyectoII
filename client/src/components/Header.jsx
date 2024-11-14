import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='py-10 bg-indigo-600'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
        <h1 className='font-bold text-2xl text-indigo-200 text-center'>
          Mi tienda en <spam className='text-white'> Linea </spam>
        </h1>
        <nav className='flex flex-col items-center lg:flex-row mt-5 lg:mt-0 gap-4'>
          <Link className='text-white uppercase' to='/'>
            {' '}
            Categorias
          </Link>
          <Link className='text-white uppercase' to='/'>
            {' '}
            Ofertas
          </Link>
          <Link className='text-white uppercase' to='/register'>
            {' '}
            Crear Cuenta{' '}
          </Link>
          <button type='button' className='text-white uppercase'>
            {' '}
            Iniciar Sesion
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
