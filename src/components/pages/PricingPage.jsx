import { useState } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for individuals and small teams getting started",
      price: { monthly: 0, annual: 0 },
      features: [
        "Access to free applications",
        "Basic customer support",
        "Community forum access",
        "Standard download speeds",
        "Email notifications"
      ],
      popular: false,
      cta: "Get Started Free"
    },
    {
      name: "Pro",
      description: "Ideal for growing businesses and professional teams",
      price: { monthly: 29, annual: 299 },
      features: [
        "Access to all premium applications",
        "Priority customer support",
        "Advanced analytics dashboard",
        "Faster download speeds",
        "API access",
        "Custom integrations",
        "Team collaboration tools",
        "Advanced security features"
      ],
      popular: true,
      cta: "Start Pro Trial"
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations",
      price: { monthly: 99, annual: 999 },
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom SLA agreements",
        "White-label options",
        "Advanced compliance tools",
        "SSO integration",
        "Custom deployment",
        "24/7 phone support",
        "Training and onboarding"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences in cost."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and for Enterprise customers, we also accept bank transfers and purchase orders."
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes! Pro and Enterprise plans come with a 14-day free trial. No credit card required to start your trial."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing for qualified non-profit organizations, educational institutions, and startups. Contact our sales team for more information."
    },
    {
      question: "What happens if I cancel my subscription?",
      answer: "You can cancel anytime. Your account will remain active until the end of your current billing period, after which you'll be moved to our free plan."
    },
    {
      question: "Can I get a refund?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact support for a full refund."
    }
  ];

  const enterprises = [
    { name: "Microsoft", logo: "M" },
    { name: "Google", logo: "G" },
    { name: "Slack", logo: "S" },
    { name: "Notion", logo: "N" },
    { name: "Figma", logo: "F" },
    { name: "GitHub", logo: "G" }
  ];

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
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Choose the perfect plan for your needs. Join companies like Microsoft, Google, and Slack who trust Navigator for their app marketplace needs.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-4 mb-12"
          >
            <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge variant="primary" className="ml-2">
                Save 20%
              </Badge>
            )}
          </motion.div>
        </section>

        {/* Pricing Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="primary" className="px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card className={`p-8 h-full ${
                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-xl' 
                    : 'border-gray-200 hover:shadow-lg'
                } transition-all duration-300 bg-white`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-600 ml-2">
                        {plan.price.monthly === 0 ? '' : isAnnual ? '/year' : '/month'}
                      </span>
                      {isAnnual && plan.price.monthly > 0 && (
                        <div className="text-sm text-green-600 mt-1">
                          Save ${(plan.price.monthly * 12 - plan.price.annual)}
                        </div>
                      )}
                    </div>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                      variant={plan.popular ? "primary" : "outline"}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <ApperIcon name="Check" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enterprise Customers */}
        <section className="py-16 bg-white rounded-xl shadow-sm mb-16">
          <div className="text-center px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading <span className="gradient-text">Companies</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Join thousands of companies who rely on Navigator for their app ecosystem
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {enterprises.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-sm">
                    <span className="text-2xl font-bold text-gray-600">{company.logo}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{company.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compare <span className="gradient-text">Features</span>
            </h2>
            <p className="text-gray-600 text-lg">
              See what's included in each plan
            </p>
          </div>
          <Card className="overflow-hidden bg-white border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Free</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Pro</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Free Apps Access", free: true, pro: true, enterprise: true },
                    { feature: "Premium Apps Access", free: false, pro: true, enterprise: true },
                    { feature: "Customer Support", free: "Email", pro: "Priority", enterprise: "24/7 Phone" },
                    { feature: "API Access", free: false, pro: true, enterprise: true },
                    { feature: "Team Collaboration", free: false, pro: "5 users", enterprise: "Unlimited" },
                    { feature: "Custom Integrations", free: false, pro: true, enterprise: true },
                    { feature: "SSO Integration", free: false, pro: false, enterprise: true },
                    { feature: "Dedicated Manager", free: false, pro: false, enterprise: true }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.free === 'boolean' ? (
                          row.free ? (
                            <ApperIcon name="Check" size={16} className="text-green-600 mx-auto" />
                          ) : (
                            <ApperIcon name="X" size={16} className="text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-600 text-sm">{row.free}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? (
                            <ApperIcon name="Check" size={16} className="text-green-600 mx-auto" />
                          ) : (
                            <ApperIcon name="X" size={16} className="text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-600 text-sm">{row.pro}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? (
                            <ApperIcon name="Check" size={16} className="text-green-600 mx-auto" />
                          ) : (
                            <ApperIcon name="X" size={16} className="text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-600 text-sm">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about our pricing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using Navigator to discover and manage their favorite applications
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="secondary" size="xl" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg">
              <ApperIcon name="CreditCard" size={24} className="mr-3" />
              Start Free Trial
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg">
              <ApperIcon name="Phone" size={24} className="mr-3" />
              Contact Sales
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingPage;