<template>
  <!-- Button trigger modal -->
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-between">
          <div>
            <h1
              v-if="this.modalStatusz == 'osztalyok'"
              class="modal-title fs-5"
              id="exampleModalLabel"
            >
              {{
                gyerekek.length > 0 ? gyerekek[0].osztaly : "Nincs adat"
              }}
              osztály
            </h1>
            <h1
              v-if="this.modalStatusz == 'szakkor'"
              class="modal-title fs-5"
              id="exampleModalLabel"
            >
              {{ this.modalszakkor.szakkor }}
            </h1>
            <h1
              v-if="this.modalStatusz == 'egygyerek'"
              class="modal-title fs-5"
              id="exampleModalLabel"
            >
              {{ modalgyerek.nev }}
            </h1>
          </div>

          <div>
            <i
              class="bi close-icon bi-x-lg"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></i>
          </div>
        </div>
        <div class="modal-body">
          <!-- Osztályok állpot -->
          <div v-if="this.modalStatusz == 'osztalyok'">
            <h2>Leggyakoribb szakkor</h2>
            <hr />
            <table class="table">
              <thead>
                <tr>
                  <th class="my-th">Név</th>
                  <th class="my-th">Szakkör</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="gyerek of this.gyerekek" :key="gyerek.id">
                  <td class="my-td">{{ gyerek.nev }}</td>
                  <td class="my-td">
                    {{ szakkoridalapjan(gyerek.szakkorId) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Gyerek állapot -->
          <div v-if="this.modalStatusz == 'egygyerek'">
            <h2>Egy gyerek</h2>
          </div>


          <!-- Szakkör állapot -->
          <div v-if="this.modalStatusz == 'szakkor'">
            <h2>Szakkör</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "szakkorok",
    "gyerekek",
    "modalStatusz",
    "modalszakkor",
    "modalgyerek",
  ],
  methods: {
    tesztlog() {
      console.log(this.modalszakkor.szakkor);
    },
    szakkoridalapjan(szakkorid) {
      return this.szakkorok.filter((sz) => sz.id == szakkorid)[0].szakkor;
    },
    gyerekszakkoralapjan(szakkor){

    }
  },
};
</script>

<style scoped>

.modal-title {
  font-size: xx-large !important;
}

hr {
  color: var(--text-color);
  font-size: large;
}

.my-td {
  color: var(--text-black-700);
}

.my-th {
  color: var(--text-color);
}

.modal-content {
  background: var(--bg-black-100);
}

.modal-header {
  border-bottom: 1px solid var(--text-color);
}

.close-icon {
  color: var(--text-black-700) !important;
  font-size: 1.5rem;
}

.close-icon:hover {
  transition: ease 0.3s;
  color: var(--text-color) !important;
  cursor: pointer;
}
</style>
