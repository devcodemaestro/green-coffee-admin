import axios from "axios";

export const getDashBoardOrders = async (setDataSource) => {
  try {
    const res = await axios.get("https://dummyjson.com/carts/1");
    console.log("res", res.data);
    return setDataSource(res.data.products.splice(0, 3));
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};

export const getOrders = async (setDataSource) => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    console.log("res", res.data);
    return setDataSource(res.data.products);
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};

export const getRevenue = async (setRevenueData) => {
  try {
    const res = await axios.get("https://dummyjson.com/carts");
    const labels = res.data.carts.map((cart) => `고객 ${cart.userId}`);
    const data = res.data.carts.map((cart) => cart.discountedTotal);

    const dataSource = {
      labels,
      datasets: [
        {
          label: "데이터1",
          data: data,
          backgroundColor: "rgb(255, 99, 132)",
          stack: "Stack 0",
        },
      ],
    };

    setRevenueData(dataSource);
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};

export const getInventory = async (setDataSource) => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    setDataSource(res.data.products);
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};

export const getCustomers = async (setDataSource) => {
  try {
    const res = await axios.get("https://dummyjson.com/users");
    setDataSource(res.data.users);
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};
