"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Crown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border/50", className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </nav>
  );
};

export const NavBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hidden md:flex items-center justify-between h-16">
      {children}
    </div>
  );
};

export const NavItems = ({ items }: { items: { name: string; link: string }[] }) => {
  return (
    <div className="flex items-center space-x-8">
      {items.map((item, idx) => (
        <Link
          key={`nav-${idx}`}
          to={item.link}
          className="font-medium transition-all duration-300 hover:text-primary text-muted-foreground"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
        <Crown className="w-5 h-5 text-primary-foreground" />
      </div>
      <span className="font-bold text-xl gradient-text">SubFlow</span>
    </Link>
  );
};

export const NavbarButton = ({ 
  children, 
  variant = "primary", 
  className,
  onClick,
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-lg font-medium transition-all duration-300",
        variant === "primary" 
          ? "btn-hero text-sm" 
          : "text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:hidden">
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between h-16">
      {children}
    </div>
  );
};

export const MobileNavToggle = ({ 
  isOpen, 
  onClick 
}: { 
  isOpen: boolean; 
  onClick: () => void; 
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-glass/50 transition-colors"
    >
      {isOpen ? (
        <X className="w-6 h-6" />
      ) : (
        <Menu className="w-6 h-6" />
      )}
    </button>
  );
};

export const MobileNavMenu = ({ 
  children, 
  isOpen, 
  onClose 
}: { 
  children: React.ReactNode; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="py-4 space-y-4 border-t border-glass-border/50"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};