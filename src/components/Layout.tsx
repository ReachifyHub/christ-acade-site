
import { ReactNode, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User, LogOut } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

interface UserData {
  id: string;
  name: string;
  email: string;
}

const Layout = ({ children }: LayoutProps) => {
  const [user, setUser] = useState<UserData | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // Check for user on component mount and when location changes
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("applications");
    setUser(null);
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* User Authentication Bar */}
      <div className="bg-school-accent py-2 border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-end items-center">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm">
                <div className="w-8 h-8 rounded-full bg-school-primary flex items-center justify-center text-white mr-2">
                  <User className="w-4 h-4" />
                </div>
                <span>Welcome, {user.name}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-700"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </Button>
              {!location.pathname.includes("/apply") && (
                <Button 
                  size="sm" 
                  className="bg-school-primary hover:bg-school-primary/90"
                  onClick={() => navigate("/apply")}
                >
                  View Applications
                </Button>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-700"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button 
                size="sm" 
                className="bg-school-primary hover:bg-school-primary/90"
                onClick={() => navigate("/login", { state: { returnUrl: "/apply" } })}
              >
                Apply Now
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
