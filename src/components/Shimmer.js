const Shimmer = () => {
  return (
    <div className='restaurant-list'>
      {Array(9)
        .fill('')
        .map((e, index) => (
          <>
            <div className='wrapper'>
              <div className='shimmer-card'></div>
              <div className='sub-shimmer-cards'></div>
              <div className='sub-shimmer-cards card1'></div>
              <div className='sub-shimmer-cards card2'></div>
            </div>
          </>
        ))}
    </div>
  );
};
export default Shimmer;
