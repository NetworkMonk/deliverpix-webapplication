import { useSelector, shallowEqual } from "react-redux";

function getUserState() {
  return useSelector(
    (state) => ({
      userState: state.userState,
    }),
    shallowEqual
  );
}

export default getUserState;
