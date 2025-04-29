import React, { useState, useEffect } from 'react';
import { FaCalculator, FaFileDownload, FaRedo, FaExchangeAlt } from 'react-icons/fa';
import { Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import './ProfitCalculator.css';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ProfitCalculator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    // Farm details
    farmSize: 5, // Smaller typical farm size in India (in acres)
    location: 'north',
    farmingType: 'organic',
    
    // Crop details
    cropType: 'wheat',
    expectedYield: 20, // Quintals per acre for Indian context
    marketPrice: 2200, // Price in ₹ per quintal
    
    // Expenses (in ₹)
    seedCost: 5000,
    fertilizerCost: 3500,
    pestControlCost: 2000,
    irrigationCost: 4000,
    laborCost: 12000,
    equipmentCost: 8000,
    certificationCost: 6000,
    otherCosts: 3000,
    
    // Sustainability options
    useRenewableEnergy: false,
    useWaterConservation: false,
    useSustainablePractices: true
  });

  // Results state
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [comparisonMode, setComparisonMode] = useState(false);
  const [conventionalResults, setConventionalResults] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseFloat(value) : value
    }));
  };

  // Calculate profits
  const calculateProfit = () => {
    // Calculate total revenue
    const totalRevenue = formData.expectedYield * formData.marketPrice * formData.farmSize;
    
    // Calculate total expenses
    const totalExpenses = 
      formData.seedCost + 
      formData.fertilizerCost + 
      formData.pestControlCost + 
      formData.irrigationCost + 
      formData.laborCost + 
      formData.equipmentCost + 
      formData.certificationCost + 
      formData.otherCosts;
    
    // Calculate sustainability benefits in Indian Rupees
    let sustainabilityBenefits = 0;
    if (formData.useRenewableEnergy) sustainabilityBenefits += 5000; // Solar energy savings
    if (formData.useWaterConservation) sustainabilityBenefits += 7000; // Water conservation savings
    if (formData.useSustainablePractices) sustainabilityBenefits += 10000; // Soil health benefits
    
    // Calculate net profit
    const netProfit = totalRevenue - totalExpenses + sustainabilityBenefits;
    
    // Calculate profit per acre
    const profitPerAcre = netProfit / formData.farmSize;
    
    // Calculate expense breakdown for chart
    const expenseBreakdown = {
      seedCost: formData.seedCost,
      fertilizerCost: formData.fertilizerCost,
      pestControlCost: formData.pestControlCost,
      irrigationCost: formData.irrigationCost,
      laborCost: formData.laborCost,
      equipmentCost: formData.equipmentCost,
      certificationCost: formData.certificationCost,
      otherCosts: formData.otherCosts
    };
    
    // Return results
    return {
      totalRevenue,
      totalExpenses,
      sustainabilityBenefits,
      netProfit,
      profitPerAcre,
      expenseBreakdown,
      roi: (netProfit / totalExpenses) * 100
    };
  };

  // Calculate conventional farming profits for comparison
  const calculateConventionalProfit = () => {
    // Adjust values for conventional farming in Indian context
    const conventionalYield = formData.expectedYield * 0.9; // Typically lower yield
    const conventionalPrice = formData.marketPrice * 0.7; // Lower market price
    const totalRevenue = conventionalYield * conventionalPrice * formData.farmSize;
    
    // Conventional expenses are different (adjusted for Indian farming)
    const seedCost = formData.seedCost * 0.8;
    const fertilizerCost = formData.fertilizerCost * 1.5;
    const pestControlCost = formData.pestControlCost * 2;
    const irrigationCost = formData.irrigationCost * 1.2;
    const laborCost = formData.laborCost * 0.9;
    const equipmentCost = formData.equipmentCost * 0.9;
    const certificationCost = 0; // No certification cost
    const otherCosts = formData.otherCosts * 0.9;
    
    const totalExpenses = 
      seedCost + 
      fertilizerCost + 
      pestControlCost + 
      irrigationCost + 
      laborCost + 
      equipmentCost + 
      certificationCost + 
      otherCosts;
    
    // No sustainability benefits
    const sustainabilityBenefits = 0;
    
    // Calculate net profit
    const netProfit = totalRevenue - totalExpenses + sustainabilityBenefits;
    
    // Calculate profit per acre
    const profitPerAcre = netProfit / formData.farmSize;
    
    // Calculate expense breakdown for chart
    const expenseBreakdown = {
      seedCost,
      fertilizerCost,
      pestControlCost,
      irrigationCost,
      laborCost,
      equipmentCost,
      certificationCost,
      otherCosts
    };
    
    // Return results
    return {
      totalRevenue,
      totalExpenses,
      sustainabilityBenefits,
      netProfit,
      profitPerAcre,
      expenseBreakdown,
      roi: (netProfit / totalExpenses) * 100
    };
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Calculate profits
    const profitResults = calculateProfit();
    setResults(profitResults);
    
    // Calculate conventional results for comparison
    const conventionalProfitResults = calculateConventionalProfit();
    setConventionalResults(conventionalProfitResults);
    
    // Show results
    setShowResults(true);
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      farmSize: 5,
      location: 'north',
      farmingType: 'organic',
      cropType: 'wheat',
      expectedYield: 20,
      marketPrice: 2200,
      seedCost: 5000,
      fertilizerCost: 3500,
      pestControlCost: 2000,
      irrigationCost: 4000,
      laborCost: 12000,
      equipmentCost: 8000,
      certificationCost: 6000,
      otherCosts: 3000,
      useRenewableEnergy: false,
      useWaterConservation: false,
      useSustainablePractices: true
    });
    setResults(null);
    setShowResults(false);
    setComparisonMode(false);
  };

  // Format currency for Indian Rupees
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0 // No decimal places for Rupees
    }).format(value);
  };

  // Prepare chart data for profit breakdown
  const getProfitBreakdownChartData = () => {
    if (!results) return null;
    
    return {
      labels: ['Revenue', 'Expenses', 'Sustainability Benefits'],
      datasets: [
        {
          data: [results.totalRevenue, -results.totalExpenses, results.sustainabilityBenefits],
          backgroundColor: ['#4CAF50', '#F44336', '#2196F3'],
          hoverBackgroundColor: ['#388E3C', '#D32F2F', '#1976D2'],
          borderWidth: 1,
        },
      ],
    };
  };

  // Prepare chart data for expense breakdown
  const getExpenseBreakdownChartData = () => {
    if (!results) return null;
    
    const { expenseBreakdown } = results;
    
    return {
      labels: [
        'Seeds', 
        'Fertilizer', 
        'Pest Control', 
        'Irrigation', 
        'Labor', 
        'Equipment', 
        'Certification', 
        'Other'
      ],
      datasets: [
        {
          data: [
            expenseBreakdown.seedCost,
            expenseBreakdown.fertilizerCost,
            expenseBreakdown.pestControlCost,
            expenseBreakdown.irrigationCost,
            expenseBreakdown.laborCost,
            expenseBreakdown.equipmentCost,
            expenseBreakdown.certificationCost,
            expenseBreakdown.otherCosts
          ],
          backgroundColor: [
            '#FF9800', // Seeds
            '#8BC34A', // Fertilizer
            '#E91E63', // Pest Control
            '#03A9F4', // Irrigation
            '#9C27B0', // Labor
            '#795548', // Equipment
            '#607D8B', // Certification
            '#9E9E9E'  // Other
          ],
          hoverBackgroundColor: [
            '#F57C00', // Seeds
            '#689F38', // Fertilizer
            '#C2185B', // Pest Control
            '#0288D1', // Irrigation
            '#7B1FA2', // Labor
            '#5D4037', // Equipment
            '#455A64', // Certification
            '#757575'  // Other
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 15,
          padding: 15,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            let value = context.raw;
            if (context.datasetIndex === 0 && context.dataIndex === 1) {
              // For expenses, show positive value in tooltip
              value = Math.abs(value);
            }
            return label + formatCurrency(value);
          }
        }
      }
    }
  };

  return (
    <div className="profit-calculator-page">
      <section className="calculator-hero">
        <div className="container">
          <h1>Green Verse</h1>
          <p className="calculator-hero-description">
            Estimate your farm's potential profits using sustainable farming practices. Compare with conventional methods to see the financial benefits of sustainable agriculture in India.
          </p>
        </div>
      </section>

      <section className="calculator-section">
        <div className="container">
          <div className="calculator-container">
            <div className="calculator-form">
              <form onSubmit={handleSubmit}>
                <div className="form-section">
                  <h3 className="form-section-title">Farm Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="farmSize">Farm Size (acres)</label>
                      <input
                        type="number"
                        className="form-control"
                        id="farmSize"
                        name="farmSize"
                        value={formData.farmSize}
                        onChange={handleInputChange}
                        min="1"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="location">Location</label>
                      <select
                        className="form-select"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="north">North India</option>
                        <option value="south">South India</option>
                        <option value="east">East India</option>
                        <option value="west">West India</option>
                        <option value="central">Central India</option>
                        <option value="northeast">Northeast India</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="farmingType">Farming Type</label>
                    <select
                      className="form-select"
                      id="farmingType"
                      name="farmingType"
                      value={formData.farmingType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="organic">Organic</option>
                      <option value="regenerative">Regenerative</option>
                      <option value="biodynamic">Biodynamic</option>
                      <option value="permaculture">Permaculture</option>
                      <option value="integrated">Integrated</option>
                    </select>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Crop Details</h3>
                  <div className="form-group">
                    <label className="form-label" htmlFor="cropType">Primary Crop</label>
                    <select
                      className="form-select"
                      id="cropType"
                      name="cropType"
                      value={formData.cropType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="wheat">Wheat</option>
                      <option value="rice">Rice</option>
                      <option value="pulses">Pulses</option>
                      <option value="vegetables">Vegetables</option>
                      <option value="fruits">Fruits</option>
                      <option value="cotton">Cotton</option>
                      <option value="sugarcane">Sugarcane</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="expectedYield">Expected Yield (quintals/acre)</label>
                      <input
                        type="number"
                        className="form-control"
                        id="expectedYield"
                        name="expectedYield"
                        value={formData.expectedYield}
                        onChange={handleInputChange}
                        min="1"
                        required
                      />
                      <span className="form-hint">Average yield per acre</span>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="marketPrice">Market Price (₹/quintal)</label>
                      <input
                        type="number"
                        className="form-control"
                        id="marketPrice"
                        name="marketPrice"
                        value={formData.marketPrice}
                        onChange={handleInputChange}
                        min="1"
                        step="1"
                        required
                      />
                      <span className="form-hint">Current market price per quintal</span>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Expenses</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="seedCost">Seed Cost (₹)</label>
                      <input
                        type="number"
                        className="form-control"
                        id="seedCost"
                        name="seedCost"
                        value={formData.seedCost}
                        onChange={handleInputChange}
                        min="0"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="fertilizerCost">Fertilizer Cost (₹)</label>
                      <input
                        type="number"
                        className="form-control"
                        id="fertilizerCost"
                        name="fertilizerCost"
                        value={formData.fertilizerCost}
                        onChange={handleInputChange}
                        min="0"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="pestControlCost">Pest Control Cost (₹)</label>
                      <input
                        type="number"
                        className="form-control"
                        id="pestControlCost"
                        name="pestControlCost"
                        value={formData.pestControlCost}
                        onChange={handleInputChange}
                        min="0"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="irrigationCost">Irrigation Cost (₹)</label>
                      <input
                        type="number"
                        className="form-control"
                        id="irrigationCost"
                        name="irrigationCost"
                        value={formData.irrigationCost}
                        onChange={handleInputChange}
                        min="0"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="laborCost">Labor Cost (₹)</label>
                      <input
                        type="number"
                        className="form-control"
                        id="laborCost"
                        name="laborCost"
                        value={formData.laborCost}
                        onChange={handleInputChange}
                        min="0"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="equipmentCost">Equipment Cost (₹)</label>
                      <input
                        type="number"
                        className="form-control"
                        id="equipmentCost"
                        name="equipmentCost"
                        value={formData.equipmentCost}
                        onChange={handleInputChange}
                        min="0"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="certificationCost">Certification Cost (₹)</label>
                      <input
                        type="number"
                        className="form-control"
                        id="certificationCost"
                        name="certificationCost"
                        value={formData.certificationCost}
                        onChange={handleInputChange}
                        min="0"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="otherCosts">Other Costs (₹)</label>
                      <input
                        type="number"
                        className="form-control"
                        id="otherCosts"
                        name="otherCosts"
                        value={formData.otherCosts}
                        onChange={handleInputChange}
                        min="0"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Sustainability Options</h3>
                  <div className="form-group">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          name="useRenewableEnergy"
                          checked={formData.useRenewableEnergy}
                          onChange={handleInputChange}
                        />
                        <span className="slider"></span>
                      </label>
                      <span className="toggle-label">Use Renewable Energy (Solar Pumps)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          name="useWaterConservation"
                          checked={formData.useWaterConservation}
                          onChange={handleInputChange}
                        />
                        <span className="slider"></span>
                      </label>
                      <span className="toggle-label">Implement Water Conservation (Drip Irrigation)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          name="useSustainablePractices"
                          checked={formData.useSustainablePractices}
                          onChange={handleInputChange}
                        />
                        <span className="slider"></span>
                      </label>
                      <span className="toggle-label">Use Sustainable Soil Practices (Vermicomposting)</span>
                    </div>
                  </div>
                </div>

                <div className="form-buttons">
                  <button type="button" className="btn btn-secondary" onClick={handleReset}>
                    <FaRedo style={{ marginRight: '8px' }} /> Reset
                  </button>
                  <button type="submit" className="btn">
                    <FaCalculator style={{ marginRight: '8px' }} /> Calculate Profit
                  </button>
                </div>
              </form>
            </div>

            {showResults && results && (
              <div className="calculator-results">
                <h3 className="results-title">Profit Analysis</h3>
                
                <div className="results-summary">
                  <div className={`profit-amount ${results.netProfit < 0 ? 'negative' : ''}`}>
                    {formatCurrency(results.netProfit)}
                  </div>
                  <div className="profit-label">Estimated Net Profit</div>
                </div>
                
                <div className="charts-container">
                  <div className="chart-tabs">
                    <button className="chart-tab active">Profit Breakdown</button>
                    <button className="chart-tab">Expense Details</button>
                  </div>
                  
                  <div className="chart-container">
                    {getProfitBreakdownChartData() && (
                      <Doughnut 
                        data={getProfitBreakdownChartData()} 
                        options={{
                          ...chartOptions,
                          plugins: {
                            ...chartOptions.plugins,
                            title: {
                              display: true,
                              text: 'Profit Breakdown',
                              font: {
                                size: 16
                              }
                            }
                          }
                        }} 
                      />
                    )}
                  </div>
                  
                  <div className="chart-container" style={{ display: 'none' }}>
                    {getExpenseBreakdownChartData() && (
                      <Pie 
                        data={getExpenseBreakdownChartData()} 
                        options={{
                          ...chartOptions,
                          plugins: {
                            ...chartOptions.plugins,
                            title: {
                              display: true,
                              text: 'Expense Breakdown',
                              font: {
                                size: 16
                              }
                            }
                          }
                        }} 
                      />
                    )}
                  </div>
                </div>
                
                <div className="results-details">
                  <div className="result-item">
                    <span className="result-label">Total Revenue:</span>
                    <span className="result-value">{formatCurrency(results.totalRevenue)}</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Total Expenses:</span>
                    <span className="result-value">{formatCurrency(results.totalExpenses)}</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Sustainability Benefits:</span>
                    <span className="result-value">{formatCurrency(results.sustainabilityBenefits)}</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Profit per Acre:</span>
                    <span className="result-value">{formatCurrency(results.profitPerAcre)}</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Return on Investment:</span>
                    <span className="result-value">{results.roi.toFixed(2)}%</span>
                  </div>
                </div>
                
                <div className="results-actions">
                  <button className="btn btn-secondary">
                    <FaFileDownload style={{ marginRight: '8px' }} /> Download Report
                  </button>
                  <button 
                    className="btn" 
                    onClick={() => setComparisonMode(!comparisonMode)}
                  >
                    <FaExchangeAlt style={{ marginRight: '8px' }} />
                    {comparisonMode ? 'Hide Comparison' : 'Compare with Conventional'}
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {comparisonMode && results && conventionalResults && (
            <div className="comparison-section" style={{ marginTop: 'var(--spacing-xl)' }}>
              <div className="section-title">
                <h2>Sustainable vs. Conventional Comparison</h2>
              </div>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Sustainable Farming</th>
                    <th>Conventional Farming</th>
                    <th>Difference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Total Revenue</td>
                    <td>{formatCurrency(results.totalRevenue)}</td>
                    <td>{formatCurrency(conventionalResults.totalRevenue)}</td>
                    <td>{formatCurrency(results.totalRevenue - conventionalResults.totalRevenue)}</td>
                  </tr>
                  <tr>
                    <td>Total Expenses</td>
                    <td>{formatCurrency(results.totalExpenses)}</td>
                    <td>{formatCurrency(conventionalResults.totalExpenses)}</td>
                    <td>{formatCurrency(conventionalResults.totalExpenses - results.totalExpenses)}</td>
                  </tr>
                  <tr>
                    <td>Sustainability Benefits</td>
                    <td>{formatCurrency(results.sustainabilityBenefits)}</td>
                    <td>{formatCurrency(conventionalResults.sustainabilityBenefits)}</td>
                    <td>{formatCurrency(results.sustainabilityBenefits - conventionalResults.sustainabilityBenefits)}</td>
                  </tr>
                  <tr>
                    <td>Net Profit</td>
                    <td>{formatCurrency(results.netProfit)}</td>
                    <td>{formatCurrency(conventionalResults.netProfit)}</td>
                    <td>{formatCurrency(results.netProfit - conventionalResults.netProfit)}</td>
                  </tr>
                  <tr>
                    <td>Profit per Acre</td>
                    <td>{formatCurrency(results.profitPerAcre)}</td>
                    <td>{formatCurrency(conventionalResults.profitPerAcre)}</td>
                    <td>{formatCurrency(results.profitPerAcre - conventionalResults.profitPerAcre)}</td>
                  </tr>
                  <tr>
                    <td>Return on Investment</td>
                    <td>{results.roi.toFixed(2)}%</td>
                    <td>{conventionalResults.roi.toFixed(2)}%</td>
                    <td>{(results.roi - conventionalResults.roi).toFixed(2)}%</td>
                  </tr>
                </tbody>
              </table>
              
              <div style={{ marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-xl)' }}>
                <h3 className="section-subtitle">Visual Comparison</h3>
                <div className="comparison-charts">
                  {results && conventionalResults && (
                    <div className="comparison-chart-container">
                      <Doughnut
                        data={{
                          labels: ['Revenue', 'Expenses', 'Sustainability'],
                          datasets: [
                            {
                              label: 'Sustainable',
                              data: [
                                results.totalRevenue,
                                results.totalExpenses,
                                results.sustainabilityBenefits
                              ],
                              backgroundColor: ['#4CAF50', '#F44336', '#2196F3'],
                              borderWidth: 0,
                            },
                            {
                              label: 'Conventional',
                              data: [
                                conventionalResults.totalRevenue,
                                conventionalResults.totalExpenses,
                                conventionalResults.sustainabilityBenefits
                              ],
                              backgroundColor: ['#81C784', '#E57373', '#64B5F6'],
                              borderWidth: 0,
                            }
                          ]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'bottom',
                            },
                            title: {
                              display: true,
                              text: 'Financial Comparison',
                              font: {
                                size: 16
                              }
                            },
                            tooltip: {
                                callbacks: {
                                  label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                      label += ': ';
                                    }
                                    return label + formatCurrency(context.raw);
                                  }
                                }
                              }
                            }
                          }
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <div style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center' }}>
                <p>
                  <strong>Analysis Summary:</strong> Sustainable farming shows 
                  {results.netProfit > conventionalResults.netProfit 
                    ? ' higher ' 
                    : ' lower '} 
                  profitability compared to conventional methods, with a difference of 
                  {' ' + formatCurrency(Math.abs(results.netProfit - conventionalResults.netProfit))}.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProfitCalculator;
                