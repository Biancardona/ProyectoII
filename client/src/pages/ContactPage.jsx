const ContactPage = () => {
  return (
    <div id='contacto' className='container mx-auto px-4 mt-10'>
      <h3 className='text-lg font-semibold mb-4'>Formulario de Contacto</h3>
      <form className='space-y-4 max-w-md'>
        <input
          type='text'
          placeholder='Tu nombre'
          className='w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400'
        />
        <input
          type='email'
          placeholder='Tu correo electrónico'
          className='w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400'
        />
        <textarea
          placeholder='Tu mensaje'
          rows='4'
          className='w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400'
        />
        <button
          type='submit'
          className='bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded text-white'
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
