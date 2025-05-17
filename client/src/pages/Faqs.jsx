const faqs = [
  {
    question: '¿Cuánto tarda el envío?',
    answer:
      'El envío estándar tarda entre 3 a 5 días hábiles. También ofrecemos envíos express que llegan en 24-48 horas.',
  },
  {
    question: '¿Puedo devolver un producto?',
    answer:
      'Sí, tienes hasta 15 días después de recibir tu pedido para solicitar una devolución. El producto debe estar en su empaque original y sin uso.',
  },
  {
    question: '¿Cuáles métodos de pago aceptan?',
    answer:
      'Aceptamos tarjetas de crédito, débito, PayPal y transferencias bancarias.',
  },
  {
    question: '¿Cómo puedo contactar al soporte?',
    answer:
      'Puedes llenar el formulario en la página de contacto o escribirnos a soporte@tumarca.com.',
  },
  {
    question: '¿Hacen envíos internacionales?',
    answer:
      'Por el momento solo realizamos envíos dentro del territorio nacional. Pronto habilitaremos envíos a otros países.',
  },
];

const FaqPage = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold text-center mb-10 text-indigo-600'>
        Preguntas Frecuentes (FAQ)
      </h1>
      <div className='space-y-6'>
        {faqs.map((faq, index) => (
          <div key={index} className='bg-white p-6 rounded shadow'>
            <h3 className='text-lg font-semibold text-gray-800'>
              {faq.question}
            </h3>
            <p className='text-gray-600 mt-2'>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
