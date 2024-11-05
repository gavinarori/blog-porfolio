"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LoginForm } from "@/components/login-form"
import { useSession } from 'next-auth/react';;
import { ModeToggle } from "./ui/mode-toggle";
import { POSTS } from "@/lib/constants";


export function MainNav({ className }: { className?: string }) {
  const { data: session } = useSession(); 
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between pt-10 z-50",
        className
      )}
    >
      <Link href={"/"}>
        <div className="flex items-center justify-between w-32">
          <p>John Paul</p>
        </div>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/all" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blogs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4 justify-between w-20">
        <ModeToggle />
        <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline" >
          {session ? `${session.user?.email}` : "Admin"}
      </Button>
      </DialogTrigger>
      <DialogContent >  
      <LoginForm />  
      </DialogContent>
    </Dialog>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
