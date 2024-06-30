const VerticalScrollBar = ({ children,className }) => {
  return (
    <div className={`flex w-10/12  overflow-x-scroll scroll-smooth  ${className}`}>
      {children}
    </div>
  );
};

export default VerticalScrollBar;
