
import { NavBar } from "./_components/navbar";

interface CreatorLayoutProps {
    params: { username: string };
    children: React.ReactNode;
  };

const CreatorLayout = ({
    params,
    children,
  }: CreatorLayoutProps) => {
    return (
      <>
      <NavBar />
      <div className="flex  h-full pt-20">
      {children}
      </div>
      </>
    );
  };

  export default CreatorLayout;