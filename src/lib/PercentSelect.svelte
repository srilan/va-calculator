<script>
  import PartDisplay from "../stores/PartDisplay";
  import Ratings from "../stores/Ratings";
  import PercentButton from "$lib/PercentButton.svelte";

  const ratingList = [
    { rate: 10, id: 1 },
    { rate: 20, id: 2 },
    { rate: 30, id: 3 },
    { rate: 40, id: 4 },
    { rate: 50, id: 5 },
    { rate: 60, id: 6 },
    { rate: 70, id: 7 },
    { rate: 80, id: 8 },
    { rate: 90, id: 9 },
    { rate: 100, id: 10 },
  ];

  const setRatingClick = (rating, part, id) => {
    let addrate = {
      rating,
      part,
      id,
    };

    Ratings.update((rating) => {
      return [addrate, ...rating];
    });
  };
</script>

<div class="p-3 flex flex-col gap-4">
  {#each ratingList as rates, i (rates.id)}
    {#if i % 2 === 0}
      <div class="flex gap-6">
        <!-- Display the first button for even indices -->
        <PercentButton
          on:click={() =>
            setRatingClick(rates.rate, $PartDisplay.display, ++$PartDisplay.id)}
          >{rates.rate}%</PercentButton
        >

        <!-- Display the second button for the next index -->
        {#if ratingList[i + 1]}
          <PercentButton
            on:click={() =>
              setRatingClick(
                ratingList[i + 1].rate,
                $PartDisplay.display,
                ++$PartDisplay.id,
              )}>{ratingList[i + 1].rate}%</PercentButton
          >
        {/if}
      </div>
    {/if}
  {/each}
</div>
