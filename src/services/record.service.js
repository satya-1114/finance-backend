const prisma = require('../config/prisma');

// Normalize category consistently across create, update, and filters
const normalizeCategory = (category) =>
  typeof category === 'string' ? category.toLowerCase().trim() : undefined;

exports.createRecord = async (data, userId) => {
  return prisma.financialRecord.create({
    data: {
      ...data,
      category: normalizeCategory(data.category),
      userId
    }
  });
};

exports.getRecords = async (filters = {}) => {
  const { type, category, startDate, endDate } = filters;

  return prisma.financialRecord.findMany({
    where: {
      ...(type && { type }),
      ...(category && { category: normalizeCategory(category) }),
      ...(startDate &&
        endDate && {
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
    data: {
      ...data,
      ...(data.category && {
        category: normalizeCategory(data.category)
      })
    }
  });
};

exports.deleteRecord = async (id) => {
  return prisma.financialRecord.delete({
    where: { id }
  });
};