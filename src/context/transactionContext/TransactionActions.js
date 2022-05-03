export const getTransactionsStart = () => ({
	type: 'GET_TRANSACTIONS_START',
});

export const getTransactionsSuccess = (transactions) => ({
	type: 'GET_TRANSACTIONS_SUCCESS',
	payload: transactions
});

export const getTransactionsFailure = () => ({
	type: 'GET_TRANSACTIONS_FAILURE',
});

export const createTransactionStart = () => ({
	type: 'CREATE_TRANSACTION_START',
});

export const createTransactionSuccess = (transaction) => ({
	type: 'CREATE_TRANSACTION_SUCCESS',
	payload: transaction
});

export const createTransactionFailure = () => ({
	type: 'CREATE_TRANSACTION_FAILURE',
});