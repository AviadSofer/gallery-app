const Loading: React.FC = () => {
  const style =
    "mx-auto my-1 h-[50px] w-[50px] border-[4px] border-t-[4px] border-white animate-loading-spin rounded-full border-t-transparent duration-100 ease-in-out";

  return <div className={style} />;
};

export default Loading;
