export interface transactionType{
    id:number,
    text:string,
    amount:number,
}

export interface initialStateType{
    transactions:transactionType[]
}