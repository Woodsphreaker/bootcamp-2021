import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async listAll(): Promise<Transaction[]> {
    const transactions = await this.find();
    return transactions;
  }

  // public async getBalance(): Promise<Balance> {
  //   // TODO
  // }
}

export default TransactionsRepository;
