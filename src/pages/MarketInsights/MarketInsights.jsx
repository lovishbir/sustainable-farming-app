import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown, FaChartLine, FaChartBar, FaChartPie } from 'react-icons/fa';
import './MarketInsights.css';

const MarketInsights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('short');

  // Mock data for price trends
  const priceTrends = [
    { crop: 'Organic Wheat', currentPrice: '$8.75/bushel', change: '+12%', trend: 'positive' },
    { crop: 'Organic Corn', currentPrice: '$7.20/bushel', change: '+8%', trend: 'positive' },
    { crop: 'Organic Soybeans', currentPrice: '$16.40/bushel', change: '+15%', trend: 'positive' },
    { crop: 'Conventional Wheat', currentPrice: '$5.30/bushel', change: '-3%', trend: 'negative' },
    { crop: 'Conventional Corn', currentPrice: '$4.10/bushel', change: '-2%', trend: 'negative' },
    { crop: 'Conventional Soybeans', currentPrice: '$11.20/bushel', change: '+1%', trend: 'positive' },
    { crop: 'Organic Tomatoes', currentPrice: '$3.25/lb', change: '+20%', trend: 'positive' },
    { crop: 'Organic Lettuce', currentPrice: '$2.80/head', change: '-5%', trend: 'negative' },
  ];

  // Mock data for market insights
  const marketInsights = [
    {
      id: 1,
      title: 'Growing Demand for Organic Produce',
      date: 'September 15, 2023',
      description: 'The market for organic produce continues to expand as consumers increasingly prioritize health and environmental concerns.',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'Direct-to-Consumer Sales Booming',
      date: 'September 10, 2023',
      description: 'Farmers using direct-to-consumer models like CSAs and farmers markets are seeing increased profits and customer loyalty.',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      title: 'Climate Change Affecting Crop Selection',
      date: 'September 5, 2023',
      description: 'Farmers are adapting to changing climate conditions by diversifying crops and adopting drought-resistant varieties.',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  // Mock forecast metrics
  const forecastMetrics = {
    short: [
      { label: 'Organic Wheat Price', value: '$9.25/bushel', trend: 'positive' },
      { label: 'Organic Corn Price', value: '$7.60/bushel', trend: 'positive' },
      { label: 'Organic Demand Growth', value: '8%', trend: 'positive' },
      { label: 'Input Cost Change', value: '+3%', trend: 'negative' },
      { label: 'Profit Margin Projection', value: '+5%', trend: 'positive' }
    ],
    medium: [
      { label: 'Organic Wheat Price', value: '$10.15/bushel', trend: 'positive' },
      { label: 'Organic Corn Price', value: '$8.30/bushel', trend: 'positive' },
      { label: 'Organic Demand Growth', value: '15%', trend: 'positive' },
      { label: 'Input Cost Change', value: '+7%', trend: 'negative' },
      { label: 'Profit Margin Projection', value: '+10%', trend: 'positive' }
    ],
    long: [
      { label: 'Organic Wheat Price', value: '$12.50/bushel', trend: 'positive' },
      { label: 'Organic Corn Price', value: '$10.75/bushel', trend: 'positive' },
      { label: 'Organic Demand Growth', value: '25%', trend: 'positive' },
      { label: 'Input Cost Change', value: '+12%', trend: 'negative' },
      { label: 'Profit Margin Projection', value: '+18%', trend: 'positive' }
    ]
  };

  return (
    <div className="market-insights-page">
      <section className="market-hero">
        <div className="container">
          <h1>Market Insights</h1>
          <p className="market-hero-description">
            Stay informed about market trends, price forecasts, and consumer preferences to make data-driven decisions for your farm's profitability.
          </p>
        </div>
      </section>

      <section className="market-trends-section">
        <div className="container">
          <div className="section-title">
            <h2>Current Market Trends</h2>
          </div>
          <div className="market-trends-container">
            <div className="market-trends-content">
              <h3>Sustainable Farming Market Overview</h3>
              <p>
                The market for sustainably grown produce continues to expand, with organic products seeing particularly strong growth. Consumer awareness of environmental issues and health concerns is driving demand for eco-friendly farming practices.
              </p>
              <p>
                Farmers who adopt sustainable methods are experiencing premium pricing opportunities, especially in direct-to-consumer channels. This trend is expected to continue as sustainability becomes increasingly important to both consumers and regulatory bodies.
              </p>
              <p>
                Local food systems are also gaining traction, with shorter supply chains providing better margins for farmers while reducing environmental impact.
              </p>
            </div>
            <div className="market-chart">
              <div className="chart-placeholder">
                <div className="chart-icon"><FaChartLine size={50} color="#4CAF50" /></div>
                <p>Market Growth Chart (2018-2023)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="price-trends-section">
        <div className="container">
          <div className="section-title">
            <h2>Crop Price Trends</h2>
          </div>
          <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Current market prices and trends for key crops, comparing organic and conventional farming.
          </p>
          <table className="price-table">
            <thead>
              <tr>
                <th>Crop</th>
                <th>Current Price</th>
                <th>Change (YoY)</th>
              </tr>
            </thead>
            <tbody>
              {priceTrends.map((crop, index) => (
                <tr key={index}>
                  <td>{crop.crop}</td>
                  <td>{crop.currentPrice}</td>
                  <td>
                    <span className={`price-change ${crop.trend}`}>
                      <span className="price-change-icon">
                        {crop.trend === 'positive' ? <FaArrowUp /> : <FaArrowDown />}
                      </span>
                      {crop.change}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="section-title" style={{ marginTop: 'var(--spacing-xxl)' }}>
            <h2>Latest Market Insights</h2>
          </div>
          <div className="market-insights-grid">
            {marketInsights.map(insight => (
              <div className="insight-card" key={insight.id}>
                <div className="insight-image">
                  <img src={insight.image} alt={insight.title} />
                </div>
                <div className="insight-content">
                  <h3 className="insight-title">{insight.title}</h3>
                  <span className="insight-date">{insight.date}</span>
                  <p className="insight-description">{insight.description}</p>
                  <a href="#" className="btn">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="forecast-section">
        <div className="container">
          <div className="section-title">
            <h2>Market Forecasts</h2>
          </div>
          <div className="forecast-tabs">
            <div 
              className={`forecast-tab ${activeTab === 'short' ? 'active' : ''}`}
              onClick={() => setActiveTab('short')}
            >
              Short-Term (3 Months)
            </div>
            <div 
              className={`forecast-tab ${activeTab === 'medium' ? 'active' : ''}`}
              onClick={() => setActiveTab('medium')}
            >
              Medium-Term (1 Year)
            </div>
            <div 
              className={`forecast-tab ${activeTab === 'long' ? 'active' : ''}`}
              onClick={() => setActiveTab('long')}
            >
              Long-Term (3 Years)
            </div>
          </div>
          
          <div className="forecast-content">
            <div className="forecast-chart">
              {activeTab === 'short' && (
                <div className="chart-placeholder">
                  <div className="chart-icon"><FaChartBar size={50} color="#4CAF50" /></div>
                  <p>Short-Term Forecast Chart</p>
                </div>
              )}
              {activeTab === 'medium' && (
                <div className="chart-placeholder">
                  <div className="chart-icon"><FaChartLine size={50} color="#4CAF50" /></div>
                  <p>Medium-Term Forecast Chart</p>
                </div>
              )}
              {activeTab === 'long' && (
                <div className="chart-placeholder">
                  <div className="chart-icon"><FaChartPie size={50} color="#4CAF50" /></div>
                  <p>Long-Term Forecast Chart</p>
                </div>
              )}
            </div>
            
            <div className="forecast-details">
              <h3>
                {activeTab === 'short' && 'Short-Term Forecast (Next 3 Months)'}
                {activeTab === 'medium' && 'Medium-Term Forecast (Next Year)'}
                {activeTab === 'long' && 'Long-Term Forecast (Next 3 Years)'}
              </h3>
              <p>
                {activeTab === 'short' && 'Market projections for the coming three months, based on current trends and seasonal factors.'}
                {activeTab === 'medium' && 'One-year outlook considering broader economic factors and industry developments.'}
                {activeTab === 'long' && 'Three-year projections taking into account long-term market shifts and policy changes.'}
              </p>
              
              <div className="forecast-metrics">
                {forecastMetrics[activeTab].map((metric, index) => (
                  <div className="forecast-metric" key={index}>
                    <span className="metric-label">{metric.label}</span>
                    <span className={`metric-value ${metric.trend}`}>{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketInsights;