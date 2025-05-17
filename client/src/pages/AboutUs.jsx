import storeInfo from '../mocks/storeInfo.json';

const AboutUs = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold text-center text-indigo-600 mb-8'>
        ¿Quiénes Somos?
      </h1>

      <p className='text-lg text-gray-700 mb-6'>
        En <strong>TeeLab</strong>, creemos en la moda como una forma de
        expresión única. Desde nuestros inicios, nos hemos comprometido a
        ofrecer ropa que no solo luzca bien, sino que también represente
        autenticidad y estilo personal.
      </p>

      <p className='text-lg text-gray-700 mb-6'>
        Fundada por un equipo apasionado por el diseño y la cultura urbana,
        nuestra misión es brindar productos de alta calidad, con un enfoque en
        la sostenibilidad y producción responsable.
      </p>

      <p className='text-lg text-gray-700 mb-6'>
        Cada prenda es pensada cuidadosamente para adaptarse a un estilo de vida
        moderno, versátil y en constante movimiento. Trabajamos con artistas
        locales, diseñadores independientes y proveedores que comparten nuestros
        valores.
      </p>

      <p className='text-lg text-gray-700'>
        Gracias por ser parte de nuestra comunidad. ¡Esto apenas comienza!
      </p>

      <div className='mt-16 border-t pt-10'>
        <h2 className='text-2xl font-bold text-indigo-600 mb-4 text-center'>
          Nuestra Tienda Física
        </h2>

        <p className='text-gray-700 text-center mb-2'>
          {storeInfo.physicalStore.address}, {storeInfo.physicalStore.city},{' '}
          {storeInfo.physicalStore.state}, {storeInfo.physicalStore.zipCode}
        </p>
        <p className='text-gray-700 text-center mb-2'>
          Tel: {storeInfo.physicalStore.phone}
        </p>
        <p className='text-gray-700 text-center mb-6'>
          Horarios: {storeInfo.physicalStore.hours}
        </p>

        <div className='w-full h-64 mb-6'>
          <iframe
            title='Ubicación de la tienda'
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${storeInfo.physicalStore.address}, ${storeInfo.physicalStore.city}`
            )}&output=embed`}
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
