import { TextField } from "@mui/material";
import { useState } from "react";
import { addIncomeCategorie } from "../../../api/incomeCategoryService";

export const AddIncomeCategoryForm = ({
  email,
  accessToken,
  handleCloseCategory,
}) => {
  const [name, setName] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    const newCategory = {
      name: name,
    };
    const data = {
      email: email,
      accessToken: accessToken,
      newCategory: newCategory,
    };
    const response = await addIncomeCategorie(data);
    if (response.status === 201) {
      handleCloseCategory();
    }
  };
  return (
    <div className="p-3">
      <h1>Add category</h1>
      <form onSubmit={handleForm}>
        <div className="my-2">
          <TextField
            type="text"
            label="Name"
            className="w-100"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Add category
        </button>
      </form>
    </div>
  );
};
