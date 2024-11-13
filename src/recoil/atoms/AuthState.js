import { atom } from "recoil";
// import { selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const AuthStateAtom = atom({
  key: "AuthStateAtom",
  default: {
    token: null,
    loginstate: "N",
    role: null,
  },
  effects_UNSTABLE: [persistAtom],
});

// export const isLoginSelector = selector({
//   key: "isLoginSelector",
//   get: ({ get }) => get(loginAtom),
//   set: ({ set }, newValue) => set(loginAtom, newValue),
// });
