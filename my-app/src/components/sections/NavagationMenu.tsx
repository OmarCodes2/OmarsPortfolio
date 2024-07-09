"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { 
    NavigationMenu, 
    NavigationMenuList, 
    NavigationMenuItem, 
    NavigationMenuTrigger, 
    NavigationMenuLink, 
    NavigationMenuIndicator 
  } from "../ui/navigation-menu";
  import { Toggle } from "../ui/toggle";
  import { Sun, Moon } from "lucide-react";
  
  export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
  
    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [isDarkMode]);
  
    const handleThemeToggle = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <nav className="sticky top-0 z-50 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-bold">Omar's Portfolio</div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[hsl(var(--foreground))] focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'} space-y-4 md:space-y-0 md:space-x-4`}>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavigationMenuLink href="#experience">Experience</NavigationMenuLink>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavigationMenuLink href="https://drive.google.com/file/d/1NhBu6JHQtOUEFtI1P9NCvBAcaY63hLgM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Resume
                    </NavigationMenuLink>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavigationMenuLink href="https://www.linkedin.com/in/omarbakr03/" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </NavigationMenuLink>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <NavigationMenuLink href="https://github.com/OmarCodes2" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </NavigationMenuLink>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuIndicator />
            </NavigationMenu>
            <Toggle aria-label="Toggle theme" onClick={handleThemeToggle}>
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Toggle>
          </div>
        </div>
      </nav>
    );
  };
