<template>
  <div class="stats-container">
    <div class="statistics">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardStats",
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  background: white;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}

.stats-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.statistics {
  width: 267px;
  height: 224px;
  background: whitesmoke;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease;
  h2 {
    color: black;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    align-items: center;
  }
  .statistics-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    .card {
      background: white;
      padding: 0rem;
      padding-bottom: 1rem;
      box-shadow: inset 0px 0px 10px rgba (darkgray, 0.5),
        0px 10px 10px rgba(#111111, 0.5);
      position: static;
      .title {
        text-align: center;
        font-size: 0.8rem;
        color: black;
        margin-bottom: 0.5rem;
      }
      .count {
        color: black;
        text-align: center;
        font-size: 2.1rem;
      }
      &:nth-child(1) .count {
        border-left: 4px solid #2d6ff7;
      }
      &:nth-child(2) .count {
        border-right: 4px solid #f05555;
      }
      &:nth-child(3) .count {
        border-left: 4px solid #1fae5b;
      }
      &:nth-child(4) .count {
        border-right: 4px solid #2d6ff7;
      }
    }
  }
}
</style>
