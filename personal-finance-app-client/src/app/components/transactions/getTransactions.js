import { getUserExpenditures } from "../../../api/expenditureService";
import { getUserIncomes } from "../../../api/incomeService";

export const getTransactions = (props) => {
  getUserIncomes(props.userData)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      const transactions = [];
      let key = 0;
      for (const i in data) {
        const transaction = {
          id: key.toString(),
          transactionId: data[i].incomeId,
          category: data[i].incomeCategory.name,
          amount: data[i].amount,
          comment: data[i].comment,
          date: data[i].date,
          type: "income",
        };
        key++;
        transactions.push(transaction);
      }
      getUserExpenditures(props.userData)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          for (const i in data) {
            const transaction = {
              id: key.toString(),
              transactionId: data[i].expenditureId,
              category: data[i].expenditureCategory.name,
              amount: data[i].amount,
              comment: data[i].comment,
              date: data[i].date,
              type: "expenditure",
            };
            key++;
            transactions.push(transaction);
          }
          props.setLoadedTransactions(transactions);
          props.setLoading(false);
        });
    });
};
