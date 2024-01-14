<script>
  import Ratings from "../stores/Ratings";
  import DisabilityRating from "../stores/DisabilityRating";

  let disabilityLoading = false;

  const fetchRating = async (body) => {
    const response = await fetch(
      "https://va-calc-be.onrender.com/calculator/disability-rating",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );
    const json = await response.json();

    if (response.ok) {
      DisabilityRating.update((dr) => {
        return (dr = json);
      });
      disabilityLoading = false;
      //console.log("ok", json);
    }

    if (!response.ok) {
      console.log("Fetching Rate Error.");
    }
  };

  const recalculate = (ratings) => {
    let body = {
      head: [],
      torso: [],
      left_arm: [],
      right_arm: [],
      left_leg: [],
      right_leg: [],
      other: [],
    };

    ratings.forEach((item) => {
      let part_index;

      switch (item.part) {
        case "Head":
          part_index = "head";
          break;
        case "Torso":
          part_index = "torso";
          break;
        case "Left Arm":
          part_index = "left_arm";
          break;
        case "Right Arm":
          part_index = "right_arm";
          break;
        case "Left Leg":
          part_index = "left_leg";
          break;
        case "Right Leg":
          part_index = "right_leg";
          break;
        default:
          part_index = "other";
      }

      body[part_index].push(item.rating);
    });
    disabilityLoading = true;
    fetchRating(body);
  };

  //reactive declaration
  $: {
    let ratingsCopy = $Ratings;
    if (ratingsCopy.length >= 0) {
      recalculate(ratingsCopy);
    }
  }

  $: disabilityRating = $DisabilityRating.disabilityRating;
  $: calculatedRating = $DisabilityRating.calculatedRating;
  $: bilateralFactor = $DisabilityRating.bilateralFactor;
</script>

<div class="relative w-40 h-40">
  <svg class="w-full h-full" viewBox="0 0 100 100">
    <circle
      class="text-gray-200 stroke-current"
      stroke-width="10"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
    ></circle>

    <circle
      class="text-[#b52d38] progress-ring__circle stroke-current"
      stroke-width="10"
      stroke-linecap="round"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
      stroke-dashoffset={`calc(400 - ((${disabilityRating} / 10) * 40 * 65) / 100)`}
    ></circle>

    <!-- Change increments by 40. (the 200 one) -->
    {#if disabilityLoading}
      <div>Loading</div>
    {:else}
      <text
        x="50"
        y="50"
        font-size="32"
        text-anchor="middle"
        alignment-baseline="middle"
        class="bebas"
      >
        {#if calculatedRating > 0}
          {disabilityRating + ""}
        {:else}
          {"0"}
        {/if}
        %
      </text>
    {/if}
  </svg>
</div>
<div class="flex flex-col items-center">
  {#if calculatedRating > 0}
    <div class="bebas text-xl">
      Calcualted Disablilty rating of{" "}
      <span class="text-2xl text-[#184997]">
        {calculatedRating}%
      </span>
    </div>
  {/if}

  {#if bilateralFactor > 0}
    <div class="bebas text-lg">
      *Bilateral Factor of{" "}
      <span class="text-[#184997] text-xl">
        {bilateralFactor}
      </span>{" "}
      was applied.
    </div>
  {/if}
</div>
