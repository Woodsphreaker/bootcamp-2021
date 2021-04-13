import { getCustomRepository } from 'typeorm';
import TransactionRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class ListTransactionsService {
  private calculateBalance(transactions: Transaction[]): Balance {
    return transactions.reduce(
      (acc, { type, value }): Balance => {
        acc[type] += value;
        const { income, outcome } = acc;
        acc.total = income - outcome;

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );
  }

  public async execute(): Promise<object> {
    const transactionRepository = getCustomRepository(TransactionRepository);
    const transactions = await transactionRepository.find({
      relations: ['category'],
    });

    const balance = this.calculateBalance(transactions);
    const transactionsWithBalance = { transactions, balance };

    return transactionsWithBalance;
  }
}

export default ListTransactionsService;
