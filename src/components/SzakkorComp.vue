<template>
  <div class="card card-border-dark my-card" v-if="GyerekekSzakkorben.length">
    <div
      class="card-header"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <h4 class="szakkor-nev">{{ szakkor.szakkor }}</h4>
    </div>
    <div class="card-body text-dark mb-2">
      <span class="my-span" v-for="(gyerek, i) in GyerekekSzakkorben" :key="i">
        <span class="nevek">{{ gyerek.nev }}</span
        ><span class="separate" v-if="i < GyerekekSzakkorben.length - 1">
          /
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["szakkor", "gyerekek"],
  computed: {
    GyerekekSzakkorben() {
      return this.gyerekek
        .filter((g) => g.szakkorId == this.szakkor.id)
        .sort((a, b) => a.nev.localeCompare(b.nev));
    },
  },
};
</script>

<style>
h4,
h1,
h2,
h3,
h5,
h6 {
  color: var(--text-color);
}


.szakkor-nev{
  color: var(--text-black-700);
}

.szakkor-nev:hover{
  transition: ease 0.3s;
  color: var(--text-color);
  cursor: pointer;
}

.my-card {
  margin-top: 20px;
  background: var(--bg-black-100) !important;
  border: solid 1px var(--text-color);
}

.my-span {
  color: var(--text-black-700);
  font-size: large;
}

.card-header {
  border-bottom: solid 1px var(--text-color);
}


.separate {
  color: var(--text-color);
}

.nevek:hover {
  transition: ease 0.3s;
  color: var(--text-color) !important;
}
</style>
