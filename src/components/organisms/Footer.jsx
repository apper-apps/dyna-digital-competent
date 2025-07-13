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
      { name: "List Your App", href: "/vendor/register" },
      { name: "Vendor Dashboard", href: "/vendor/dashboard" },
      { name: "Developer Resources", href: "/vendor/resources" },
      { name: "Get Funding", href: "/get-funding" }
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
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                <ApperIcon name="Zap" size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold gradient-text">Navigator</h2>
                <p className="text-xs text-gray-600 font-medium">Super Apps that Upgrade You!</p>
              </div>
            </Link>
<p className="text-gray-600 text-sm mb-6 max-w-sm leading-relaxed">
              Discover, purchase, and manage innovative applications from verified vendors. 
              The ultimate marketplace for tools and solutions that upgrade your capabilities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-300 flex items-center justify-center transition-all duration-200 shadow-sm"
                >
                  <ApperIcon name={social.icon} size={18} className="text-gray-600 hover:text-blue-600" />
                </a>
              ))}
            </div>
</div>

          {/* Footer Links */}
          <div className="sm:col-span-1 lg:col-span-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
</ul>
            </div>
            ))}
          </div>
        </div>

<div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
              <Link to="/privacy" className="hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-blue-600 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-blue-600 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
            <div className="text-sm text-gray-600 text-center sm:text-right">
              © 2024 Navigator. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;