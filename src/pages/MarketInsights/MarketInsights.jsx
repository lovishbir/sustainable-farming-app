// // import React, { useState, useEffect } from 'react';
// // import { FaArrowUp, FaArrowDown, FaChartLine, FaChartBar, FaChartPie } from 'react-icons/fa';
// // import './MarketInsights.css';

// // const MarketInsights = () => {
// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   const [activeTab, setActiveTab] = useState('short');

// //   // Mock data for price trends
// //   const priceTrends = [
// //     { crop: 'Organic Wheat', currentPrice: '$8.75/bushel', change: '+12%', trend: 'positive' },
// //     { crop: 'Organic Corn', currentPrice: '$7.20/bushel', change: '+8%', trend: 'positive' },
// //     { crop: 'Organic Soybeans', currentPrice: '$16.40/bushel', change: '+15%', trend: 'positive' },
// //     { crop: 'Conventional Wheat', currentPrice: '$5.30/bushel', change: '-3%', trend: 'negative' },
// //     { crop: 'Conventional Corn', currentPrice: '$4.10/bushel', change: '-2%', trend: 'negative' },
// //     { crop: 'Conventional Soybeans', currentPrice: '$11.20/bushel', change: '+1%', trend: 'positive' },
// //     { crop: 'Organic Tomatoes', currentPrice: '$3.25/lb', change: '+20%', trend: 'positive' },
// //     { crop: 'Organic Lettuce', currentPrice: '$2.80/head', change: '-5%', trend: 'negative' },
// //   ];

// //   // Mock data for market insights
// //   const marketInsights = [
// //     {
// //       id: 1,
// //       title: 'Growing Demand for Organic Produce',
// //       date: 'September 15, 2023',
// //       description: 'The market for organic produce continues to expand as consumers increasingly prioritize health and environmental concerns.',
// //       image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
// //     },
// //     {
// //       id: 2,
// //       title: 'Direct-to-Consumer Sales Booming',
// //       date: 'September 10, 2023',
// //       description: 'Farmers using direct-to-consumer models like CSAs and farmers markets are seeing increased profits and customer loyalty.',
// //       image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
// //     },
// //     {
// //       id: 3,
// //       title: 'Climate Change Affecting Crop Selection',
// //       date: 'September 5, 2023',
// //       description: 'Farmers are adapting to changing climate conditions by diversifying crops and adopting drought-resistant varieties.',
// //       image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
// //     }
// //   ];

// //   // Mock forecast metrics
// //   const forecastMetrics = {
// //     short: [
// //       { label: 'Organic Wheat Price', value: '$9.25/bushel', trend: 'positive' },
// //       { label: 'Organic Corn Price', value: '$7.60/bushel', trend: 'positive' },
// //       { label: 'Organic Demand Growth', value: '8%', trend: 'positive' },
// //       { label: 'Input Cost Change', value: '+3%', trend: 'negative' },
// //       { label: 'Profit Margin Projection', value: '+5%', trend: 'positive' }
// //     ],
// //     medium: [
// //       { label: 'Organic Wheat Price', value: '$10.15/bushel', trend: 'positive' },
// //       { label: 'Organic Corn Price', value: '$8.30/bushel', trend: 'positive' },
// //       { label: 'Organic Demand Growth', value: '15%', trend: 'positive' },
// //       { label: 'Input Cost Change', value: '+7%', trend: 'negative' },
// //       { label: 'Profit Margin Projection', value: '+10%', trend: 'positive' }
// //     ],
// //     long: [
// //       { label: 'Organic Wheat Price', value: '$12.50/bushel', trend: 'positive' },
// //       { label: 'Organic Corn Price', value: '$10.75/bushel', trend: 'positive' },
// //       { label: 'Organic Demand Growth', value: '25%', trend: 'positive' },
// //       { label: 'Input Cost Change', value: '+12%', trend: 'negative' },
// //       { label: 'Profit Margin Projection', value: '+18%', trend: 'positive' }
// //     ]
// //   };

// //   return (
// //     <div className="market-insights-page">
// //       <section className="market-hero">
// //         <div className="container">
// //           <h1>Market Insights</h1>
// //           <p className="market-hero-description">
// //             Stay informed about market trends, price forecasts, and consumer preferences to make data-driven decisions for your farm's profitability.
// //           </p>
// //         </div>
// //       </section>

// //       <section className="market-trends-section">
// //         <div className="container">
// //           <div className="section-title">
// //             <h2>Current Market Trends</h2>
// //           </div>
// //           <div className="market-trends-container">
// //             <div className="market-trends-content">
// //               <h3>Sustainable Farming Market Overview</h3>
// //               <p>
// //                 The market for sustainably grown produce continues to expand, with organic products seeing particularly strong growth. Consumer awareness of environmental issues and health concerns is driving demand for eco-friendly farming practices.
// //               </p>
// //               <p>
// //                 Farmers who adopt sustainable methods are experiencing premium pricing opportunities, especially in direct-to-consumer channels. This trend is expected to continue as sustainability becomes increasingly important to both consumers and regulatory bodies.
// //               </p>
// //               <p>
// //                 Local food systems are also gaining traction, with shorter supply chains providing better margins for farmers while reducing environmental impact.
// //               </p>
// //             </div>
// //             <div className="market-chart">
// //               <div className="chart-placeholder">
// //                 <div className="chart-icon"><FaChartLine size={50} color="#4CAF50" /></div>
// //                 <p>Market Growth Chart (2018-2023)</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="price-trends-section">
// //         <div className="container">
// //           <div className="section-title">
// //             <h2>Crop Price Trends</h2>
// //           </div>
// //           <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
// //             Current market prices and trends for key crops, comparing organic and conventional farming.
// //           </p>
// //           <table className="price-table">
// //             <thead>
// //               <tr>
// //                 <th>Crop</th>
// //                 <th>Current Price</th>
// //                 <th>Change (YoY)</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {priceTrends.map((crop, index) => (
// //                 <tr key={index}>
// //                   <td>{crop.crop}</td>
// //                   <td>{crop.currentPrice}</td>
// //                   <td>
// //                     <span className={`price-change ${crop.trend}`}>
// //                       <span className="price-change-icon">
// //                         {crop.trend === 'positive' ? <FaArrowUp /> : <FaArrowDown />}
// //                       </span>
// //                       {crop.change}
// //                     </span>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
          
// //           <div className="section-title" style={{ marginTop: 'var(--spacing-xxl)' }}>
// //             <h2>Latest Market Insights</h2>
// //           </div>
// //           <div className="market-insights-grid">
// //             {marketInsights.map(insight => (
// //               <div className="insight-card" key={insight.id}>
// //                 <div className="insight-image">
// //                   <img src={insight.image} alt={insight.title} />
// //                 </div>
// //                 <div className="insight-content">
// //                   <h3 className="insight-title">{insight.title}</h3>
// //                   <span className="insight-date">{insight.date}</span>
// //                   <p className="insight-description">{insight.description}</p>
// //                   <a href="#" className="btn">Read More</a>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="forecast-section">
// //         <div className="container">
// //           <div className="section-title">
// //             <h2>Market Forecasts</h2>
// //           </div>
// //           <div className="forecast-tabs">
// //             <div 
// //               className={`forecast-tab ${activeTab === 'short' ? 'active' : ''}`}
// //               onClick={() => setActiveTab('short')}
// //             >
// //               Short-Term (3 Months)
// //             </div>
// //             <div 
// //               className={`forecast-tab ${activeTab === 'medium' ? 'active' : ''}`}
// //               onClick={() => setActiveTab('medium')}
// //             >
// //               Medium-Term (1 Year)
// //             </div>
// //             <div 
// //               className={`forecast-tab ${activeTab === 'long' ? 'active' : ''}`}
// //               onClick={() => setActiveTab('long')}
// //             >
// //               Long-Term (3 Years)
// //             </div>
// //           </div>
          
// //           <div className="forecast-content">
// //             <div className="forecast-chart">
// //               {activeTab === 'short' && (
// //                 <div className="chart-placeholder">
// //                   <div className="chart-icon"><FaChartBar size={50} color="#4CAF50" /></div>
// //                   <p>Short-Term Forecast Chart</p>
// //                 </div>
// //               )}
// //               {activeTab === 'medium' && (
// //                 <div className="chart-placeholder">
// //                   <div className="chart-icon"><FaChartLine size={50} color="#4CAF50" /></div>
// //                   <p>Medium-Term Forecast Chart</p>
// //                 </div>
// //               )}
// //               {activeTab === 'long' && (
// //                 <div className="chart-placeholder">
// //                   <div className="chart-icon"><FaChartPie size={50} color="#4CAF50" /></div>
// //                   <p>Long-Term Forecast Chart</p>
// //                 </div>
// //               )}
// //             </div>
            
// //             <div className="forecast-details">
// //               <h3>
// //                 {activeTab === 'short' && 'Short-Term Forecast (Next 3 Months)'}
// //                 {activeTab === 'medium' && 'Medium-Term Forecast (Next Year)'}
// //                 {activeTab === 'long' && 'Long-Term Forecast (Next 3 Years)'}
// //               </h3>
// //               <p>
// //                 {activeTab === 'short' && 'Market projections for the coming three months, based on current trends and seasonal factors.'}
// //                 {activeTab === 'medium' && 'One-year outlook considering broader economic factors and industry developments.'}
// //                 {activeTab === 'long' && 'Three-year projections taking into account long-term market shifts and policy changes.'}
// //               </p>
              
// //               <div className="forecast-metrics">
// //                 {forecastMetrics[activeTab].map((metric, index) => (
// //                   <div className="forecast-metric" key={index}>
// //                     <span className="metric-label">{metric.label}</span>
// //                     <span className={`metric-value ${metric.trend}`}>{metric.value}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default MarketInsights;


// import React, { useState, useEffect } from 'react';
// import { FaArrowUp, FaArrowDown, FaChartLine, FaChartBar, FaChartPie } from 'react-icons/fa';
// import './MarketInsights.css';

// const MarketInsights = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [activeTab, setActiveTab] = useState('short');

//   // Format currency in Indian Rupees
//   const formatCurrency = (value) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 0
//     }).format(value);
//   };

//   // Mock data for price trends - adapted for Indian crops and pricing
//   const priceTrends = [
//     { crop: 'Organic Wheat', currentPrice: formatCurrency(2200) + '/quintal', change: '+12%', trend: 'positive' },
//     { crop: 'Organic Rice', currentPrice: formatCurrency(3800) + '/quintal', change: '+8%', trend: 'positive' },
//     { crop: 'Organic Pulses', currentPrice: formatCurrency(7500) + '/quintal', change: '+15%', trend: 'positive' },
//     { crop: 'Conventional Wheat', currentPrice: formatCurrency(1850) + '/quintal', change: '-3%', trend: 'negative' },
//     { crop: 'Conventional Rice', currentPrice: formatCurrency(2100) + '/quintal', change: '-2%', trend: 'negative' },
//     { crop: 'Conventional Pulses', currentPrice: formatCurrency(5800) + '/quintal', change: '+1%', trend: 'positive' },
//     { crop: 'Organic Cotton', currentPrice: formatCurrency(7200) + '/quintal', change: '+20%', trend: 'positive' },
//     { crop: 'Organic Vegetables', currentPrice: formatCurrency(3500) + '/quintal', change: '-5%', trend: 'negative' },
//   ];

//   // Mock data for market insights - adapted for Indian context
//   const marketInsights = [
//     {
//       id: 1,
//       title: 'Growing Demand for Organic Produce in Metro Cities',
//       date: 'September 15, 2023',
//       description: 'Urban consumers in Delhi, Mumbai, and Bangalore are driving increased demand for certified organic produce, creating premium market opportunities.',
//       image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
//     },
//     {
//       id: 2,
//       title: 'e-NAM Platform Expanding Reach for Farmers',
//       date: 'September 10, 2023',
//       description: 'The National Agriculture Market (e-NAM) online trading platform is helping farmers access wider markets and secure better prices across state boundaries.',
//       image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
//     },
//     {
//       id: 3,
//       title: 'Monsoon Patterns Affecting Kharif Crop Selection',
//       date: 'September 5, 2023',
//       description: 'Changing monsoon patterns are prompting farmers to adapt with drought-resistant varieties and improved water management techniques in rain-fed regions.',
//       image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
//     }
//   ];

//   // Mock forecast metrics - adapted for Indian market
//   const forecastMetrics = {
//     short: [
//       { label: 'Organic Wheat Price', value: formatCurrency(2400) + '/quintal', trend: 'positive' },
//       { label: 'Organic Rice Price', value: formatCurrency(4000) + '/quintal', trend: 'positive' },
//       { label: 'Organic Demand Growth', value: '8%', trend: 'positive' },
//       { label: 'Input Cost Change', value: '+3%', trend: 'negative' },
//       { label: 'MSP Increase Projection', value: '+4%', trend: 'positive' }
//     ],
//     medium: [
//       { label: 'Organic Wheat Price', value: formatCurrency(2650) + '/quintal', trend: 'positive' },
//       { label: 'Organic Rice Price', value: formatCurrency(4300) + '/quintal', trend: 'positive' },
//       { label: 'Organic Demand Growth', value: '15%', trend: 'positive' },
//       { label: 'Input Cost Change', value: '+7%', trend: 'negative' },
//       { label: 'MSP Increase Projection', value: '+8%', trend: 'positive' }
//     ],
//     long: [
//       { label: 'Organic Wheat Price', value: formatCurrency(3200) + '/quintal', trend: 'positive' },
//       { label: 'Organic Rice Price', value: formatCurrency(5100) + '/quintal', trend: 'positive' },
//       { label: 'Organic Demand Growth', value: '25%', trend: 'positive' },
//       { label: 'Input Cost Change', value: '+12%', trend: 'negative' },
//       { label: 'MSP Increase Projection', value: '+15%', trend: 'positive' }
//     ]
//   };

//   // State data for regional insights
//   const [selectedState, setSelectedState] = useState('maharashtra');
  
//   // Regional market data for Indian states
//   const regionalMarketData = {
//     maharashtra: {
//       topCrops: ['Cotton', 'Soybeans', 'Sugarcane'],
//       marketGrowth: '14%',
//       organicPremium: '30-40%',
//       keyMarkets: 'Mumbai, Pune, Nagpur',
//       description: 'Maharashtra has strong demand for organic produce in urban centers, with cotton and soybeans showing highest organic premiums.'
//     },
//     punjab: {
//       topCrops: ['Wheat', 'Rice', 'Maize'],
//       marketGrowth: '10%',
//       organicPremium: '25-35%',
//       keyMarkets: 'Chandigarh, Ludhiana, Amritsar',
//       description: 'Punjab\'s well-established agricultural infrastructure supports efficient distribution of organic grains to northern markets.'
//     },
//     karnataka: {
//       topCrops: ['Coffee', 'Millets', 'Spices'],
//       marketGrowth: '18%',
//       organicPremium: '35-50%',
//       keyMarkets: 'Bangalore, Mysore, Mangalore',
//       description: 'Karnataka leads in organic coffee and millet production, with strong export potential and growing domestic consumption.'
//     },
//     tamilnadu: {
//       topCrops: ['Rice', 'Coconut', 'Vegetables'],
//       marketGrowth: '16%',
//       organicPremium: '30-45%',
//       keyMarkets: 'Chennai, Coimbatore, Madurai',
//       description: 'Tamil Nadu has growing demand for organic vegetables and rice, with established farmer producer organizations improving market access.'
//     },
//     gujarat: {
//       topCrops: ['Cotton', 'Groundnut', 'Spices'],
//       marketGrowth: '12%',
//       organicPremium: '28-38%',
//       keyMarkets: 'Ahmedabad, Surat, Vadodara',
//       description: 'Gujarat has strong organic cotton market with established export channels and growing domestic textile industry demand.'
//     }
//   };

//   return (
//     <div className="market-insights-page">
//       <section className="market-hero">
//         <div className="container">
//           <h1>Market Insights</h1>
//           <p className="market-hero-description">
//             Stay informed about Indian agricultural market trends, price forecasts, and consumer preferences to make data-driven decisions for your farm's profitability.
//           </p>
//         </div>
//       </section>

//       <section className="market-trends-section">
//         <div className="container">
//           <div className="section-title">
//             <h2>Current Market Trends</h2>
//           </div>
//           <div className="market-trends-container">
//             <div className="market-trends-content">
//               <h3>Sustainable Farming Market Overview - India</h3>
//               <p>
//                 The market for sustainably grown produce in India is experiencing robust growth, with organic products gaining significant traction in urban centers. Consumer awareness around food safety, health benefits, and environmental sustainability is driving demand for eco-friendly farming practices.
//               </p>
//               <p>
//                 Indian farmers adopting sustainable methods are accessing premium pricing opportunities, particularly through direct farmer-to-consumer platforms and specialized organic retailers. Government initiatives like Paramparagat Krishi Vikas Yojana (PKVY) and Mission Organic Value Chain Development are supporting this transition.
//               </p>
//               <p>
//                 Export opportunities for certified organic products continue to expand, with Indian organic products gaining recognition in international markets, especially for spices, tea, cotton, and basmati rice.
//               </p>
//             </div>
//             <div className="market-chart">
//               <div className="chart-placeholder">
//                 <div className="chart-icon"><FaChartLine size={50} color="#4CAF50" /></div>
//                 <p>Indian Organic Market Growth (2018-2023)</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="price-trends-section">
//         <div className="container">
//           <div className="section-title">
//             <h2>Crop Price Trends</h2>
//           </div>
//           <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
//             Current market prices and trends for key Indian crops, comparing organic and conventional farming.
//           </p>
//           <table className="price-table">
//             <thead>
//               <tr>
//                 <th>Crop</th>
//                 <th>Current Price</th>
//                 <th>Change (YoY)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {priceTrends.map((crop, index) => (
//                 <tr key={index}>
//                   <td>{crop.crop}</td>
//                   <td>{crop.currentPrice}</td>
//                   <td>
//                     <span className={`price-change ${crop.trend}`}>
//                       <span className="price-change-icon">
//                         {crop.trend === 'positive' ? <FaArrowUp /> : <FaArrowDown />}
//                       </span>
//                       {crop.change}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
          
//           <div className="section-title" style={{ marginTop: 'var(--spacing-xxl)' }}>
//             <h2>Latest Market Insights</h2>
//           </div>
//           <div className="market-insights-grid">
//             {marketInsights.map(insight => (
//               <div className="insight-card" key={insight.id}>
//                 <div className="insight-image">
//                   <img src={insight.image} alt={insight.title} />
//                 </div>
//                 <div className="insight-content">
//                   <h3 className="insight-title">{insight.title}</h3>
//                   <span className="insight-date">{insight.date}</span>
//                   <p className="insight-description">{insight.description}</p>
//                   <a href="#" className="btn">Read More</a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="regional-insights-section">
//         <div className="container">
//           <div className="section-title">
//             <h2>Regional Market Insights</h2>
//           </div>
//           <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
//             Explore market trends specific to different agricultural regions of India.
//           </p>
          
//           <div className="state-selector">
//             <select 
//               value={selectedState} 
//               onChange={(e) => setSelectedState(e.target.value)}
//               className="form-select"
//             >
//               <option value="maharashtra">Maharashtra</option>
//               <option value="punjab">Punjab</option>
//               <option value="karnataka">Karnataka</option>
//               <option value="tamilnadu">Tamil Nadu</option>
//               <option value="gujarat">Gujarat</option>
//             </select>
//           </div>
          
//           <div className="regional-insights-card">
//             <h3>{selectedState.charAt(0).toUpperCase() + selectedState.slice(1)} Market Overview</h3>
            
//             <div className="regional-insights-content">
//               <div className="regional-insights-metrics">
//                 <div className="regional-metric">
//                   <span className="metric-label">Top Organic Crops</span>
//                   <span className="metric-value">{regionalMarketData[selectedState].topCrops.join(', ')}</span>
//                 </div>
//                 <div className="regional-metric">
//                   <span className="metric-label">Market Growth (YoY)</span>
//                   <span className="metric-value positive">{regionalMarketData[selectedState].marketGrowth}</span>
//                 </div>
//                 <div className="regional-metric">
//                   <span className="metric-label">Organic Premium</span>
//                   <span className="metric-value positive">{regionalMarketData[selectedState].organicPremium}</span>
//                 </div>
//                 <div className="regional-metric">
//                   <span className="metric-label">Key Markets</span>
//                   <span className="metric-value">{regionalMarketData[selectedState].keyMarkets}</span>
//                 </div>
//               </div>
              
//               <div className="regional-insights-description">
//                 <p>{regionalMarketData[selectedState].description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="forecast-section">
//         <div className="container">
//           <div className="section-title">
//             <h2>Market Forecasts</h2>
//           </div>
//           <div className="forecast-tabs">
//             <div 
//               className={`forecast-tab ${activeTab === 'short' ? 'active' : ''}`}
//               onClick={() => setActiveTab('short')}
//             >
//               Short-Term (3 Months)
//             </div>
//             <div 
//               className={`forecast-tab ${activeTab === 'medium' ? 'active' : ''}`}
//               onClick={() => setActiveTab('medium')}
//             >
//               Medium-Term (1 Year)
//             </div>
//             <div 
//               className={`forecast-tab ${activeTab === 'long' ? 'active' : ''}`}
//               onClick={() => setActiveTab('long')}
//             >
//               Long-Term (3 Years)
//             </div>
//           </div>
          
//           <div className="forecast-content">
//             <div className="forecast-chart">
//               {activeTab === 'short' && (
//                 <div className="chart-placeholder">
//                   <div className="chart-icon"><FaChartBar size={50} color="#4CAF50" /></div>
//                   <p>Short-Term Forecast Chart</p>
//                 </div>
//               )}
//               {activeTab === 'medium' && (
//                 <div className="chart-placeholder">
//                   <div className="chart-icon"><FaChartLine size={50} color="#4CAF50" /></div>
//                   <p>Medium-Term Forecast Chart</p>
//                 </div>
//               )}
//               {activeTab === 'long' && (
//                 <div className="chart-placeholder">
//                   <div className="chart-icon"><FaChartPie size={50} color="#4CAF50" /></div>
//                   <p>Long-Term Forecast Chart</p>
//                 </div>
//               )}
//             </div>
            
//             <div className="forecast-details">
//               <h3>
//                 {activeTab === 'short' && 'Short-Term Forecast (Next 3 Months)'}
//                 {activeTab === 'medium' && 'Medium-Term Forecast (Next Year)'}
//                 {activeTab === 'long' && 'Long-Term Forecast (Next 3 Years)'}
//               </h3>
//               <p>
//                 {activeTab === 'short' && 'Market projections for the coming three months, based on current trends, seasonal factors, and upcoming harvest season expectations.'}
//                 {activeTab === 'medium' && 'One-year outlook considering broader economic factors, government policies, and anticipated monsoon patterns.'}
//                 {activeTab === 'long' && 'Three-year projections taking into account long-term market shifts, agricultural policy changes, and climate adaptation strategies.'}
//               </p>
              
//               <div className="forecast-metrics">
//                 {forecastMetrics[activeTab].map((metric, index) => (
//                   <div className="forecast-metric" key={index}>
//                     <span className="metric-label">{metric.label}</span>
//                     <span className={`metric-value ${metric.trend}`}>{metric.value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <section className="market-resources-section">
//         <div className="container">
//           <div className="section-title">
//             <h2>Indian Agricultural Market Resources</h2>
//           </div>
//           <div className="resources-grid">
//             <div className="resource-card">
//               <h3>e-NAM Portal</h3>
//               <p>Access the National Agriculture Market for real-time price information and online trading opportunities.</p>
//               <a href="https://enam.gov.in" target="_blank" rel="noopener noreferrer" className="btn">Visit Portal</a>
//             </div>
//             <div className="resource-card">
//               <h3>Agmarknet</h3>
//               <p>Comprehensive database of market prices across major agricultural markets in India.</p>
//               <a href="https://agmarknet.gov.in" target="_blank" rel="noopener noreferrer" className="btn">Check Prices</a>
//             </div>
//             <div className="resource-card">
//               <h3>APEDA</h3>
//               <p>Information on export opportunities, certification requirements, and international market trends.</p>
//               <a href="https://apeda.gov.in" target="_blank" rel="noopener noreferrer" className="btn">Explore Exports</a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MarketInsights;



import React, { useState, useEffect, useRef } from 'react';
import { FaArrowUp, FaArrowDown, FaChartLine, FaChartBar, FaChartPie, FaInfoCircle } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import './MarketInsights.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MarketInsights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('short');
  const [chartView, setChartView] = useState('value'); // 'value' or 'growth'

  // Format currency in Indian Rupees
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Indian Organic Market Growth Data (in Crores INR)
  const organicMarketData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024*', '2025*'],
    datasets: [
      {
        label: 'Market Size (₹ Crores)',
        data: [5200, 6800, 8500, 11000, 14500, 18000, 22500, 27000], // Historical + Projected
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#4CAF50',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ]
  };

  // Indian Organic Market Growth Percentage
  const organicMarketGrowthData = {
    labels: ['2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24*', '2024-25*'],
    datasets: [
      {
        label: 'YoY Growth (%)',
        data: [30.8, 25.0, 29.4, 31.8, 24.1, 25.0, 20.0], // Historical + Projected
        borderColor: '#FF9800',
        backgroundColor: 'rgba(255, 152, 0, 0.1)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#FF9800',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ]
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (chartView === 'value') {
              return label + formatCurrency(context.parsed.y) + ' Crores';
            } else {
              return label + context.parsed.y + '%';
            }
          },
          title: function(context) {
            if (chartView === 'value') {
              if (context[0].label.includes('*')) {
                return context[0].label + ' (Projected)';
              }
              return context[0].label;
            } else {
              if (context[0].label.includes('*')) {
                return context[0].label + ' (Projected)';
              }
              return context[0].label;
            }
          }
        }
      },
      title: {
        display: true,
        text: chartView === 'value' 
          ? 'Indian Organic Market Size (2018-2025)' 
          : 'Indian Organic Market Growth Rate (2018-2025)',
        font: {
          size: 16,
          weight: 'bold'
        },
        padding: {
          top: 10,
          bottom: 20
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          font: {
            size: 12
          },
          callback: function(value) {
            if (chartView === 'value') {
              return '₹' + value.toLocaleString('en-IN') + ' Cr';
            } else {
              return value + '%';
            }
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      line: {
        borderWidth: 3
      }
    }
  };

  // Mock data for price trends - adapted for Indian crops and pricing
  const priceTrends = [
    { crop: 'Organic Wheat', currentPrice: formatCurrency(2200) + '/quintal', change: '+12%', trend: 'positive' },
    { crop: 'Organic Rice', currentPrice: formatCurrency(3800) + '/quintal', change: '+8%', trend: 'positive' },
    { crop: 'Organic Pulses', currentPrice: formatCurrency(7500) + '/quintal', change: '+15%', trend: 'positive' },
    { crop: 'Conventional Wheat', currentPrice: formatCurrency(1850) + '/quintal', change: '-3%', trend: 'negative' },
    { crop: 'Conventional Rice', currentPrice: formatCurrency(2100) + '/quintal', change: '-2%', trend: 'negative' },
    { crop: 'Conventional Pulses', currentPrice: formatCurrency(5800) + '/quintal', change: '+1%', trend: 'positive' },
    { crop: 'Organic Cotton', currentPrice: formatCurrency(7200) + '/quintal', change: '+20%', trend: 'positive' },
    { crop: 'Organic Vegetables', currentPrice: formatCurrency(3500) + '/quintal', change: '-5%', trend: 'negative' },
  ];

  // Mock data for market insights - adapted for Indian context
  const marketInsights = [
    {
      id: 1,
      title: 'Growing Demand for Organic Produce in Metro Cities',
      date: 'September 15, 2023',
      description: 'Urban consumers in Delhi, Mumbai, and Bangalore are driving increased demand for certified organic produce, creating premium market opportunities.',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'e-NAM Platform Expanding Reach for Farmers',
      date: 'September 10, 2023',
      description: 'The National Agriculture Market (e-NAM) online trading platform is helping farmers access wider markets and secure better prices across state boundaries.',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      title: 'Monsoon Patterns Affecting Kharif Crop Selection',
      date: 'September 5, 2023',
      description: 'Changing monsoon patterns are prompting farmers to adapt with drought-resistant varieties and improved water management techniques in rain-fed regions.',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  // Mock forecast metrics - adapted for Indian market
  const forecastMetrics = {
    short: [
      { label: 'Organic Wheat Price', value: formatCurrency(2400) + '/quintal', trend: 'positive' },
      { label: 'Organic Rice Price', value: formatCurrency(4000) + '/quintal', trend: 'positive' },
      { label: 'Organic Demand Growth', value: '8%', trend: 'positive' },
      { label: 'Input Cost Change', value: '+3%', trend: 'negative' },
      { label: 'MSP Increase Projection', value: '+4%', trend: 'positive' }
    ],
    medium: [
      { label: 'Organic Wheat Price', value: formatCurrency(2650) + '/quintal', trend: 'positive' },
      { label: 'Organic Rice Price', value: formatCurrency(4300) + '/quintal', trend: 'positive' },
      { label: 'Organic Demand Growth', value: '15%', trend: 'positive' },
      { label: 'Input Cost Change', value: '+7%', trend: 'negative' },
      { label: 'MSP Increase Projection', value: '+8%', trend: 'positive' }
    ],
    long: [
      { label: 'Organic Wheat Price', value: formatCurrency(3200) + '/quintal', trend: 'positive' },
      { label: 'Organic Rice Price', value: formatCurrency(5100) + '/quintal', trend: 'positive' },
      { label: 'Organic Demand Growth', value: '25%', trend: 'positive' },
      { label: 'Input Cost Change', value: '+12%', trend: 'negative' },
      { label: 'MSP Increase Projection', value: '+15%', trend: 'positive' }
    ]
  };

  // State data for regional insights
  const [selectedState, setSelectedState] = useState('maharashtra');
  
  // Regional market data for Indian states
  const regionalMarketData = {
    maharashtra: {
      topCrops: ['Cotton', 'Soybeans', 'Sugarcane'],
      marketGrowth: '14%',
      organicPremium: '30-40%',
      keyMarkets: 'Mumbai, Pune, Nagpur',
      description: 'Maharashtra has strong demand for organic produce in urban centers, with cotton and soybeans showing highest organic premiums.'
    },
    punjab: {
      topCrops: ['Wheat', 'Rice', 'Maize'],
      marketGrowth: '10%',
      organicPremium: '25-35%',
      keyMarkets: 'Chandigarh, Ludhiana, Amritsar',
      description: 'Punjab\'s well-established agricultural infrastructure supports efficient distribution of organic grains to northern markets.'
    },
    karnataka: {
      topCrops: ['Coffee', 'Millets', 'Spices'],
      marketGrowth: '18%',
      organicPremium: '35-50%',
      keyMarkets: 'Bangalore, Mysore, Mangalore',
      description: 'Karnataka leads in organic coffee and millet production, with strong export potential and growing domestic consumption.'
    },
    tamilnadu: {
      topCrops: ['Rice', 'Coconut', 'Vegetables'],
      marketGrowth: '16%',
      organicPremium: '30-45%',
      keyMarkets: 'Chennai, Coimbatore, Madurai',
      description: 'Tamil Nadu has growing demand for organic vegetables and rice, with established farmer producer organizations improving market access.'
    },
    gujarat: {
      topCrops: ['Cotton', 'Groundnut', 'Spices'],
      marketGrowth: '12%',
      organicPremium: '28-38%',
      keyMarkets: 'Ahmedabad, Surat, Vadodara',
      description: 'Gujarat has strong organic cotton market with established export channels and growing domestic textile industry demand.'
    }
  };

  return (
    <div className="market-insights-page">
      <section className="market-hero">
        <div className="container">
          <h1>Market Insights</h1>
          <p className="market-hero-description">
            Stay informed about Indian agricultural market trends, price forecasts, and consumer preferences to make data-driven decisions for your farm's profitability.
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
              <h3>Sustainable Farming Market Overview - India</h3>
              <p>
                The market for sustainably grown produce in India is experiencing robust growth, with organic products gaining significant traction in urban centers. Consumer awareness around food safety, health benefits, and environmental sustainability is driving demand for eco-friendly farming practices.
              </p>
              <p>
                Indian farmers adopting sustainable methods are accessing premium pricing opportunities, particularly through direct farmer-to-consumer platforms and specialized organic retailers. Government initiatives like Paramparagat Krishi Vikas Yojana (PKVY) and Mission Organic Value Chain Development are supporting this transition.
              </p>
              <p>
                Export opportunities for certified organic products continue to expand, with Indian organic products gaining recognition in international markets, especially for spices, tea, cotton, and basmati rice.
              </p>
            </div>
            <div className="market-chart">
              <div className="chart-container">
                <div className="chart-toggle">
                  <button 
                    className={`chart-toggle-btn ${chartView === 'value' ? 'active' : ''}`}
                    onClick={() => setChartView('value')}
                  >
                    Market Size
                  </button>
                  <button 
                    className={`chart-toggle-btn ${chartView === 'growth' ? 'active' : ''}`}
                    onClick={() => setChartView('growth')}
                  >
                    Growth Rate
                  </button>
                </div>
                <div className="chart-wrapper">
                  {chartView === 'value' ? (
                    <Line 
                      data={organicMarketData} 
                      options={chartOptions}
                      height={300}
                    />
                  ) : (
                    <Line 
                      data={organicMarketGrowthData} 
                      options={chartOptions}
                      height={300}
                    />
                  )}
                </div>
                <div className="chart-note">
                  <FaInfoCircle /> Data from 2024-2025 are projections based on current growth trends and market analysis.
                </div>
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
            Current market prices and trends for key Indian crops, comparing organic and conventional farming.
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

      {/* Rest of the component remains the same */}
      <section className="regional-insights-section">
        <div className="container">
          <div className="section-title">
            <h2>Regional Market Insights</h2>
          </div>
          <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Explore market trends specific to different agricultural regions of India.
          </p>
          
          <div className="state-selector">
            <select 
              value={selectedState} 
              onChange={(e) => setSelectedState(e.target.value)}
              className="form-select"
            >
              <option value="maharashtra">Maharashtra</option>
              <option value="punjab">Punjab</option>
              <option value="karnataka">Karnataka</option>
              <option value="tamilnadu">Tamil Nadu</option>
              <option value="gujarat">Gujarat</option>
            </select>
          </div>
          
          <div className="regional-insights-card">
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
                {activeTab === 'short' && 'Market projections for the coming three months, based on current trends, seasonal factors, and upcoming harvest season expectations.'}
                {activeTab === 'medium' && 'One-year outlook considering broader economic factors, government policies, and anticipated monsoon patterns.'}
                {activeTab === 'long' && 'Three-year projections taking into account long-term market shifts, agricultural policy changes, and climate adaptation strategies.'}
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
      
      <section className="market-resources-section">
        <div className="container">
          <div className="section-title">
            <h2>Indian Agricultural Market Resources</h2>
          </div>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>e-NAM Portal</h3>
              <p>Access the National Agriculture Market for real-time price information and online trading opportunities.</p>
              <a href="https://enam.gov.in" target="_blank" rel="noopener noreferrer" className="btn">Visit Portal</a>
            </div>
            <div className="resource-card">
              <h3>Agmarknet</h3>
              <p>Comprehensive database of market prices across major agricultural markets in India.</p>
              <a href="https://agmarknet.gov.in" target="_blank" rel="noopener noreferrer" className="btn">Check Prices</a>
            </div>
            <div className="resource-card">
              <h3>APEDA</h3>
              <p>Information on export opportunities, certification requirements, and international market trends.</p>
              <a href="https://apeda.gov.in" target="_blank" rel="noopener noreferrer" className="btn">Explore Exports</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketInsights;