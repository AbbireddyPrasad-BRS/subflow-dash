import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Settings } from 'lucide-react';
import {
  Navbar as NavbarWrapper,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Plans', link: '/plans' },
    { name: 'Dashboard', link: '/dashboard' },
  ];

  return (
    <NavbarWrapper>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <Link to="/login">
            <NavbarButton variant="secondary">
              <User className="w-4 h-4 mr-2" />
              Login
            </NavbarButton>
          </Link>
          <Link to="/admin">
            <NavbarButton variant="secondary">
              <Settings className="w-4 h-4 mr-2" />
              Admin
            </NavbarButton>
          </Link>
          <Link to="/signup">
            <NavbarButton variant="primary">Get Started</NavbarButton>
          </Link>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-lg transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-glass/50"
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <div className="flex w-full flex-col gap-4 px-4 pt-4 border-t border-glass-border/50">
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <NavbarButton
                variant="secondary"
                className="w-full justify-start"
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </NavbarButton>
            </Link>
            <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)}>
              <NavbarButton
                variant="secondary"
                className="w-full justify-start"
              >
                <Settings className="w-4 h-4 mr-2" />
                Admin
              </NavbarButton>
            </Link>
            <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
              <NavbarButton
                variant="primary"
                className="w-full"
              >
                Get Started
              </NavbarButton>
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </NavbarWrapper>
  );
};

export default Navbar;