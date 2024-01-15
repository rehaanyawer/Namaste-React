const Contact = () => {
  return (
    <div className=' w-6/12 text-center m-auto flex flex-col'>
      <h1>Contact Us</h1>

      <form className='m-auto w-2/5 flex flex-col'>
        <input
          className='border border-gray-400 p-2 m-2 rounded-xl'
          type='text'
          placeholder='Username'
          name='username'
        />
        <input
          className='border border-gray-400 p-2 m-2 rounded-xl'
          type='text'
          placeholder='Password'
          name='password'
        />
        <button className='bg-slate-200 m-2 p-2 text-green-600 rounded-xl hover:bg-slate-300'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
