"use strict";

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
};
export const getSumFixedCosts = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/getSumFixedCosts")
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
};
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
};

export const getMonthlyExpenditures = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/getMonthlyExpenditures")
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
};

export const getMonthlyRevenues = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/getMonthlyRevenues")
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
};

export const getAverageCarGasCosts = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/getAverageCarGasCosts")
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
};

export const getAverageGroceryCosts = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/getAverageGroceryCosts")
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
};

export const getMonthlyGroceryCosts = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/getMonthlyGroceryCosts")
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
};

export const getAverageInvestmentCosts = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/getAverageInvestmentCosts")
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
};

export const getMonthlyCarGasCosts = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/getMonthlyCarGasCosts")
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
};
export const getMonthlyInvestmentPlanCosts = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/api/getMonthlyInvestmentPlanCosts")
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
};

const backendURL = "http://localhost:3000/api/ConnectionTest";

export const checkBackendAvailability = async () => {
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
};
