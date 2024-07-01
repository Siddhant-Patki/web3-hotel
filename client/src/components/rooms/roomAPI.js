import { isAuthenticated } from "../auth";

//get car method
export const getAllCars = () => {
    return fetch(`http://localhost:8000/cars`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => err);
  };