import { Request, Response } from 'express';

import { getCustomRepository } from 'typeorm';
import TransactionRepository from '../repositories/TransactionsRepository';
import CreateTransaction from '../services/CreateTransactionService';

const index = async (req: Request, res: Response): Promise<Response> => {
  const transactionRepository = getCustomRepository(TransactionRepository);
  const transactions = await transactionRepository.listAll();
  return res.json(transactions);
};

const store = async (req: Request, res: Response): Promise<Response> => {
  const { title, value, type, category } = req.body;

  const createTransaction = new CreateTransaction();
  const newTransaction = createTransaction.execute({
    title,
    category,
    type,
    value,
  });

  return res.json(newTransaction);
};

export default { index, store };
