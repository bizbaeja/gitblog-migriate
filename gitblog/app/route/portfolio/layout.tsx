
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
      <div className="mt-10 mb-10 flex justify-center pt-20">
      {children}
      </div>
      </>
    );
  };

  export default CreatorLayout;