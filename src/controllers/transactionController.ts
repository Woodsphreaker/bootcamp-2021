import { Request, Response } from 'express';

import { getCustomRepository } from 'typeorm';
import TransactionRepository from '../repositories/TransactionsRepository';

const index = async (req: Request, res: Response): Promise<Response> => {
  const transactionRepository = getCustomRepository(TransactionRepository);
  const transactions = await transactionRepository.listAll();
  return res.json(transactions);
};

export default { index };
