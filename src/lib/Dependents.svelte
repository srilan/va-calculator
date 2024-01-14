<script>
  import DisabilityRating from "../stores/DisabilityRating";
  import Dependents from "../stores/Dependents";
  import Monthly from "../stores/Monthly";
  import DependentsInput from "$lib/DependentsInput.svelte";

  $: monthlyPayment = $Monthly;
  $: disabilityRating = $DisabilityRating.disabilityRating;
  $: calculatedRating = $DisabilityRating.calculatedRating;

  const dependents = async (dependents) => {
    let body = {
      ...dependents,
      disabilityRating,
    };

    const response = await fetch(
      "https://va-calc-be.onrender.com/calculator/dependency",
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
      Monthly.update((mon) => {
        return (mon = json.monthly);
      });
    }
    if (!response.ok) {
      console.log("Fetching Benefits Error.");
    }
  };

  $: {
    let ratingCopy = $DisabilityRating;
    let depCopy = $Dependents;
    if (ratingCopy.disabilityRating >= 0) {
      dependents(depCopy);
    }
  }
</script>

<div class="px-6 pt-5 mt-5">
  <div class="relative bg-white border-t-4 border-[#184997] px-6 pt-5">
    <div
      class="absolute right-2/4 translate-x-2/4 lg:translate-x-0 top-[-40px] bebas bg-[#184997] flex px-3 text-xl pt-2 pb-1 text-white rounded-t-xl tracking-wider"
    >
      STEP 2
    </div>
    <div class="flex flex-col md:flex-row justify-center w-full">
      <div class="flex flex-col w-full pe-6 mt-5">
        <div
          class="flex w-full justify-center items-center bebas text-4xl lg:text-5xl"
        >
          <h2 class="mx-auto" style="color: #000000;">
            TO COMPLETE THE ASSESSMENT,
            <span style="color: #184997;">
              {" "}
              FILL OUT THE FORM TO PROCEED WITH GENERATING YOUR QUOTE.
            </span>
          </h2>
        </div>
        <div
          class="mont mb-5 text-sm md:text-md lg:text-xl"
          style="color: #000000;"
        >
          Are you sure your VA rating is fair? Let us uncover your potential
          rating eligibility.
        </div>
        <div class="bebas text-3xl my-2 lg:my-5">
          <h2 class="mx-auto text-3xl lg:text-4xl" style="color: #000000;">
            COMBINED DISABILITY PERCENTAGE:
            <span style="color: #184997"> {calculatedRating}% </span>
          </h2>
        </div>
        <div class="bebas text-3xl my-2 lg:my-5">
          <h2 class="mx-auto text-3xl lg:text-4xl" style="color: #000000;">
            CURRENT DISABILITY RATING:
            <span style="color: #184997"> {disabilityRating}% </span>
          </h2>
        </div>
        <div class="bebas text-3xl my-2 lg:my-5">
          <h2 class="mx-auto text-3xl lg:text-4xl" style="color: #000000;">
            MONTHLY PAYMENT AMOUNT:
            <span style="color: #184997"> ${monthlyPayment} </span>
          </h2>
        </div>
      </div>

      <!-- SECOND PANEL -->
      <DependentsInput />
    </div>
  </div>
</div>
