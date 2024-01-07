<template>
  <tr class="row">
    <td :ref="`row${rowNumber}`" class="rowname">
      <span class="room" :style="{ width: `${startPosition}px` }"
        >{{ room }} {{ clientWidth }}</span
      >
    </td>
    <td
      class="cell"
      v-for="i in 7"
      :key="i"
      :class="i - 1 === currentDayIndex ? 'currentDay' : ''"
    ></td>
    <RoomReservetaion
      v-for="reserv in reservationsList"
      :key="reserv.id"
      :guest="reserv"
      :clientWidth="clientWidth"
    />
  </tr>
</template>

<script>
import { ROW_NAME_WIDTH } from "../common/constants";
import RoomReservetaion from "./RoomReservetaion.vue";
import { mapGetters } from "vuex";

export default {
  name: "TableRow",
  components: { RoomReservetaion },
  props: {
    currentDayIndex: {
      type: Number,
      required: true,
    },
    /**
     * Room name
     */
    room: {
      type: String,
      required: true,
    },
    rowNumber: {
      type: Number,
      required: true,
    },
    /**
     * Array of reservation fro current room
     */
    reservationsList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      clientWidth: 0,
      resize: null,
    };
  },
  computed: {
    ...mapGetters(["getDateRange", "getReservationInfo"]),
    startPosition() {
      return ROW_NAME_WIDTH;
    },
  },
  mounted() {
    /**
     * observe on table row width changing
     */
    this.resize = new ResizeObserver(this.onResize);
    this.resize.observe(this.$el);
  },
  beforeDestroy() {
    this.resize.unobserve(this.$el);
  },
  methods: {
    /**
     * get width of current row withou first column with room name
     */
    onResize() {
      this.clientWidth = this.$el.clientWidth - this.startPosition;
    },
  },
};
</script>

<style lang="scss" scoped>
.row,
td {
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.row {
  position: relative;
}
.rowname {
  font-size: $--main-font-size;
  color: #7db466;
  font-weight: bold;
  position: relative;
  height: 70px;
  box-sizing: border-box;
  font-family: $--main-font-family;
}
.cell {
  position: relative;
}

.currentDay {
  background-color: #f1ffe4;
}

.room {
  display: block;
  padding-left: 10px;
  box-sizing: border-box;
}
</style>
