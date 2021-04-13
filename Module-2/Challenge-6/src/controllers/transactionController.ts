import { Request, Response } from 'express';
import CreateTransactionService from '../services/CreateTransactionService';
import ListTransactionsService from '../services/ListTransactionsService';

const index = async (req: Request, res: Response): Promise<Response> => {
  const transactionRepository = new ListTransactionsService();
  const transactions = await transactionRepository.execute();
  return res.json(transactions);
};

const store = async (req: Request, res: Response): Promise<Response> => {
  const { title, value, type, category } = req.body;

  const createTransactionService = new CreateTransactionService();
  const newTransaction = await createTransactionService.execute({
    title,
    category,
    type,
    value,
  });

  return res.json(newTransaction);
};

export default { index, store };
