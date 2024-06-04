import axios from "axios";

export const getOrders = async (setDataSource) => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    // console.log("res", res.data);
    return setDataSource(res.data.products.slice(0, 3));
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};

export const getHeaderOrders = async (setOrders) => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    // console.log("getHeaderOrders", res.data.products);
    // 종 표기 위에 갯수가 뜸.
    return setOrders(res.data.products);
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};

export const getAllComment = async (setDataSource) => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    return setDataSource(res.data.products.slice(0, 3));
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

export const getComments = async (setComments) => {
  try {
    const res = await axios.get("https://dummyjson.com/comments");
    // 메시지 표기 위에 갯수가 뜸.
    setComments(res.data.total);
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};

export const getVertical = async (setVerticalData) => {
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

    setVerticalData(dataSource);
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};

export const getDashBoardOrders = async (setOrders) => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    setOrders(res.data.total);
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};

export const getDashboardRevenue = async (setRevenue) => {
  try {
    const res = await axios.get("https://dummyjson.com/carts");
    setRevenue(res.data.total);
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};

export const getDashboardInventory = async (setInventory) => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    setInventory(res.data.total);
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};

export const getDashboardCustomers = async (setCustomers) => {
  try {
    const res = await axios.get("https://dummyjson.com/users");
    setCustomers(res.data.total);
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};

export const getHeaderComments = async (setComments) => {
  try {
    const res = await axios.get("https://dummyjson.com/comments");
    // 메시지 표기 위에 갯수가 뜸.
    setComments(res.data.comments);
  } catch (err) {
    console.error("다음과 같은 에러가 발생했습니다 :", err);
  }
};
