
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useSupabaseAuth } from "@/hooks/use-supabase-auth";

type AuthButtonsProps = {
  mobile?: boolean;
  onButtonClick?: () => void;
};

const AuthButtons = ({ mobile = false, onButtonClick }: AuthButtonsProps) => {
  const { user } = useSupabaseAuth();

  if (user) {
    return (
      <Button 
        asChild 
        variant="outline" 
        className={`border-school-primary text-school-primary hover:bg-school-primary hover:text-white ${mobile ? 'w-full' : ''}`}
        onClick={onButtonClick}
      >
        <Link to="/profile">
          <User className="mr-2 h-4 w-4" />
          Profile
        </Link>
      </Button>
    );
  }

  return (
    <>
      <Button 
        asChild 
        variant="outline" 
        className={`border-school-primary text-school-primary hover:bg-school-primary hover:text-white ${mobile ? 'w-full' : ''}`}
        onClick={onButtonClick}
      >
        <Link to="/login">Login</Link>
      </Button>
      <Button 
        asChild 
        className={`bg-school-primary text-white hover:bg-school-primary/90 ${mobile ? 'w-full' : ''}`}
        onClick={onButtonClick}
      >
        <Link to="/apply">Apply Now</Link>
      </Button>
    </>
  );
};

export default AuthButtons;
