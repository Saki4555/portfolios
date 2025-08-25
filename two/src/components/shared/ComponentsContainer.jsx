const ComponentsContainer = ({children}) => {
  return (
    <div>
      <div className="container mx-auto px-8 lg:px-16">
        {children}
      </div>
    </div>
  );
};

export default ComponentsContainer;
