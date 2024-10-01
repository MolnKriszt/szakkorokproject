<template>
  <div class="card card-border-dark my-card" v-if="GyerekekSzakkorben.length">
    <div class="card-header"><h4>{{ szakkor.szakkor }}</h4></div>
    <div class="card-body text-dark mb-2">
      <span
        class="my-span"
        v-for="(gyerek, i) in GyerekekSzakkorben"
        :key="i">
        {{ gyerek.nev }}<span v-if="i < GyerekekSzakkorben.length - 1">, </span>
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
.my-card-color {
  background: #d7d6cd !important;
}

.my-box {
  border: 1px dashed green;
}

h4{
  color: var(--text-color);
}

.my-card{
  margin-top: 20px;
}
</style>
