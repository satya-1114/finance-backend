const dashboardService = require('../services/dashboard.service');

exports.summary = async (req, res) => {
  try {
    const data = await dashboardService.getSummary();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.category = async (req, res) => {
  try {
    const data = await dashboardService.getCategoryBreakdown();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.recent = async (req, res) => {
  try {
    const data = await dashboardService.getRecent();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};