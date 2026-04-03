const prisma = require('../config/prisma');

exports.createRecord = async (data, userId) => {
  return prisma.financialRecord.create({
    data: {
      ...data,
      userId
    }
  });
};

exports.getRecords = async (filters = {}) => {
  const { type, category, startDate, endDate } = filters;

  return prisma.financialRecord.findMany({
    where: {
      ...(type && { type }),
      ...(category && { category }),
      ...(startDate && endDate && {
        date: {
          gte: new Date(startDate),
          lte: new Date(endDate)
        }
      })
    },
    orderBy: { date: 'desc' }
  });
};

exports.updateRecord = async (id, data) => {
  return prisma.financialRecord.update({
    where: { id },
    data
  });
};

exports.deleteRecord = async (id) => {
  return prisma.financialRecord.delete({
    where: { id }
  });
};