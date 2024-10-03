<template>
  <main>
    <div class="row">
      <div class="col-md-6">
        <div class="container">
          <div class="table-responsive">
            <table class="table table-striped table-hover my-table">
              <thead>
                <tr>
                  <th class="my-table-header my-nev" scope="col">Név</th>
                  <th class="my-table-header" scope="col">Osztály</th>
                  <th class="my-table-header" scope="col">Szakkör</th>
                  <th class="my-table-header" scope="col">
                    <i
                      class="bi bi-header bi-shuffle"
                      @click="RandomOsszesSzakkor()"
                    ></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(gyerek, i) in gyerekek" :key="i">
                  <td
                    class="table-font table-nevek"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    @click="onClickGyerek(gyerek)"
                  >
                    {{ gyerek.nev }}
                  </td>
                  <td
                    class="my-table-body table-font osztalyok"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    @click="onClickOsztaly(gyerek.osztaly)"
                  >
                    {{ gyerek.osztaly }}
                  </td>
                  <td class="my-table-body table-font">
                    <div class="d-flex justify-content-center">
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
                    </div>
                  </td>
                  <td
                    class="my-table-body table-font"
                    @click="RandomEgySzakkor(gyerek.id)"
                  >
                    <i class="bi bi-body bi-shuffle"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <SzakkorComp
          v-for="(szakkor, i) in szakkorok"
          :key="i"
          :szakkor="szakkor"
          :gyerekek="gyerekek"
          @click="onClickSzakkor(szakkor)"
        />
      </div>
      <ModalCucc
        :szakkorok="szakkorok"
        :gyerekek="modalgyerekek"
        :modalStatusz="modalStatusz"
        :modalszakkor="modalszakkor"
        :modalgyerek="modalgyerek"
      />
    </div>
  </main>
</template>

<script>
import ModalCucc from "@/components/ModalCucc.vue";
import SzakkorComp from "@/components/SzakkorComp.vue";
export default {
  components: {
    SzakkorComp,
    ModalCucc,
  },
  data() {
    return {
      gyerekek: [
        { id: 0, nev: "Jáger Kristóf", osztaly: "13.D", szakkorId: 0, neme:null},
        { id: 1, nev: "Ledacs-Kiss Bence", osztaly: "13.D", szakkorId: 0, neme:null},
        { id: 2, nev: "Fehér Dorián", osztaly: "13.D", szakkorId: 0, neme:null },
        { id: 3, nev: "Medgyes Csaba", osztaly: "13.D", szakkorId: 0, neme:null },
        { id: 4, nev: "Juhász Gergő", osztaly: "13.D", szakkorId: 0, neme:null },
        { id: 5, nev: "Kovács János", osztaly: "13.D", szakkorId: 0, neme:null },
        { id: 6, nev: "Polyák Alex", osztaly: "13.D", szakkorId: 0, neme:null },
        { id: 7, nev: "Oláh Péter", osztaly: "13.D", szakkorId: 0, neme:null },
        { id: 8, nev: "Fehér György", osztaly: "13.D", szakkorId: 0, neme:null },
        { id: 9, nev: "Nagy Ferenc", osztaly: "13.D", szakkorId: 0, neme:null },
        { id: 10, nev: "Hajdú István", osztaly: "13.D", szakkorId: 0, neme:null },
        { id: 11, nev: "Molnár Krisztián", osztaly: "13.D", szakkorId: 0, neme:null },
        { id: 12, nev: "Kocsis Bence", osztaly: "12.D", szakkorId: 0, neme:null },
        { id: 13, nev: "Suki Zsolt", osztaly: "12.D", szakkorId: 0, neme:null },
      ],
      szakkorok: [
        { id: 0, szakkor: "Nem jár szakkörre" },
        { id: 1, szakkor: "Foci" },
        { id: 2, szakkor: "Balett" },
        { id: 3, szakkor: "Curling" },
      ],
      modalStatusz: "",
      modalgyerekek:[],
      modalszakkor:{},
      modalgyerek:{},
    };
  },
  methods: {
    onClickGyerek(gyerek){
      this.modalStatusz = "egygyerek";
      this.modalgyerek = gyerek;
      
    },
    onClickSzakkor(szakkor){
      this.modalStatusz = "szakkor";
      this.modalszakkor = szakkor;
      this.modalgyerekek = this.gyerekek;
    },
    onClickOsztaly(osztaly){
      this.modalStatusz = 'osztalyok';
      this.modalgyerekek = this.gyerekek.filter((g) => g.osztaly == osztaly);
    },
    setModalStatusz(statusz) {
      this.modalStatusz = statusz;
    },
    RandomEgySzakkor(gyerekid) {
      const gyerek = this.gyerekek.find((g) => g.id === gyerekid);
      gyerek.szakkorId = Math.floor(Math.random() * 4);
    },
    RandomOsszesSzakkor() {
      for (const gyerek of this.gyerekek) {
        gyerek.szakkorId = Math.floor(Math.random() * 4);
      }
    },
    async fetchGyerekNeme(gyerek) {
      try {
        const nevReszek = gyerek.nev.split(' ');
        const keresztNev = nevReszek[1] || "unknown";

        const response = await fetch(`https://api.genderize.io/?name=${keresztNev}&apikey={78dbff726215e8eb05389c549cb37e7d}`);
        const data = await response.json();
        gyerek.neme = data.gender || "unknown";
      } catch (error) {
        console.error("Hiba történt az API híváskor:", error);
      }
    },
    async fetchAllGyerekNeme() {
      for (const gyerek of this.gyerekek) {
        await this.fetchGyerekNeme(gyerek);
      }
    },
  },
  mounted() {
    this.fetchAllGyerekNeme(); 
  },
};
</script>

<style>

.white-txt{
  color: var(--text-black-700);
}

.table-nevek:hover{
  transition: ease 0.3s;
  color: var(--text-color) !important;
  cursor: pointer;
}


.osztalyok:hover {
  transition: ease 0.3s;
  cursor: pointer;
  color: var(--text-color) !important;
}

.form-select {
  font-size: medium;
  max-width: 150px;
  background-color: var(--text-black-700);
}

.table-font {
  font-size: large;
  color: var(--text-black-700) !important;
}

.my-nev {
  text-align: start !important;
}

.my-table-body {
  text-align: center;
}

.bi-header {
  color: var(--text-black-700);
  font-size: 1.5rem;
}

.bi-header:hover{
  transition: ease 0.3s;
  color: var(--text-color);
  cursor: pointer;
  font-size: 1.5rem;
}

.bi-body {
  color: var(--text-black-700);
  font-size: large;
}

.bi-body:hover{
  transition: ease 0.3s;
  color: var(--text-color);
  font-size: large;
  cursor: pointer;
}

.my-table-header {
  color: var(--text-color) !important;
  font-size: 1.5rem;
  text-align: center;
}

.table {
  margin-top: 20px;
}

.table > :not(caption) > * > * {
  background: var(--bg-black-100);
}

.my-table {
  border-radius: 20px;
  overflow: hidden;
  border: var(--text-color);
}

</style>
