// src/components/Banner.jsx
const Banner = () => {
  return (
    <div className='w-full overflow-hidden'>
      <img
        src='/Imagenes/bannerhome.webp'
        alt='Imagen principal'
        className='w-full h-48 md:h-64 lg:h-[500px] object-cover shadow-md'
      />
    </div>
  );
};

export default Banner;
