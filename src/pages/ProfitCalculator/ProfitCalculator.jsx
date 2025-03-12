import React, { useState, useEffect } from 'react';
import { FaCalculator, FaChartPie, FaFileDownload, FaRedo, FaExchangeAlt } from 'react-icons/fa';
import './ProfitCalculator.css';

const ProfitCalculator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    // Farm details
    farmSize: 10,
    location: 'midwest',
    farmingType: 'organic',
    
    // Crop details
    cropType: 'wheat',
    expectedYield: 50,
    marketPrice: 8.75,
    
    // Expenses
    seedCost: 1200,
    fertilizerCost: 800,
    pestControlCost: 500,
    irrigationCost: 600,
    laborCost: 3000,
    equipmentCost: 1500,
    certificationCost: 1000,
    otherCosts: 500,
    
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
    
    // Calculate sustainability benefits
    let sustainabilityBenefits = 0;
    if (formData.useRenewableEnergy) sustainabilityBenefits += 500;
    if (formData.useWaterConservation) sustainabilityBenefits += 700;
    if (formData.useSustainablePractices) sustainabilityBenefits += 1000;
    
    // Calculate net profit
    const netProfit = totalRevenue - totalExpenses + sustainabilityBenefits;
    
    // Calculate profit per acre
    const profitPerAcre = netProfit / formData.farmSize;
    
    // Return results
    return {
      totalRevenue,
      totalExpenses,
      sustainabilityBenefits,
      netProfit,
      profitPerAcre,
      roi: (netProfit / totalExpenses) * 100
    };
  };

  // Calculate conventional farming profits for comparison
  const calculateConventionalProfit = () => {
    // Adjust values for conventional farming
    const conventionalYield = formData.expectedYield * 0.9; // Typically lower yield
    const conventionalPrice = formData.marketPrice * 0.7; // Lower market price
    const totalRevenue = conventionalYield * conventionalPrice * formData.farmSize;
    
    // Conventional expenses are different
    const totalExpenses = 
      formData.seedCost * 0.8 + // Lower seed cost
      formData.fertilizerCost * 1.5 + // Higher fertilizer cost
      formData.pestControlCost * 2 + // Higher pest control cost
      formData.irrigationCost * 1.2 + // Higher irrigation cost
      formData.laborCost * 0.9 + // Lower labor cost
      formData.equipmentCost * 0.9 + // Lower equipment cost
      0 + // No certification cost
      formData.otherCosts * 0.9; // Lower other costs
    
    // No sustainability benefits
    const sustainabilityBenefits = 0;
    
    // Calculate net profit
    const netProfit = totalRevenue - totalExpenses + sustainabilityBenefits;
    
    // Calculate profit per acre
    const profitPerAcre = netProfit / formData.farmSize;
    
    // Return results
    return {
      totalRevenue,
      totalExpenses,
      sustainabilityBenefits,
      netProfit,
      profitPerAcre,
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
      farmSize: 10,
      location: 'midwest',
      farmingType: 'organic',
      cropType: 'wheat',
      expectedYield: 50,
      marketPrice: 8.75,
      seedCost: 1200,
      fertilizerCost: 800,
      pestControlCost: 500,
      irrigationCost: 600,
      laborCost: 3000,
      equipmentCost: 1500,
      certificationCost: 1000,
      otherCosts: 500,
      useRenewableEnergy: false,
      useWaterConservation: false,
      useSustainablePractices: true
    });
    setResults(null);
    setShowResults(false);
  };

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="profit-calculator-page">
      <section className="calculator-hero">
        <div className="container">
          <h1>Profit Calculator</h1>
          <p className="calculator-hero-description">
            Estimate your farm's potential profits using sustainable farming practices. Compare with conventional methods to see the financial benefits of sustainable agriculture.
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
                        <option value="northeast">Northeast</option>
                        <option value="southeast">Southeast</option>
                        <option value="midwest">Midwest</option>
                        <option value="southwest">Southwest</option>
                        <option value="west">West</option>
                        <option value="northwest">Northwest</option>
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
                      <option value="corn">Corn</option>
                      <option value="soybeans">Soybeans</option>
                      <option value="vegetables">Vegetables</option>
                      <option value="fruits">Fruits</option>
                      <option value="herbs">Herbs</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="expectedYield">Expected Yield (units/acre)</label>
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
                      <label className="form-label" htmlFor="marketPrice">Market Price ($/unit)</label>
                      <input
                        type="number"
                        className="form-control"
                        id="marketPrice"
                        name="marketPrice"
                        value={formData.marketPrice}
                        onChange={handleInputChange}
                        min="0.01"
                        step="0.01"
                        required
                      />
                      <span className="form-hint">Current market price per unit</span>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Expenses</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="seedCost">Seed Cost ($)</label>
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
                      <label className="form-label" htmlFor="fertilizerCost">Fertilizer Cost ($)</label>
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
                      <label className="form-label" htmlFor="pestControlCost">Pest Control Cost ($)</label>
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
                      <label className="form-label" htmlFor="irrigationCost">Irrigation Cost ($)</label>
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
                      <label className="form-label" htmlFor="laborCost">Labor Cost ($)</label>
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
                      <label className="form-label" htmlFor="equipmentCost">Equipment Cost ($)</label>
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
                      <label className="form-label" htmlFor="certificationCost">Certification Cost ($)</label>
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
                      <label className="form-label" htmlFor="otherCosts">Other Costs ($)</label>
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
                      <span className="toggle-label">Use Renewable Energy</span>
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
                      <span className="toggle-label">Implement Water Conservation</span>
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
                      <span className="toggle-label">Use Sustainable Soil Practices</span>
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
                
                <div className="chart-container">
                  <div className="chart-placeholder">
                    <div className="chart-icon"><FaChartPie size={50} color="#4CAF50" /></div>
                    <p>Profit Breakdown Chart</p>
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
              
              <div style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center' }}>
                <p>
                  <strong>Analysis Summary:</strong> Sustainable farming shows 
                  {results.netProfit > conventionalResults.netProfit 
                    ? ' higher ' 
                    : ' lower '} 
                  profitability compared to conventional methods, with a difference of 
                  {formatCurrency(Math.abs(results.netProfit - conventionalResults.netProfit))}.
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