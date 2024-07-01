//sign in
export const signin = (user) => {
  return fetch(`http://localhost:8000/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => err);
};

//sign up
export const signup = (user) => {
  console.log("this is signup func");
    return fetch(`http://localhost:8000/signup`, {
      
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
        console.log("in index");
      });
      
  };
//authenticate
export const authenticate = (data, next) => {
  // eslint-disable-next-line
  if (typeof window != undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

//check if user is authenticated
export const isAuthenticated = () => {
  // eslint-disable-next-line
  if (typeof window === undefined) {
    return false;
  } else {
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    }
    return false;
  }
}; 

