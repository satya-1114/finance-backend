const prisma = require('../config/prisma');

exports.getSummary = async () => {
  const income = await prisma.financialRecord.aggregate({
    _sum: { amount: true },
    where: { type: 'INCOME' }
  });

  const expense = await prisma.financialRecord.aggregate({
    _sum: { amount: true },
    where: { type: 'EXPENSE' }
  });

  const totalIncome = income._sum.amount || 0;
  const totalExpense = expense._sum.amount || 0;

  return {
    totalIncome,
    totalExpense,
    netBalance: totalIncome - totalExpense
  };
};

exports.getCategoryBreakdown = async () => {
  return prisma.financialRecord.groupBy({
    by: ['category'],
    _sum: { amount: true }
  });
};

exports.getRecent = async () => {
  return prisma.financialRecord.findMany({
    take: 5,
    orderBy: { date: 'desc' }
  });
};