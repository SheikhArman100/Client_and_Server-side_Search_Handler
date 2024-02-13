

const UserCardSkeleton = () => {
    return (
      <div className='relative card max-w-[22rem] bg-base-100 shadow-xl py-6 px-10 border"'>
        <div className="flex flex-col items-center gap-x-3">
          <div className="w-20 h-20 rounded-full skeleton" />
          <div className="flex flex-col items-center gap-y-2 mt-3">
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-40"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between mt-4 gap-y-2">
        <div className="skeleton h-6 w-60"></div>
        <div className="skeleton h-6 w-44"></div>
  
        </div>
      </div>
    );
  };
  
  export default UserCardSkeleton;
  