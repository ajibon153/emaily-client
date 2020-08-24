import axios from "axios";
import { FETCH_USER } from "./types";

// before refactor
// export const fetchUser = () => {
//   return function (dispacth) {
//     axios.get("/api/current_user").then((res) =>
//       dispacth({
//         type: FETCH_USER,
//         payload: res,
//       })
//     );
//   };
// };

// after refactor
export const fetchUser = () => (dispacth) => {
  axios.get("/api/current_user").then(
    (res) =>
      dispacth({
        type: FETCH_USER,
        payload: res,
      })
    // console.log(res)
  );
};
