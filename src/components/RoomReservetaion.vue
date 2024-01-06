<template>
  <div
    class="reservation"
    @click="showPopUp"
    :class="[isRightEdge ? 'right-edge' : '', isLeftEdge ? 'left-edge' : '']"
    :style="[{ left: `${left}px` }, { right: `${right}px` }]"
  >
    {{ guest.name }}
    <PopUp
      :left="popUpTopValue"
      :bottom="popUpBottomValue"
      :guest-info="guest"
      v-if="isVisiblePopUp"
      @on-hide="hidePopUp"
    />
  </div>
</template>

<script>
import { ROW_NAME_WIDTH } from "../common/constants";
import PopUp from "./PopUp.vue";

import { mapGetters } from "vuex";
export default {
  name: "RoomReservetaion",
  components: {
    PopUp,
  },
  props: {
    guest: {
      required: true,
      type: Object,
    },
    /**
     * width of current row
     */
    clientWidth: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      isVisiblePopUp: false,
      popUpTopValue: null,
      popUpBottomValue: null,
    };
  },
  computed: {
    ...mapGetters(["getDateRange"]),
    /**
     * width of one hour
     */
    columnWidth() {
      return this.clientWidth / 7 / 24;
    },
    isLeftEdge() {
      return new Date(this.guest.start) < this.getDateRange[0];
    },
    isRightEdge() {
      return new Date(this.guest.end) > this.getDateRange[6];
    },
    startDate() {
      const startDate = new Date(this.guest.start);
      startDate.setHours(12, 0, 0, 0);
      return startDate;
    },
    endDate() {
      const endDate = new Date(this.guest.end);
      endDate.setHours(12, 0, 0, 0);
      return endDate;
    },
    /**
     * Get value where to start rendering component (css left property)
     */
    left() {
      let left =
        ROW_NAME_WIDTH +
        2 +
        this.columnWidth * this.hoursDiff(this.getDateRange[0], this.startDate);
      return left;
    },
    /**
     * Get value where to end rendering component (css right property)
     */
    right() {
      let right =
        this.columnWidth * this.hoursDiff(this.endDate, this.getDateRange[6]);
      if (this.endDate <= this.getDateRange[6]) {
        right = right + this.columnWidth * 12;
      }
      return right;
    },
  },
  beforeDestroy() {
    this.isVisiblePopUp = false;
  },
  methods: {
    /**
     * Count number of hours is reserved per week
     * @param {Date} startDate
     * @param {Date} endDate
     * @return {Number}
     */
    hoursDiff(startDate, endDate) {
      const dateFrom =
        startDate >= this.getDateRange[0] ? startDate : this.getDateRange[0];
      const dateTo =
        endDate <= this.getDateRange[6] ? endDate : this.getDateRange[6];
      dateTo.setHours(12, 0, 0, 0);
      const result = Math.trunc((dateTo - dateFrom) / (1000 * 60 * 60));
      return result >= 0 ? result : 0;
    },
    /**
     * Show popup
     * @param {Event} event
     */
    showPopUp(event) {
      this.popUpTopValue = event.offsetX;
      this.popUpBottomValue = event.target.clientHeight - event.offsetY;
      this.isVisiblePopUp = true;
    },
    /**
     * hide popup
     */
    hidePopUp() {
      this.isVisiblePopUp = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.reservation {
  border-radius: 15px;
  height: 70%;
  position: absolute;
  bottom: 0;
  background-color: #5191fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  // font-family: $--main-font-family;
}
.right-edge {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.left-edge {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
