import { Menu, Moon, Sparkles, Sun, X } from "lucide-react";

function Navbar({
  links,
  quickLinks,
  isMenuOpen,
  onToggleMenu,
  onCloseMenu,
  theme,
  onToggleTheme,
}) {
  return (
    <header className="site-header">
      <nav className="navbar container">
        <a href="#home" className="logo" onClick={onCloseMenu}>
          <Sparkles size={18} />
          <span>Michael Alula</span>
        </a>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={onCloseMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="nav-utilities">
            {quickLinks.map((item) => {
              const QuickIcon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon-btn"
                  aria-label={item.label}
                  title={item.label}
                >
                  <QuickIcon size={16} />
                </a>
              );
            })}

            <button
              className="theme-toggle nav-icon-btn"
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle dark and light mode"
              title="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={onToggleMenu}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
