import { NavBar } from "./_components/navbar";

const BrowseLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <>
      <NavBar />
      <div className="flex  h-full pt-20">
      {children}
    
    
      </div>
      </>
    );
  };

  export default BrowseLayout;