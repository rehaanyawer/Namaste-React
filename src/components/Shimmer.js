const Shimmer = () => {
  return (
    <div className='restaurant-list'>
      {Array(9)
        .fill('')
        .map((e, index) => (
          <div className='wrapper' key={`wrapper-${index}`}>
            <div className='shimmer-card' key={`shimmer-card-${index}`}></div>
            <div
              className='sub-shimmer-cards'
              key={`sub-shimmer-cards-${index}`}
            ></div>
            <div
              className='sub-shimmer-cards card1'
              key={`card1-${index}`}
            ></div>
            <div
              className='sub-shimmer-cards card2'
              key={`card2-${index}`}
            ></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
