import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const footerLinks = {
    "Product": [
      { name: "Browse Apps", href: "/browse" },
      { name: "Categories", href: "/categories" },
      { name: "Featured", href: "/featured" },
      { name: "New Releases", href: "/new" }
    ],
    "For Vendors": [
      { name: "Sell Your App", href: "/vendor/register" },
      { name: "Vendor Dashboard", href: "/vendor/dashboard" },
      { name: "Developer Resources", href: "/vendor/resources" },
      { name: "API Documentation", href: "/vendor/api" }
    ],
    "Support": [
      { name: "Help Center", href: "/support" },
      { name: "Contact Us", href: "/contact" },
      { name: "Community", href: "/community" },
      { name: "Status", href: "/status" }
    ],
    "Company": [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "GitHub", icon: "Github", href: "#" },
    { name: "Discord", icon: "MessageCircle", href: "#" }
  ];

  return (
    <footer className="bg-surface-800 border-t border-surface-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <ApperIcon name="Zap" size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold gradient-text">AI Hub</h2>
                <p className="text-xs text-surface-400">AI App Marketplace</p>
              </div>
            </Link>
            <p className="text-surface-400 text-sm mb-6 max-w-sm">
              Discover, purchase, and manage AI applications from verified vendors. 
              The ultimate marketplace for AI-powered tools and solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-surface-700 hover:bg-surface-600 flex items-center justify-center transition-colors duration-200"
                >
                  <ApperIcon name={social.icon} size={18} className="text-surface-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-surface-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-surface-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 text-sm text-surface-400 mb-4 md:mb-0">
              <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
            <div className="text-sm text-surface-400">
              © 2024 AI Hub. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;