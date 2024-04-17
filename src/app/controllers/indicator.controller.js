
 import { User } from "../../infra/db/sequelize/models/index.js";



class IndicatorController {
  static async countByGroup(req, res) {
    try {
      const counts = {};

      if (req.body.nationality) {
        counts.nationality = await User.count({
          group: ['nationality'],
          attributes: ['nationality']
        });
      } else {
        counts.nationality = 0;
      }

      if (req.body.over_60) {
        counts.over_60 = await User.count({
          group: ['over_60'],
          attributes: ['over_60']
        });
      } else {
        counts.over_60 = 0;
      }

      if (req.body.education_level) {
        counts.education_level = await User.count({
          group: ['education_level'],
          attributes: ['education_level']
        });
      } else {
        counts.education_level = 0;
      }

      if (req.body.gender) {
        counts.gender = await User.count({
          group: ['gender'],
          attributes: ['gender']
        });
      } else {
        counts.gender = 0;
      }

      if (req.body.ethnicity) {
        counts.ethnicity = await User.count({
          group: ['ethnicity'],
          attributes: ['ethnicity']
        });
      } else {
        counts.ethnicity = 0;
      }

      if (req.body.sexual_orientation) {
        counts.sexual_orientation = await User.count({
          group: ['sexual_orientation'],
          attributes: ['sexual_orientation']
        });
      } else {
        counts.sexual_orientation = 0;
      }

      if (req.body.pcd) {
        counts.pcd = await User.count({
          group: ['pcd'],
          attributes: ['pcd']
        });
      } else {
        counts.pcd = 0;
      }

      res.json(counts);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}



export default IndicatorController;



