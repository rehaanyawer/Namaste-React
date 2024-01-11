import ItemList from './ItemList';
const RestaurantCategory = ({
  data,
  description,
  setShowIndex,
  showIndex,
  index,
}) => {
  const handleClick = () => {
    {
      index === showIndex ? setShowIndex(-1) : setShowIndex(index);
    }
  };
  return (
    <div className=''>
      <div className='w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-50 '>
        <div
          className='flex justify-between cursor-pointer'
          onClick={handleClick}
        >
          <span className='text-lg font-bold'>
            {data.title}({data.title.length})
          </span>
          <span>{showIndex === index ? '🔽' : '🔼'}</span>
        </div>
        {description && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
