const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex  z-50 inset-0  w-full flex-col fixed backdrop-blur-md items-center justify-center py-10">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-3 text-sm text-gray-500">{text}</p>
    </div>
  );
};

export default Loader;
