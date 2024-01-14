import { writable } from "svelte/store";

const Dependents = writable({
  childrenUnder18: 0,
  childrenAbove18: 0,
  hasSpouse: false,
  AidAndAttendance: false,
  dependentParents: 0,
  monthlyPayment: 0,
});

export default Dependents;
