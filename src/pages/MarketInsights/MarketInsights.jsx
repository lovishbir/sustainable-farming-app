import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaChartLine, 
  FaCalendarAlt, 
  FaArrowUp, 
  FaArrowDown, 
  FaFilter, 
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaExternalLinkAlt,
  FaSeedling,
  FaLeaf,
  FaTractor,
  FaWater
} from 'react-icons/fa';
import { Line, Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement,
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import './MarketInsights.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Sample data - In a real application, this would come from an API
const marketTrendsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Organic Market Growth',
      data: [12, 19, 13, 15, 22, 27, 30, 25, 20, 18, 15, 20],
      fill: false,
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      borderColor: '#4CAF50',
      tension: 0.4
    },
    {
      label: 'Conventional Market',
      data: [10, 15, 10, 12, 15, 17, 19, 17, 14, 13, 11, 14],
      fill: false,
      backgroundColor: 'rgba(33, 150, 243, 0.2)',
      borderColor: '#2196F3',
      tension: 0.4
    }
  ]
};

const marketForecastData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Price Forecast',
      data: [25, 30, 35, 40, 38, 42],
      backgroundColor: 'rgba(76, 175, 80, 0.5)',
      borderColor: '#4CAF50',
      borderWidth: 1
    }
  ]
};

const priceTrendsData = [
  { id: 1, crop: 'Organic Rice', currentPrice: '₹38/kg', previousPrice: '₹35/kg', change: '+8.5%', trend: 'up' },
  { id: 2, crop: 'Organic Wheat', currentPrice: '₹32/kg', previousPrice: '₹30/kg', change: '+6.7%', trend: 'up' },
  { id: 3, crop: 'Organic Cotton', currentPrice: '₹65/kg', previousPrice: '₹70/kg', change: '-7.1%', trend: 'down' },
  { id: 4, crop: 'Organic Pulses', currentPrice: '₹95/kg', previousPrice: '₹90/kg', change: '+5.6%', trend: 'up' },
  { id: 5, crop: 'Organic Vegetables', currentPrice: '₹45/kg', previousPrice: '₹40/kg', change: '+12.5%', trend: 'up' },
  { id: 6, crop: 'Organic Fruits', currentPrice: '₹75/kg', previousPrice: '₹80/kg', change: '-6.3%', trend: 'down' },
];

const marketInsightsData = [
  {
    id: 1,
    title: 'Rising Demand for Organic Produce in Urban Markets',
    date: 'August 15, 2023',
    category: 'Market Trends',
    excerpt: 'Urban consumers are increasingly willing to pay premium prices for certified organic produce, creating new opportunities for sustainable farmers.',
    author: 'Priya Sharma',
    authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    title: 'Export Opportunities for Indian Organic Farmers',
    date: 'July 28, 2023',
    category: 'Global Markets',
    excerpt: 'International markets are opening up for Indian organic farmers with increasing demand from Europe and North America for specific crops.',
    author: 'Rajiv Verma',
    authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    image: 'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  },
  {
    id: 3,
    title: 'Government Subsidies for Organic Farming in 2023',
    date: 'June 10, 2023',
    category: 'Policy',
    excerpt: 'New government initiatives are providing significant subsidies and support programs for farmers transitioning to organic farming methods.',
    author: 'Amita Patel',
    authorImage: 'https://randomuser.me/api/portraits/women/68.jpg',
    image: 'https://images.unsplash.com/photo-1589923188651-268a9765e432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

const regionalMarketData = {
  maharashtra: {
    topCrops: ['Organic Cotton', 'Organic Soybean', 'Organic Sugarcane'],
    marketGrowth: '+18%',
    organicPremium: '25-30%',
    keyMarkets: 'Mumbai, Pune, Nagpur',
    description: 'Maharashtra has seen significant growth in organic farming, particularly in cotton and soybean. The state benefits from strong local demand in urban centers and established export channels for organic cotton. Premium rates are among the highest in the country.'
  },
  punjab: {
    topCrops: ['Organic Wheat', 'Organic Rice', 'Organic Vegetables'],
    marketGrowth: '+15%',
    organicPremium: '20-25%',
    keyMarkets: 'Chandigarh, Ludhiana, Amritsar',
    description: 'Punjab is transitioning from conventional to organic farming with government support. The organic wheat and rice market is growing steadily with strong demand from domestic food processing companies and export markets.'
  },
  karnataka: {
    topCrops: ['Organic Coffee', 'Organic Spices', 'Organic Millets'],
    marketGrowth: '+22%',
    organicPremium: '30-40%',
    keyMarkets: 'Bangalore, Mysore, International Export',
    description: 'Karnataka leads in organic coffee and spice production with well-established certification processes. The state enjoys premium export markets and is seeing growing domestic demand for organic millets as health-conscious consumers increase.'
  },
  tamilnadu: {
    topCrops: ['Organic Rice', 'Organic Vegetables', 'Organic Coconut'],
    marketGrowth: '+20%',
    organicPremium: '25-35%',
    keyMarkets: 'Chennai, Coimbatore, Export Markets',
    description: 'Tamil Nadu has a strong ecosystem for organic farming with established farmer producer organizations. The state has developed efficient supply chains for organic vegetables to urban markets and has growing export markets for organic coconut products.'
  },
  gujarat: {
    topCrops: ['Organic Cotton', 'Organic Groundnut', 'Organic Cumin'],
    marketGrowth: '+16%',
    organicPremium: '20-30%',
    keyMarkets: 'Ahmedabad, Surat, Export Markets',
    description: 'Gujarat has become a hub for organic cotton and spice production. The state has invested in processing facilities that add value to organic crops, resulting in better returns for farmers. Export markets for organic spices are particularly strong.'
  }
};

// Define recommended actions for each region
const regionalRecommendations = {
  maharashtra: [
    {
      title: 'Market Timing',
      description: 'Optimal selling periods for Organic Cotton are between June-August when prices typically rise by 15-20%.',
      icon: <FaCalendarAlt />
    },
    {
      title: 'Crop Selection',
      description: 'Consider transitioning 20-30% of land to Organic Soybean which shows strong demand growth of 25% annually.',
      icon: <FaSeedling />
    },
    {
      title: 'Price Negotiation',
      description: 'Local buyers are currently offering 5-10% below market average. Consider collective selling through FPOs for better pricing.',
      icon: <FaChartLine />
    }
  ],
  punjab: [
    {
      title: 'Water Conservation',
      description: 'Implement drip irrigation for vegetable crops to qualify for additional 10% organic premium from eco-conscious buyers.',
      icon: <FaWater />
    },
    {
      title: 'Crop Rotation',
      description: 'Rotate wheat with legumes to improve soil health and reduce input costs by up to 20%.',
      icon: <FaLeaf />
    },
    {
      title: 'Direct Marketing',
      description: 'Connect with organic food processors in Chandigarh for direct contracts that offer 15% better prices than intermediaries.',
      icon: <FaTractor />
    }
  ],
  // Add similar recommendations for other regions
};

// Chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const MarketInsights = () => {
  // State management with React hooks
  const [selectedForecastPeriod, setSelectedForecastPeriod] = useState('shortTerm');
  const [selectedState, setSelectedState] = useState('maharashtra');
  const [chartView, setChartView] = useState('line');
  const [tableFilter, setTableFilter] = useState('all');
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter price trends data based on selected filter
  const filteredPriceTrends = useMemo(() => {
    if (tableFilter === 'all') return priceTrendsData;
    return priceTrendsData.filter(item => 
      tableFilter === 'up' ? item.trend === 'up' : item.trend === 'down'
    );
  }, [tableFilter]);

  // Memoized recommendations based on selected state
  const stateRecommendations = useMemo(() => {
    return regionalRecommendations[selectedState] || regionalRecommendations.maharashtra;
  }, [selectedState]);

  // Handle chart type change
  const handleChartViewChange = useCallback((view) => {
    setChartView(view);
  }, []);

  // Render price change with appropriate icon and color
  const renderPriceChange = useCallback((trend, change) => {
    return (
      <span className={`price-change ${trend === 'up' ? 'positive' : 'negative'}`}>
        <span className="price-change-icon">
          {trend === 'up' ? <FaArrowUp /> : <FaArrowDown />}
        </span>
        {change}
      </span>
    );
  }, []);

  return (
    <div className="market-insights-page">
      {/* Hero Section */}
      <section className="market-hero">
        <div className="container">
          <h1>Agricultural Market Insights</h1>
          <p className="market-hero-description">
            Stay informed about current market trends, price forecasts, and opportunities in sustainable farming. 
            Make data-driven decisions to maximize your farm's profitability and sustainability.
          </p>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="market-trends-section">
        <div className="container">
          <div className="section-title">
            <h2>Market Trends</h2>
          </div>
          
          <div className="market-trends-container">
            <div className="market-trends-content">
              <h2>Organic Farming Market Growth</h2>
              <p>
                The organic farming sector has shown consistent growth over the past year, outpacing conventional farming by 8-12%. 
                This trend is driven by increasing consumer awareness, government support policies, and export opportunities.
              </p>
              
              <div className="trend-highlights">
                <div className="trend-item">
                  <div className="trend-icon">
                    <FaChartLine />
                  </div>
                  <div className="trend-content">
                    <h4>Premium Pricing</h4>
                    <p>Organic produce continues to command 20-30% premium over conventional farming methods.</p>
                  </div>
                </div>
                
                <div className="trend-item">
                  <div className="trend-icon">
                    <FaLeaf />
                  </div>
                  <div className="trend-content">
                    <h4>Growing Consumer Base</h4>
                    <p>Urban markets show 25% increase in demand for certified organic products year-over-year.</p>
                  </div>
                </div>
                
                <div className="trend-item">
                  <div className="trend-icon">
                    <FaTractor />
                  </div>
                  <div className="trend-content">
                    <h4>Government Support</h4>
                    <p>New subsidies and certification assistance programs launched in 2023 for organic farmers.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="market-chart">
              <div className="chart-controls">
                <button 
                  className={`chart-control-btn ${chartView === 'line' ? 'active' : ''}`}
                  onClick={() => handleChartViewChange('line')}
                  aria-label="View line chart"
                >
                  Line
                </button>
                <button 
                  className={`chart-control-btn ${chartView === 'bar' ? 'active' : ''}`}
                  onClick={() => handleChartViewChange('bar')}
                  aria-label="View bar chart"
                >
                  Bar
                </button>
              </div>
              
              {chartView === 'line' ? (
                <Line data={marketTrendsData} options={chartOptions} />
              ) : (
                <Bar data={marketTrendsData} options={chartOptions} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Price Trends Section */}
      <section className="price-trends-section">
        <div className="container">
          <div className="section-title">
            <h2>Current Price Trends</h2>
          </div>
          
          <div className="table-controls">
            <div className="table-filter">
              <span className="filter-label">Filter:</span>
              <select 
                className="filter-select"
                value={tableFilter}
                onChange={(e) => setTableFilter(e.target.value)}
                aria-label="Filter price trends"
              >
                <option value="all">All Trends</option>
                <option value="up">Price Increase</option>
                <option value="down">Price Decrease</option>
              </select>
            </div>
            
            <div className="table-pagination">
              <button className="pagination-btn" aria-label="Previous page">
                <FaChevronLeft />
              </button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <button className="pagination-btn" aria-label="Next page">
                <FaChevronRight />
              </button>
            </div>
          </div>
          
          <div className="price-table-container">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Crop</th>
                  <th>Current Price</th>
                  <th>Previous Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {filteredPriceTrends.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div className="crop-name">
                        <span className="crop-icon">
                          <FaSeedling />
                        </span>
                        {item.crop}
                      </div>
                    </td>
                    <td>{item.currentPrice}</td>
                    <td>{item.previousPrice}</td>
                    <td>{renderPriceChange(item.trend, item.change)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="market-insights-grid">
            {marketInsightsData.map(insight => (
              <div className="insight-card" key={insight.id}>
                <div className="insight-image">
                  <img src={insight.image} alt={insight.title} />
                  <span className="insight-category">{insight.category}</span>
                </div>
                <div className="insight-content">
                  <h3 className="insight-title">{insight.title}</h3>
                  <span className="insight-date">
                    <span className="date-icon"><FaCalendarAlt /></span>
                    {insight.date}
                  </span>
                  <p className="insight-description">{insight.excerpt}</p>
                  
                  <div className="insight-footer">
                    <div className="insight-author">
                      <div className="author-avatar">
                        <img src={insight.authorImage} alt={insight.author} />
                      </div>
                      <span className="author-name">{insight.author}</span>
                    </div>
                    
                    <Link to={`/market-insights/${insight.id}`} className="read-more-link">
                      Read More
                      <span className="link-icon"><FaExternalLinkAlt /></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Insights Section */}
      <section className="regional-insights-section">
        <div className="container">
          <div className="section-title">
            <h2>Regional Market Insights</h2>
          </div>
          <p className="section-description">
            Explore market trends specific to different agricultural regions of India to make informed farming decisions.
          </p>
          
          <div className="state-selector">
            <div className="custom-select-wrapper">
              <label htmlFor="region-select" className="visually-hidden">Select Region</label>
              <select 
                id="region-select"
                value={selectedState} 
                onChange={(e) => setSelectedState(e.target.value)}
                className="custom-select"
              >
                {Object.keys(regionalMarketData).map(state => (
                  <option key={state} value={state}>
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </option>
                ))}
              </select>
              <div className="select-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="regional-insights-card" key={selectedState}>
            <h3>{selectedState.charAt(0).toUpperCase() + selectedState.slice(1)} Market Overview</h3>
            
            <div className="regional-insights-content">
              <div className="regional-insights-metrics">
                <div className="regional-metric">
                  <span className="metric-label">Top Organic Crops</span>
                  <span className="metric-value">{regionalMarketData[selectedState].topCrops.join(', ')}</span>
                </div>
                <div className="regional-metric">
                  <span className="metric-label">Market Growth (YoY)</span>
                  <span className="metric-value positive">{regionalMarketData[selectedState].marketGrowth}</span>
                </div>
                <div className="regional-metric">
                  <span className="metric-label">Organic Premium</span>
                  <span className="metric-value positive">{regionalMarketData[selectedState].organicPremium}</span>
                </div>
                <div className="regional-metric">
                  <span className="metric-label">Key Markets</span>
                  <span className="metric-value">{regionalMarketData[selectedState].keyMarkets}</span>
                </div>
              </div>
              
              <div className="regional-insights-description">
                <p>{regionalMarketData[selectedState].description}</p>
              </div>
            </div>
          </div>
          
          {/* Recommended actions based on selected region */}
          <div className="region-recommendations">
            <h4>Recommended Actions for {selectedState.charAt(0).toUpperCase() + selectedState.slice(1)} Farmers</h4>
            <div className="recommendation-cards">
              {stateRecommendations.map((recommendation, index) => (
                <div className="recommendation-card" key={index}>
                  <div className="recommendation-icon">
                    {recommendation.icon}
                  </div>
                  <div className="recommendation-content">
                    <h5>{recommendation.title}</h5>
                    <p>{recommendation.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Forecast Section */}
      <section className="forecast-section">
        <div className="container">
          <div className="section-title">
            <h2>Market Forecast</h2>
          </div>
          
          <div className="forecast-tabs-container">
            <div className="forecast-tabs">
              <button 
                className={`forecast-tab ${selectedForecastPeriod === 'shortTerm' ? 'active' : ''}`}
                onClick={() => setSelectedForecastPeriod('shortTerm')}
              >
                Short Term (6 Months)
              </button>
              <button 
                className={`forecast-tab ${selectedForecastPeriod === 'mediumTerm' ? 'active' : ''}`}
                onClick={() => setSelectedForecastPeriod('mediumTerm')}
              >
                Medium Term (1 Year)
              </button>
              <button 
                className={`forecast-tab ${selectedForecastPeriod === 'longTerm' ? 'active' : ''}`}
                onClick={() => setSelectedForecastPeriod('longTerm')}
              >
                Long Term (3 Years)
              </button>
            </div>
          </div>
          
          <div className="forecast-content">
            <div className="forecast-chart">
              <Bar data={marketForecastData} options={chartOptions} />
            </div>
            
            <div className="forecast-details">
              <h3>Price Forecast Analysis</h3>
              <p className="forecast-summary">
                Based on historical data and current market conditions, we project a steady increase in organic crop prices 
                over the next {selectedForecastPeriod === 'shortTerm' ? '6 months' : selectedForecastPeriod === 'mediumTerm' ? '1 year' : '3 years'}.
                Key factors influencing this trend include growing consumer demand, limited supply, and increasing production costs.
              </p>
              
              <div className="forecast-metrics">
                <div className="forecast-metric">
                  <span className="metric-label">Projected Price Change</span>
                  <span className="metric-value positive">+15-20%</span>
                </div>
                <div className="forecast-metric">
                  <span className="metric-label">Market Volatility</span>
                  <span className="metric-value">Medium</span>
                </div>
                <div className="forecast-metric">
                  <span className="metric-label">Confidence Level</span>
                  <span className="metric-value">85%</span>
                </div>
                <div className="forecast-metric">
                  <span className="metric-label">Best Performing Crops</span>
                  <span className="metric-value">Organic Vegetables, Pulses</span>
                </div>
              </div>
              
              <div className="forecast-cta">
                <a href="#" className="forecast-btn">
                  Download Detailed Report
                  <span className="btn-icon"><FaDownload /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-container">
            <h3 className="newsletter-title">Stay Updated with Market Trends</h3>
            <p className="newsletter-description">
              Subscribe to our weekly market insights newsletter and receive timely updates on price trends, 
              market opportunities, and agricultural policy changes.
            </p>
            
            <form className="newsletter-form">
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Enter your email address" 
                aria-label="Email address"
                required
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketInsights;