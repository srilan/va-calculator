<script>
  import { Close } from "./assets/index";
  export let elem;
</script>

<button
  class="ms-3 bg-whute text-sm ratings relative border-[#575757] border-solid border-2"
  on:click
>
  <span class="block text-xs">
    <span class="inline-block py-1.5 px-4 text-sm mont text-black font-bold">
      {elem.rating}% - {elem.part}
    </span>
  </span>
  <div
    class="absolute thrash bg-[#ffffff] rounded-full p-1 border-[#b52d38] border-2"
  >
    <img src={Close} alt="" srcset="" />
  </div>
</button>
