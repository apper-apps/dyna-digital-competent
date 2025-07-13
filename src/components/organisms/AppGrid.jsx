import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppCard from "@/components/molecules/AppCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { appService } from "@/services/api/appService";
import { useCart } from "@/hooks/useCart";

const AppGrid = ({ filters = {}, searchQuery = "" }) => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("popular");
  const { addItem } = useCart();

  const itemsPerPage = 12;

  useEffect(() => {
    loadApps();
  }, [filters, searchQuery, sortBy]);

  const loadApps = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await appService.getAll();
      
      let filteredApps = data;

      // Apply search filter
      if (searchQuery) {
        filteredApps = filteredApps.filter(app =>
          app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      }

      // Apply category filter
      if (filters.categories?.length > 0) {
        filteredApps = filteredApps.filter(app =>
          filters.categories.includes(app.category)
        );
      }

      // Apply price filter
      if (filters.priceRange) {
        filteredApps = filteredApps.filter(app => {
          const price = app.pricing[0]?.price || 0;
          switch (filters.priceRange) {
            case "free":
              return price === 0;
            case "1-10":
              return price >= 1 && price <= 10;
            case "11-50":
              return price >= 11 && price <= 50;
            case "51-100":
              return price >= 51 && price <= 100;
            case "100+":
              return price > 100;
            default:
              return true;
          }
        });
      }

      // Apply rating filter
      if (filters.rating) {
        filteredApps = filteredApps.filter(app => app.rating >= filters.rating);
      }

      // Apply features filter
      if (filters.features?.length > 0) {
        filteredApps = filteredApps.filter(app =>
          filters.features.every(feature => app.features.includes(feature))
        );
      }

      // Apply sorting
      filteredApps.sort((a, b) => {
        switch (sortBy) {
          case "name":
            return a.name.localeCompare(b.name);
          case "price_low":
            return (a.pricing[0]?.price || 0) - (b.pricing[0]?.price || 0);
          case "price_high":
            return (b.pricing[0]?.price || 0) - (a.pricing[0]?.price || 0);
          case "rating":
            return b.rating - a.rating;
          case "newest":
            return new Date(b.createdAt) - new Date(a.createdAt);
          default: // popular
            return b.reviewCount - a.reviewCount;
        }
      });

      setApps(filteredApps);
      setCurrentPage(1);
    } catch (err) {
      setError("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (app) => {
    const price = app.pricing[0]?.price || 0;
    addItem({
      Id: app.Id,
      name: app.name,
      price: price,
      vendor: app.vendor
    });
  };

  const paginatedApps = apps.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(apps.length / itemsPerPage);

  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "newest", label: "Newest First" },
    { value: "rating", label: "Highest Rated" },
    { value: "name", label: "Name A-Z" },
    { value: "price_low", label: "Price: Low to High" },
    { value: "price_high", label: "Price: High to Low" }
  ];

  if (loading) return <Loading type="cards" count={itemsPerPage} />;
  if (error) return <Error message={error} onRetry={loadApps} />;

  return (
<div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
        <div className="text-gray-600">
          {apps.length === 0 ? (
            "No applications found"
          ) : (
            <>
              Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, apps.length)} of {apps.length} applications
            </>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          <label className="text-gray-600 text-sm font-medium">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Apps Grid */}
      {apps.length === 0 ? (
        <Empty
          title="No applications found"
          message="We couldn't find any applications matching your criteria. Try adjusting your search or filters."
          actionText="Clear Filters"
          onAction={() => window.location.reload()}
        />
      ) : (
<>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {paginatedApps.map((app, index) => (
              <motion.div
                key={app.Id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AppCard app={app} onAddToCart={handleAddToCart} />
              </motion.div>
            ))}
          </motion.div>

{/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-12 p-4">
              <Button
                variant="ghost"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              >
                <ApperIcon name="ChevronLeft" size={18} />
              </Button>
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                const isCurrentPage = page === currentPage;
                
                return (
                  <Button
                    key={page}
                    variant={isCurrentPage ? "primary" : "ghost"}
                    onClick={() => setCurrentPage(page)}
                    className="w-10 h-10"
                  >
                    {page}
                  </Button>
                );
              })}
              
<Button
                variant="ghost"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              >
                <ApperIcon name="ChevronRight" size={18} />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AppGrid;