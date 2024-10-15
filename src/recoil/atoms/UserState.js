import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const UserStateAtom = atom({
  key: "UserStateAtom",
  default: {
    user_id: null,
    email: "",
    nickname: "",
    phone: "",
    birthdate: "",
    coupon: "",
    stamp: "",
  },
  effects_UNSTABLE: [persistAtom],
});
