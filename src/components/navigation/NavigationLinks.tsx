
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DesktopNavigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/" className="text-school-primary hover:text-school-secondary font-medium transition-colors px-3 py-2">
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-school-primary hover:text-school-secondary">About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium">About Our School</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/about#history" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium">History</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/academics" className="text-school-primary hover:text-school-secondary font-medium transition-colors px-3 py-2">
            Academics
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/admissions" className="text-school-primary hover:text-school-secondary font-medium transition-colors px-3 py-2">
            Admissions
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/gallery" className="text-school-primary hover:text-school-secondary font-medium transition-colors px-3 py-2">
            Gallery
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/news" className="text-school-primary hover:text-school-secondary font-medium transition-colors px-3 py-2">
            News
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/contact" className="text-school-primary hover:text-school-secondary font-medium transition-colors px-3 py-2">
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
