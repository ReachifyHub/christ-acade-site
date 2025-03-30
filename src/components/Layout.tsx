
import { ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useSupabaseAuth } from "@/hooks/use-supabase-auth";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { user } = useSupabaseAuth();
  const location = useLocation();
  
  // Remove the authentication bar since we now handle this in the Header
  // and have a dedicated profile page

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
