const recordService = require('../services/record.service');

const { recordSchema } = require('../utils/record.validator');


const { ZodError } = require('zod');

exports.create = async (req, res) => {
  try {
const validated = recordSchema.parse(req.body);

validated.date = new Date(validated.date);

const record = await recordService.createRecord(
  validated,
  req.user.userId
);

    res.json(record);

  } catch (err) {

    if (err instanceof ZodError) {
      return res.status(400).json({
        success: false,
        errors: err.issues.map(e => ({
          field: e.path[0],
          message: e.message
        }))
      });
    }

    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const records = await recordService.getRecords(req.query);
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const record = await recordService.updateRecord(req.params.id, req.body);
    res.json(record);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await recordService.deleteRecord(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};