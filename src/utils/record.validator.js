const { z } = require('zod');

exports.recordSchema = z.object({
  amount: z.coerce.number().positive(),
  type: z.enum(['INCOME', 'EXPENSE']),
  category: z.string().min(1),
  date: z.string(),
  notes: z.string().optional()
});