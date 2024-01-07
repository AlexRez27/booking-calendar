<template>
  <div class="container">
    <table class="table" cellspacing="0">
      <tr class="table__header">
        <th class="table__empty"></th>
        <th
          v-for="(date, i) in getDateRange"
          :key="i"
          class="table__columnname"
          :class="i === currentDayIndex ? 'currentDay' : ''"
        >
          {{ date | dateFilter }}
        </th>
      </tr>
      <TableRow
        v-for="(row, i) in rooms"
        :key="row"
        :currentDayIndex="currentDayIndex"
        :room="row"
        :rowNumber="i"
        :reservationsList="
          getReservationInfo.filter((el) => el.roomDetails.name === row)
        "
      />
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import TableRow from "./TableRow.vue";

export default {
  name: "TableComponent",
  components: {
    TableRow,
  },
  props: {
    /**
     * Array of available rooms
     */
    rooms: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getDateRange", "getReservationInfo"]),
    /**
     * currentDayIndex - index of current date in date range array
     */
    currentDayIndex() {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      // console.log(currentDate);
      // console.log(this.getDateRange[0]);
      return this.getDateRange.findIndex(
        (el) => el.getTime() === currentDate.getTime()
      );
    },
  },
  mounted() {
    this.getWeeklyReservations(this.getDateRange);
  },
  methods: {
    ...mapActions(["getWeeklyReservations"]),
  },
};
</script>

<style lang="scss" scoped>
.table {
  margin-top: 70px;
  &__columnname,
  &__rows,
  td {
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  &__columnname {
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: bold;
    width: 150px;
  }
  &__empty {
    border-top: 0;
    border-left: 0;
  }
}

.currentDay {
  background-color: #f1ffe4;
}
</style>
