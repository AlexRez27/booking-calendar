<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
