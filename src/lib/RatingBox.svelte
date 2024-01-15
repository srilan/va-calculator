<script>
  import Ratings from "../stores/Ratings";
  import RatingButton from "$lib/RatingButton.svelte";

  const handleRemove = (rates) => {
    let selectedId = rates.id;

    Ratings.update((rate) => {
      let copy = rate;

      copy = copy.filter((item) => item.id != selectedId);

      return copy;
    });
  };
</script>

<div
  class="w-full border-[#184997] border-2 bg-white lg:ps-20 lg:pt-5 pt-16 pb-2 pe-3 relative text-black"
  id="percContainer"
>
  <div
    class="top-0 left-0 w-full h-[40px] lg:h-full bg-[#184997] align-middle p-2 lg:w-[70px] text-center text-sm font-semibold text-white flex justify-center items-center mont absolute"
  >
    Ratings
  </div>

  <div>
    {#each $Ratings as rates}
      <RatingButton elem={rates} on:click={() => handleRemove(rates)} />
    {:else}
      <div class="opacity-0 pointer-events-none">
        <RatingButton elem={{ part: "", rate: 0, id: 0 }} />
      </div>
    {/each}
  </div>
</div>
