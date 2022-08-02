<template>
  <div class="stats-container">
    <div class="statistics">
      <div class="home">
        <h2>
          Stats

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bar-chart-2"
          >
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        </h2>
        <div class="statistics-grid">
          <div class="card square">
            <p class="title">Questions</p>
            <p class="count">22</p>
          </div>

          <div class="card square">
            <p class="title">Answers</p>
            <p class="count">72</p>
          </div>

          <div class="card square">
            <p class="title">Best Answers</p>
            <p class="count">11</p>
          </div>

          <div class="card square">
            <p class="title">Users</p>
            <p class="count">101</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardStats",
};
</script>

<style lang="scss" scoped>
.stats-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  padding: 20px 10px;
}

.statistics {
  width: 100%;
  height: 224px;
  background: whitesmoke;
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
