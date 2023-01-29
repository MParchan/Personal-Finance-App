import { Paper } from "@mui/material";
import AddExpenditureForm from "../components/expenditures/AddExpenditureForm";
import AddIncomeForm from "../components/incomes/AddIncomeForm";
import TransactionsChart from "../components/transactions/TransactionsChart";

function IndexLoggedPage() {
  return (
    <div className="pt-4">
      <Paper className="p-3 my-3">
        <div className="row">
          <div className="col-6">
            <AddIncomeForm />
          </div>
          <div className="col-6">
            <AddExpenditureForm />
          </div>
        </div>
      </Paper>
      <Paper className="p-3 my-5">
        <TransactionsChart />
      </Paper>
    </div>
  );
}

export default IndexLoggedPage;
