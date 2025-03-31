
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/PageHeader";
import { useSupabaseAuth } from "@/hooks/use-supabase-auth";
import { useIsMobile } from "@/hooks/use-mobile";

const Profile = () => {
  const { toast } = useToast();
  const { user, signOut } = useSupabaseAuth();
  const [isEditing, setIsEditing] = useState(false);
  const isMobile = useIsMobile();
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (!user) return;

    // Initialize profile with user data
    const userNames = user.name?.split(" ") || ["", ""];
    setProfile({
      firstName: userNames[0] || "",
      lastName: userNames.slice(1).join(" ") || "",
      email: user.email || "",
    });
  }, [user]);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update the user's profile in the database
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
    setIsEditing(false);
  };

  const handleLogout = async () => {
    await signOut();
  };

  if (!user) return null;

  return (
    <div>
      <PageHeader 
        title="My Profile" 
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Profile" }
        ]} 
      />
      
      <div className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Profile Sidebar */}
              <div className="w-full md:w-1/3">
                <Card>
                  <CardHeader className="text-center">
                    <Avatar className="w-20 h-20 md:w-24 md:h-24 mx-auto">
                      <AvatarFallback className="text-xl md:text-2xl bg-school-primary text-white">
                        {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="mt-4 text-lg md:text-xl">{user.name}</CardTitle>
                    <CardDescription className="text-sm break-words">{user.email}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button onClick={handleLogout} variant="outline" className="w-full border-school-primary text-school-primary">
                      Logout
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Main Content */}
              <div className="w-full md:w-2/3">
                <Tabs defaultValue="profile" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="applications">My Applications</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="profile">
                    <Card>
                      <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>
                          Manage your personal information and account settings.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {isEditing ? (
                          <form onSubmit={handleProfileUpdate}>
                            <div className="grid gap-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="firstName">First Name</Label>
                                  <Input 
                                    id="firstName"
                                    value={profile.firstName}
                                    onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="lastName">Last Name</Label>
                                  <Input 
                                    id="lastName"
                                    value={profile.lastName}
                                    onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                  id="email" 
                                  type="email" 
                                  value={profile.email}
                                  readOnly
                                  disabled
                                />
                              </div>
                              <div className="flex justify-end space-x-2">
                                <Button variant="outline" type="button" onClick={() => setIsEditing(false)}>
                                  Cancel
                                </Button>
                                <Button className="bg-school-primary" type="submit">
                                  Save Changes
                                </Button>
                              </div>
                            </div>
                          </form>
                        ) : (
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h3 className="text-sm font-medium text-gray-500">First Name</h3>
                                <p className="mt-1">{profile.firstName}</p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-gray-500">Last Name</h3>
                                <p className="mt-1">{profile.lastName}</p>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-gray-500">Email</h3>
                              <p className="mt-1">{profile.email}</p>
                            </div>
                            <div className="flex justify-end">
                              <Button 
                                onClick={() => setIsEditing(true)}
                                className="bg-school-primary"
                              >
                                Edit Profile
                              </Button>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="applications">
                    <Card>
                      <CardHeader>
                        <CardTitle>My Applications</CardTitle>
                        <CardDescription>
                          View and manage your submitted applications.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-md border">
                          <div className="p-6 md:p-8 text-center">
                            <h3 className="text-base md:text-lg font-medium">No applications found</h3>
                            <p className="mt-1 text-sm text-gray-500">
                              You haven't submitted any applications yet.
                            </p>
                            <Button 
                              className="mt-4 bg-school-primary"
                              onClick={() => window.location.href = "/apply"}
                            >
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
