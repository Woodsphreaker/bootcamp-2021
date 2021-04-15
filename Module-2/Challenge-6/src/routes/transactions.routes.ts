import { Router } from 'express';
import transactionController from '../controllers/transactionController';
import importController from '../controllers/importController';
import upload from '../middlewares/upload';

const transactionsRouter = Router();

transactionsRouter.get('/', transactionController.index);
transactionsRouter.post('/', transactionController.store);
transactionsRouter.delete('/:id', transactionController.destroy);
transactionsRouter.post('/import', upload, importController.store);

// import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';

// transactionsRouter.get('/', async (request, response) => {
//   // TODO
// });

// transactionsRouter.post('/', async (request, response) => {
//   // TODO
// });

// transactionsRouter.delete('/:id', async (request, response) => {
//   // TODO
// });

// transactionsRouter.post('/import', async (request, response) => {
//   // TODO
// });

export default transactionsRouter;
