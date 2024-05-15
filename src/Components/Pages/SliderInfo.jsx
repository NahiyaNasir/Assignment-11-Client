/* eslint-disable react/prop-types */


const SliderInfo = ({image}) => {
    return (
        <div>
           <div
      className='w-full bg-center bg-cover h-[650px]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full '>
        <div className='text-left'>
        <h1 className="text-3xl font-semibold text-gray-500 lg:text-4xl">Volunteer Heroes: Making a Difference, <span className="text-blue-400"> One Act of Kindness at a Time</span> </h1>
          <br />
          {/* <button className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
            Post Job & Hire Expert
          </button> */}
        </div>
      </div>
    </div>
        </div>
    );
};

export default SliderInfo;