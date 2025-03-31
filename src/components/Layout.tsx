
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSupabaseAuth } from "@/hooks/use-supabase-auth";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { user } = useSupabaseAuth();
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className={`flex-grow ${isMobile ? 'pt-14' : 'pt-16'}`}>
        <div className="w-full overflow-x-hidden">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
