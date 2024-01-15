<script>
  //components
  import TrajectorLogo from "$lib/TrajectorLogo.svelte";
  import PartSelect from "$lib/PartSelect.svelte";
  import PercentSelect from "$lib/PercentSelect.svelte";
  import RatingBox from "$lib/RatingBox.svelte";
  import RadialProgress from "$lib/RadialProgress.svelte";
  import Dependents from "$lib/Dependents.svelte";
  import Monthly from "../stores/Monthly";
</script>

<nav>
  <TrajectorLogo />
</nav>

<body>
  <div class="flex flex-col w-full bg-white h-full py-12 px-10">
    <div class="flex flex-col lg:flex-row">
      <!-- Instruction Block -->
      <div
        class="pt-10 pb-[60px] lg:pe-[45px] ps-10 lg:pt-5 bg-slate-200 sm:w-full lg:w-2/6 flex flex-col relative lg:border-r-2 border-[#184997] gap-10 justify-center"
      >
        <div
          class="absolute bottom-0 right-2/4 translate-x-2/4 lg:translate-x-0 lg:bottom-auto lg:right-[-18px] lg:top-2/4 bebas bg-[#184997] flex px-3 text-xl pt-2 pb-1 lg:rotate-[270deg] text-white rounded-t-xl tracking-wider"
        >
          STEP 1
        </div>
        <span class="bebas text-4xl">
          BEGIN BY CHOOSING THE AREAS{" "}
          <span class="text-[#b52d38]"> WHERE YOU HAVE DISABILITIES </span>
        </span>

        <span class="mont text-lg font-medium pe-10">
          Choose the specific body part affected by your disability and indicate
          the percentage of impairment from 0% to 100%.
        </span>
      </div>

      <!-- Diagram & Percent Buttons -->
      <div
        class="w-full lg:w-2/4 flex flex-col sm:flex-row justify-evenly relative border-2 border-[#184997]"
      >
        <div
          class="border-1 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center"
        >
          <PartSelect />
        </div>
        <div
          class="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center text-white justify-center"
        >
          <PercentSelect />
        </div>
      </div>

      <!-- Disability Rating -->
      <div class="lg:w-1/4 flex flex-col p-5 bg-slate-300 items-center">
        <div
          class="flex flex-col w-full items-center border-b-2 border-slate-500 pb-3"
        >
          <div class="text-3xl bebas">Total Disablity Rating</div>
          <!-- Radial Progress -->
          <RadialProgress />
        </div>

        <div class="flex flex-col items-center">
          <div class="bebas text-2xl mt-5">Total Monthly Compensation</div>

          <div class="text-2xl mont mt-2">$ {$Monthly}</div>
        </div>
      </div>
    </div>
    <!-- Rating Box -->
    <div class="flex w-full justify-center mt-6">
      <!-- Rating Box Component -->
      <RatingBox />
    </div>
  </div>

  <!-- Dependents -->
  <div class="bg-white px-5">
    <Dependents />
  </div>
</body>