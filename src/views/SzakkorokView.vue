<template>
  <main>
    <div class="row">
      <div class="col-6">
        <div class="container">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th class="my-table-header" scope="col">Név</th>
                <th class="my-table-header" scope="col">Osztály</th>
                <th class="my-table-header" scope="col">Szakkör</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(gyerek, i) in gyerekek" :key="i">
                <td>{{ gyerek.nev }}</td>
                <td>{{ gyerek.osztaly }}</td>
                <td>
                  <select
                    class="form-select form-select-sm"
                    aria-label="Small select example"
                    v-model="gyerek.szakkorId"
                    
                  >
                    <option
                      v-for="(szakkor, i) in szakkorok"
                      :key="i"
                      :value="szakkor.id"
                    >
                      {{ szakkor.szakkor }}
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-6">
        <div class="">
          <SzakkorComp
            v-for="(szakkor, i) in szakkorok"
            :key="i"
            :szakkor="szakkor"
            :gyerekek="gyerekek"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SzakkorComp from "@/components/SzakkorComp.vue";
export default {
  components: {
    SzakkorComp,
  },
  data() {
    return {
      gyerekek: [
        { id: 0, nev: "Jáger Kristóf", osztaly: "13.D", szakkorId: 0 },
        { id: 1, nev: "Ledacs-Kiss Bence", osztaly: "13.D", szakkorId: 0 },
        { id: 2, nev: "Fehér Dorián", osztaly: "13.D", szakkorId: 0 },
        { id: 3, nev: "Medgyes Csaba", osztaly: "13.D", szakkorId: 0 },
        { id: 4, nev: "Juhász Gergő", osztaly: "13.D", szakkorId: 0 },
        { id: 5, nev: "Kovács János", osztaly: "13.D", szakkorId: 0 },
        { id: 6, nev: "Polyák Alex", osztaly: "13.D", szakkorId: 0 },
        { id: 7, nev: "Oláh Péter", osztaly: "13.D", szakkorId: 0 },
        { id: 8, nev: "Fehér György", osztaly: "13.D", szakkorId: 0 },
        { id: 9, nev: "Nagy Ferenc", osztaly: "13.D", szakkorId: 0 },
        { id: 10, nev: "Hajdú István", osztaly: "13.D", szakkorId: 0 },
        { id: 11, nev: "Molnár Krisztián", osztaly: "13.D", szakkorId: 0 },
      ],
      szakkorok: [
        { id: 0, szakkor: "Nem jár szakkörre" },
        { id: 1, szakkor: "Foci" },
        { id: 2, szakkor: "Balett" },
        { id: 3, szakkor: "Curling" },
      ],

    };
  }
};
</script>

<style>
.my-table-header {
  color: #c94d3c !important;
}
</style>
