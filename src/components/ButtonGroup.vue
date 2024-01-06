<template>
  <div class="container">
    <Button @on-click="minusWeekHandler"> &#60; </Button>
    <Button @on-click="addWeekHandler"> > </Button>
    <Button @on-click="gotoCurrentWeekHandler"> Today </Button>
  </div>
</template>

<script>
import Button from "@/components/ButtonComponent.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ButtonGroup",
  components: {
    Button,
  },
  computed: {
    ...mapGetters(["getDateRange"]),
  },
  methods: {
    ...mapActions([
      "addWeek",
      "minusWeek",
      "gotoCurrentWeek",
      "getWeeklyReservations",
    ]),
    addWeekHandler() {
      this.addWeek();
      this.$nextTick(() => {
        this.getWeeklyReservations(this.getDateRange);
      });
    },
    minusWeekHandler() {
      this.minusWeek();
      this.$nextTick(() => {
        this.getWeeklyReservations(this.getDateRange);
      });
    },
    gotoCurrentWeekHandler() {
      this.gotoCurrentWeek();
      this.$nextTick(() => {
        this.getWeeklyReservations(this.getDateRange);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 200px;
  display: grid;
  grid-template-rows: repeat(1, minmax(0, 1fr));
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 20px;
}
</style>
