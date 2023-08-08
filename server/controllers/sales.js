import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
  try {
    const overallstats = await OverallStat.find();
    res.json(overallstats[0], 200);
  } catch (error) {
    res.json({ message: error.message }, 404);
  }
};
