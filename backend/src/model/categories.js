import mongoose, { Schema } from "mongoose";

const categoriesSchema = new Schema({
    MonthlyBills: [
        {
            rent:{
                payee_name: String,
                month_name: String, 
                amount: Number,
                previous_dues: String

            },
            gasBill: {
                provider_name: String,
                month_name: String,
                consumer_no : 
                    {
                        type: "String",
                        lowercase: true,
                        required: true,
                        trim: true,
                        unique: true
                    }, 
                amount: Number,
                previous_dues: String

            },
            electricityBill: {
                provider_name: String,
                month_name: String,
                consumer_no : {
                    type: "String",
                    lowercase: true,
                    required: true,
                    trim: true,
                    unique: true
                }, 
                amount: Number,
                previous_dues: String

            },
            waterBill: {
                provider_name: String,
                month_name: String,
                consumer_no : {
                    type: "String",
                    lowercase: true,
                    required: true,
                    trim: true,
                    unique: true
                }, 
                amount: Number,
                previous_dues: String

            },
            dataBill: {
                provider_name: String,
                month_name: String,
                consumer_no : {
                    type: "String",
                    lowercase: true,
                    required: true,
                    trim: true,
                    unique: true
                }, 
                amount: Number,
               

            },
            phoneBill: {
                provider_name: String,
                month_name: String,
                phone_no : {
                    type: "Number",
                    lowercase: true,
                    required: true,
                    trim: true,
                    unique: true
                }, 
                amount: Number,
            },
            DTHBill: {
                provider_name: String,
                month_name: String,
                consumer_no : {
                    type: "String",
                    lowercase: true,
                    required: true,
                    trim: true,
                    unique: true
                }, 
                amount: Number,
            },
            OTTBill: {
                provider_name: String,
                email_id : {
                    type: "String",
                    lowercase: true,
                    required: true,
                    trim: true,
                    unique: true
                },
                month_name: String, 
                amount: Number,
            }
        }

    ],
    
    
    Recurrables :[
        {
            Shopping_EMI: {
                site_name: String,
                product: String,
                total_amount: Number,
                time_duration: String,
                interest_rate: Number,
                downpayment: Number,
                amount_paid: Number,
                amount_due: Number,
                monthly_installment: Number,
                month_name: String,
                previous_dues: Number
            },

            BankLoan_EMI: {
                bank_name: String,
                loan_type: String,
                loanID: {
                    type: "String",
                    lowercase: true,
                    required: true,
                    trim: true,
                    unique: true
                },
                account_no: String,
                total_amount: Number,
                loan_start_date: String,
                load_end_date: String,
                time_duration: String,
                interest_rate: Number,
                downpayment: Number,
                amount_paid: Number,
                amount_due: Number,
                monthly_installment: Number,
                month_name: String,
                previous_dues: Number

            },

            Insurance_Premium: {
                company_name:String,
                policy_no: {
                    type: "String",
                    lowercase: true,
                    required: true,
                    trim: true,
                    unique: true
                },
                policy_name: String,
                policy_type: String,
                policy_holder: String,
                linked_bank: String,
                linked_bank_accNo: String,
                premium_installment: Number,
                maturity_amount: Number,
                premium_frequency: String,
                premium_start_date: String,
                premium_end_date: String,
                premium_paid: Number,
                premium_due: Number,
                premium_installment: Number,
                current_installment_dueDate: String,
                previous_dues: Number
            },

            MutualFunds: {
                fund_name: String,
                fund_type: String,
                fund_id: {
                    type: "String",
                    lowercase: true,
                    required: true,
                    trim: true,
                    unique: true
                },
                account_no: String,
                investment_amount: Number,
                investment_frequency: String,
                investment_start_date: String,
                investment_end_date: String,
                investment_status: String,
                current_installment: Number,
                investment_return: Number,
                investment_return_percentage: Number,
                investment_return_date: String,
                previous_dues: Number,
                current_installment_dueDate: String,
            },

            IncomeTax: {
                tax_year: String,
                tax_payer_name: String,
                tax_payer_pan: {
                    type: "String",
                    lowercase: true,
                    required: true,
                    trim: true,
                    unique: true
                },
                tax_payer_annual_income: Number,
                account_no: String,
                tax_amount: Number,
                paying_date: String,
                due_date: String,
                tax_status: String,
                tax_deduction: String,
                takeHome_amount: String,
                previous_dues: String                
            },

            SIPs: {
                sip_name: String,
                sip_type: String,
                sip_id: {
                    type: "String",
                    lowercase: true,
                    required: true,
                    trim: true,
                    unique: true
                },
                account_no: String,
                investment_amount: Number,
                investment_frequency: String,
                investment_start_date: String,
                investment_end_date: String,
                investment_status: String,
                current_installment: Number,
                current_return: Number,
                investment_return: Number,
                investment_return_percentage: Number,
                investment_return_date: String,
                previous_dues: Number,
                current_installment_dueDate: String,
                sip_status: String,
            },
            Tution_Fees: {
                organisation_name: String,
                student_name: [
                    {
                        type: "String",
                        lowercase: true,
                        required: true,
                        trim: true,
                        unique: true
                    }
                    
                ],
                total_fees: Number,
                installment_no: String,
                installment_amount: Number,
                installment_due_date: String,
                installment_status: String,
                month_names:[
                    {
                        type: "String",
                        lowercase: true,
                        required: true,
                        trim: true,
                        unique: true
                    }
                ]
            },

        }
    ],


    Expenses: [
        {
            Groceries:[
                {
                    date_of_expenditure: String,
                    total_amount: String,
                    products: [
                        {
                            item: String,
                            price: Number,
                            quantity: Number,
                            sub_total: Number
                        }

                    ]
                }
                
            ],
            
            Housing:[
                {
                    Renovations: [
                        {
                            job: String,
                            status: String, 
                            cost: Number,
                            payment_done: Number,
                            payment_date: String,
                            payment_due: String,
                            job_start_date: String,
                            job_end_date: String
                        }
                    ]
                    
                    
                }
            ],
            Vehicle: [
                {
                    Servicing: [
                        {
                            job: String,
                            cost: Number,
                            payment_done: Number,
                            payment_date: String,
                            payment_due: String,
                            job_start_date: String,
                            job_end_date: String 
                        }
                    ],
                    Fuel: [
                        {
                            date: String,
                            quantity: String,
                            rate: String,
                            price: Number
                        }
                    ]

                }
            ]

        }
    ],

    One_Time_Purchases: [
        {
            item_name: String,
            item_cost: Number,
            item_quantity: Number,
            total_cost: Number,
            buying_date: String,
            payment_date: String,
            dues: Number
        }
    ],

    Discretionary_Spendings: [
        {
            name: String,
            total_cost: Number,
            date: String,
            dues: Number
            
        }

    ]

    


    
} );


const Categories = mongoose.model("Categories", categoriesSchema);
export default Categories;
