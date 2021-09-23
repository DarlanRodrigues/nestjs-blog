import { IsIn, IsISO8601, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { TransactionCategory, TransactionCategoryList, TransactionType, TransactionTypeList } from "../entities/transaction.entity";

export class CreateTransactionDto {
    @IsISO8601()
    @IsNotEmpty()
    payment_date: Date;

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(TransactionCategoryList)
    category: TransactionCategory;


    @IsString()
    @IsNotEmpty()
    @IsIn(TransactionTypeList)
    type: TransactionType;
    
    @IsNotEmpty()
    amount: number;
}
