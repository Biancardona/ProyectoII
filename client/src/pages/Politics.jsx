import politics from '../mocks/politics.json';

const Politics = () => {
  const { qualityPolicies, privacyPolicy } = politics;
  return (
    <div className='max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8'>
      <div className='bg-white shadow-md rounded-2xl p-6 border border-indigo-100 hover:shadow-xl transition'>
        <h2 className='text-2xl font-bold text-indigo-600 mb-4'>
          {' '}
          {qualityPolicies.title}
        </h2>
        <p className='text-gray-700 text-center max-w-2xl mx-auto'>
          {qualityPolicies.content}
        </p>
      </div>
      <div className='bg-white shadow-md rounded-2xl p-6 border border-pink-100 hover:shadow-xl transition'>
        <h2 className='text-2xl font-bold text-pink-600 mb-4'>
          {' '}
          {privacyPolicy.title}
        </h2>
        <p className='text-gray-700 text-center max-w-2xl mx-auto'>
          {privacyPolicy.content}
        </p>
      </div>
    </div>
  );
};

export default Politics;
