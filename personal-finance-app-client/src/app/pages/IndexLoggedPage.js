import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllIncomeCategories } from "../../features/incomeCategories/incomeCategoriesActions";

function IndexLoggedPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllIncomeCategories());
  }, [dispatch]);

  return <div>Hey user</div>;
}

export default IndexLoggedPage;
