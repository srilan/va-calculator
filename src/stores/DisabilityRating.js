import { writable } from "svelte/store";

const DisabilityRating = writable({
  bilateralFactor: 0,
  calculatedRating: 0,
  disabilityRating: 0,
});

export default DisabilityRating;
