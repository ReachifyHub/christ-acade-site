
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PageHeader from "@/components/PageHeader";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("login");
  const [isLoading, setIsLoading] = useState(false);
  
  const returnUrl = location.state?.returnUrl || "/";

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    // Check if user is already logged in
    if (localStorage.getItem("user")) {
      navigate(returnUrl);
    }
  }, [navigate, returnUrl]);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple validation
    if (!loginForm.email || !loginForm.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    // Simulate authentication (in a real app, this would call an API)
    setTimeout(() => {
      try {
        // Store user in localStorage (this is just for demo purposes)
        const user = {
          id: "user_" + Date.now(),
          email: loginForm.email,
          name: loginForm.email.split("@")[0], // Just using part of the email as the name
        };
        
        localStorage.setItem("user", JSON.stringify(user));
        
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        
        // Navigate to the return URL (or default to home)
        navigate(returnUrl);
      } catch (error) {
        toast({
          title: "Login Failed",
          description: "There was an error logging in. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple validation
    if (!signupForm.firstName || !signupForm.lastName || !signupForm.email || !signupForm.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    if (signupForm.password !== signupForm.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    // Simulate registration (in a real app, this would call an API)
    setTimeout(() => {
      try {
        // Store user in localStorage (this is just for demo purposes)
        const user = {
          id: "user_" + Date.now(),
          email: signupForm.email,
          name: `${signupForm.firstName} ${signupForm.lastName}`,
        };
        
        localStorage.setItem("user", JSON.stringify(user));
        
        toast({
          title: "Registration Successful",
          description: "Your account has been created.",
        });
        
        // Navigate to the return URL (or default to home)
        navigate(returnUrl);
      } catch (error) {
        toast({
          title: "Registration Failed",
          description: "There was an error creating your account. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div>
      <PageHeader 
        title="Login or Sign Up" 
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Login" }
        ]} 
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="px-6 pt-6">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="login" className="p-6">
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="login-email">Email</Label>
                      <Input 
                        id="login-email" 
                        name="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        value={loginForm.email}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="login-password">Password</Label>
                        <Link to="/forgot-password" className="text-sm text-school-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input 
                        id="login-password" 
                        name="password" 
                        type="password" 
                        placeholder="••••••••" 
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-school-primary hover:bg-school-primary/90"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Log In"}
                    </Button>
                    
                    <div className="text-center text-sm text-gray-500 mt-4">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        className="text-school-primary hover:underline font-medium"
                        onClick={() => setActiveTab("signup")}
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="signup" className="p-6">
                <form onSubmit={handleSignup}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          name="firstName" 
                          placeholder="John" 
                          value={signupForm.firstName}
                          onChange={handleSignupChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          name="lastName" 
                          placeholder="Doe" 
                          value={signupForm.lastName}
                          onChange={handleSignupChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="signup-email">Email</Label>
                      <Input 
                        id="signup-email" 
                        name="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        value={signupForm.email}
                        onChange={handleSignupChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="signup-password">Password</Label>
                      <Input 
                        id="signup-password" 
                        name="password" 
                        type="password" 
                        placeholder="••••••••" 
                        value={signupForm.password}
                        onChange={handleSignupChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        type="password" 
                        placeholder="••••••••" 
                        value={signupForm.confirmPassword}
                        onChange={handleSignupChange}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-school-primary hover:bg-school-primary/90"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                    
                    <div className="text-center text-sm text-gray-500 mt-4">
                      Already have an account?{" "}
                      <button
                        type="button"
                        className="text-school-primary hover:underline font-medium"
                        onClick={() => setActiveTab("login")}
                      >
                        Log in
                      </button>
                    </div>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
