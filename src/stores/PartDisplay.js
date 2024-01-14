import { writable } from "svelte/store";

const PartDisplay = writable({
  display: "others",
  id: 1,
});

export default PartDisplay;
