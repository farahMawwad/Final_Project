const { User, Product } = require("../models/Models");
exports.Profits = async (req, res) => {
    const userid = req.params.id || "";
  
    try {
      res.send(await Product.profile(userid));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
exports.Visits = async (req, res) => {
    const userid = req.params.id || "";
  
    try {
      res.send(await Product.profile(userid));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
exports.Purchases = async (req, res) => {
    const userid = req.params.id || "";
  
    try {
      res.send(await Product.profile(userid));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  