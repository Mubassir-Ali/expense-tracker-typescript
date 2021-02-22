import React, { useReducer, createContext } from 'react'
import AppReducer from './AppReducer';
import { initialStateType,transactionType } from '../Types/Types'


// Initial State
const initialState = {
	transactions: [],
}

console.log(initialState);


// Create context
export const GlobalContext = createContext<initialStateType|any>(initialState);


// Provider component
export const GlobalProvider = ({children}:any) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//Action
	function deleteTransaction(id: number) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		})
	}
	function addTransaction(transaction: transactionType) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		})
	}


	return (<GlobalContext.Provider value={{
		transactions: state.transactions,
		deleteTransaction,
		addTransaction
	}}>
		{children}
	</GlobalContext.Provider>)

}
	
export default GlobalContext;