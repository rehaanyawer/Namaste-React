const Shimmer = () => {
  return (
    <div className='restaurant-list'>
      {Array(9)
        .fill('')
        .map((e, index) => (
          <>
            <div className='wrapper' key={index}>
              <div className='shimmer-card' key={index + 1}></div>
              <div className='sub-shimmer-cards' key={index + 2}></div>
              <div className='sub-shimmer-cards card1' key={index + 3}></div>
              <div className='sub-shimmer-cards card2' key={index + 4}></div>
            </div>
          </>
        ))}
    </div>
  );
};
export default Shimmer;
