<template>
  <div id="app">
    <HeaderComponent />
    <Container>
      <div>
        <ButtonGroup />
        <TableComponent :rooms="getRooms"></TableComponent>
      </div>
    </Container>
  </div>
</template>

<script>
import ButtonGroup from "./components/ButtonGroup.vue";
import TableComponent from "@/components/TableComponent.vue";
import Container from "@/components/ContainerComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      rooms: [],
    };
  },
  components: {
    TableComponent,
    ButtonGroup,
    Container,
    HeaderComponent,
  },
  computed: {
    ...mapGetters(["getRooms"]),
  },
};
</script>
