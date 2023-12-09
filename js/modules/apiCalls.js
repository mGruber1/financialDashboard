"use strict";
function getYearlyAverageValues() {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/getYearlyAverageValues")
      .then((response) => {
        if (!response.ok) {
          reject("Network response was not ok");
          return 1;
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);

        return 0;
      })
      .catch((error) => {
        console.error("Error:", error);
        reject(error);
      });
  });
}
export const getFixedCosts = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/getFixedCosts")
      .then((response) => {
        if (!response.ok) {
          reject("Network response was not ok");
          return 1;
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);

        return 0;
      })
      .catch((error) => {
        console.error("Error:", error);
        reject(error);
      });
  });
}
export const getIncomeRate = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/getIncomeRate")
      .then((response) => {
        if (!response.ok) {
          reject("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        reject(error);
      });
  });
}

const backendURL = "http://localhost:3000/api/ConnectionTest";

export const checkBackendReachability = async () => {
  try {
    const response = await fetch(`${backendURL}`);
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}