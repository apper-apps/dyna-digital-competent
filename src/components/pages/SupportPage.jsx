import { useState } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import Input from "@/components/atoms/Input";
import { toast } from "react-toastify";

const SupportPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    category: "general",
    message: ""
  });

  const supportCategories = [
    { id: "all", name: "All Topics", icon: "Grid3X3" },
    { id: "account", name: "Account & Billing", icon: "User" },
    { id: "technical", name: "Technical Issues", icon: "Settings" },
    { id: "apps", name: "App Management", icon: "Package" },
    { id: "vendor", name: "Vendor Support", icon: "Building" }
  ];

  const faqs = [
    {
      id: 1,
      category: "account",
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the login page. We'll send you a secure reset link via email."
    },
    {
      id: 2, 
      category: "account",
      question: "How do I update my billing information?",
      answer: "Go to Account Settings > Billing to update your payment method, billing address, and view your subscription details."
    },
    {
      id: 3,
      category: "technical",
      question: "Why is an app not working properly?",
      answer: "First, try refreshing the page or restarting the app. If the issue persists, check our status page or contact the app vendor directly through their support channels."
    },
    {
      id: 4,
      category: "technical", 
      question: "I'm experiencing slow download speeds",
      answer: "Slow downloads can be caused by your internet connection or server load. Try downloading during off-peak hours or contact support if you're on a Pro plan for priority downloads."
    },
    {
      id: 5,
      category: "apps",
      question: "How do I install a purchased app?",
      answer: "After purchase, you'll receive installation instructions via email. Most apps can be downloaded directly from your account dashboard or through our desktop client."
    },
    {
      id: 6,
      category: "apps",
      question: "Can I get a refund for an app?",
      answer: "Yes, we offer a 30-day refund policy for most apps. Contact the vendor first for support, and if unresolved, our team can process a refund."
    },
    {
      id: 7,
      category: "vendor",
      question: "How do I become a vendor?",
      answer: "Visit our Vendor page to learn about the application process. You'll need to verify your identity and submit your first app for review."
    },
    {
      id: 8,
      category: "vendor",
      question: "What's the vendor revenue share?",
      answer: "Vendors keep 70% of their revenue. We handle payment processing, hosting, and customer support, taking a 30% platform fee."
    }
  ];

  const contactOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: "MessageCircle",
      action: "Start Chat",
      available: "Available 24/7"
    },
    {
      title: "Email Support", 
      description: "Send us a detailed message",
      icon: "Mail",
      action: "Send Email",
      available: "Response within 4 hours"
    },
    {
      title: "Phone Support",
      description: "Call us directly for urgent issues",
      icon: "Phone", 
      action: "Call Now",
      available: "Pro & Enterprise only"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and experts",
      icon: "Users",
      action: "Visit Forum",
      available: "Powered by community"
    }
  ];

  const resources = [
    {
      title: "Getting Started Guide", 
      description: "Learn the basics of using Navigator",
      icon: "BookOpen",
      type: "Guide"
    },
    {
      title: "API Documentation",
      description: "Complete API reference for developers", 
      icon: "Code",
      type: "Documentation"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video walkthroughs",
      icon: "Play",
      type: "Videos"
    },
    {
      title: "System Status",
      description: "Check current system status and uptime",
      icon: "Activity", 
      type: "Status"
    },
    {
      title: "Security Guide",
      description: "Best practices for account security",
      icon: "Shield",
      type: "Guide"
    },
    {
      title: "Vendor Handbook",
      description: "Complete guide for app vendors",
      icon: "Building",
      type: "Handbook"
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent! We'll get back to you within 4 hours.");
    setContactForm({ name: "", email: "", category: "general", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            How Can We <span className="gradient-text">Help</span> You?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Find answers to common questions, access helpful resources, or get in touch with our support team
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <ApperIcon name="Search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-4 text-lg border-gray-300 rounded-xl shadow-sm"
              />
            </div>
          </motion.div>
        </section>

        {/* Contact Options */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get <span className="gradient-text">Instant</span> Help
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the best way to reach us based on your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <ApperIcon name={option.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                  <p className="text-blue-600 text-xs font-medium mb-4">{option.available}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {option.action}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Quick answers to common questions about Navigator
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {supportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <ApperIcon name={category.icon} size={16} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <ApperIcon name="Search" size={64} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search or browse different categories</p>
            </div>
          )}
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Helpful <span className="gradient-text">Resources</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Guides, documentation, and tools to help you succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <ApperIcon name={resource.icon} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{resource.type}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{resource.description}</p>
                      <div className="mt-3">
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                          <span>Learn more</span>
                          <ApperIcon name="ArrowRight" size={16} className="ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white border-gray-200 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Still Need <span className="gradient-text">Help</span>?
                </h2>
                <p className="text-gray-600 text-lg">
                  Send us a message and our team will get back to you within 4 hours
                </p>
              </div>
              <form onSubmit={handleContactSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={contactForm.category}
                    onChange={(e) => setContactForm({...contactForm, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="general">General Question</option>
                    <option value="technical">Technical Issue</option>
                    <option value="billing">Billing & Account</option>
                    <option value="vendor">Vendor Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Describe your question or issue in detail..."
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" size="lg" className="w-full">
                    <ApperIcon name="Send" size={20} className="mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl text-center">
          <div className="px-8">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <ApperIcon name="AlertTriangle" size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Support</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you're experiencing a critical issue that affects your business operations, 
              our emergency support team is available 24/7 for Pro and Enterprise customers.
            </p>
            <Button variant="outline" size="lg" className="border-red-500 text-red-600 hover:bg-red-50">
              <ApperIcon name="Phone" size={20} className="mr-2" />
              Call Emergency Support
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupportPage;