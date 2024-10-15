import axios from "axios";
import api from "./admin";

export const getAllStore = async (setDataSource) => {
  try {
    const res = await api.get(`superadmin/store/allStores`);
    const result = res.data;
    return setDataSource(result);
  } catch (err) {
    console.log(err);
  }
};
export const getDetailStore = async (payload, setDetailStore) => {
  try {
    const res = await api.get(`superadmin/store/storeDetails/${payload}`);
    const result = res.data;
    return setDetailStore(result);
  } catch (err) {
    console.log(err);
  }
};
