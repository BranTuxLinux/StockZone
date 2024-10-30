import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { User, UserProps } from "@nextui-org/user";
export default function NavbarComponents() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">StockZone</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavItem title="Documentacion" to="/docs" />
        <NavItem title="Precios" to="/pricing" />
        <NavItem title="Blogs" to="/blogs" />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {/* <Link href="#">Login</Link> */}
        </NavbarItem>
        {user ? (
          <UserInter
            email={user.email ?? ""}
            name={user.name ?? ""}
            avatar={user.picture ?? ""}
          />
        ) : (
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/api/auth/callback"
              variant="flat"
            >
              Sign Up
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
interface Props {
  title: string;
  to: string;
}
const NavItem: React.FC<Props> = ({ title, to: url }) => {
  return (
    <NavbarItem isActive>
      <Link href={url} aria-current="page">
        {title}
      </Link>
    </NavbarItem>
  );
};
interface IUser extends UserProps {
  avatar: string;
  email: string;
}

const UserInter: React.FC<IUser> = ({ name, email, avatar }) => {
 
  return (
    <User
      name={name}
      description={email}
      avatarProps={{
        src: avatar,
      }}
    />
  );
};
