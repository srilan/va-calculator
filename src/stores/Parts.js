import { writable } from "svelte/store";

const Parts = writable({
  head: false,
  larm: false,
  rarm: false,
  torso: false,
  lleg: false,
  rleg: false,
});

export default Parts;
