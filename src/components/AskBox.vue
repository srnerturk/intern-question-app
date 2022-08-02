<template>
  <div class="ask-box">
    <div class="avatar">
      <img
        class="avatar-photo"
        src="https://secure.gravatar.com/avatar/?s=96&d=mm&r=g"
        alt=""
      />
    </div>
    <div class="box-question">
      <div class="message-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 40 40"
          fill="none"
          stroke="#677075"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-message-square"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          ></path>
        </svg>
      </div>
      <span class="box-text">What's your question?</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ask-box {
  width: auto;
  padding: 20px;
  display: flex;
  background-color: $main-background;
  border-bottom: solid 2px #e4e6e6;
  border-top: solid 1px #e4e6e6;
  border-right: solid 1px #e4e6e6;
  border-left: solid 1px #e4e6e6;
  .avatar {
    margin-right: 20px;
    margin: auto;
    &-photo {
      width: 30px;
      height: 30px;
      border-radius: 100%;
    }
  }
  .box-question {
    border: 1px solid #e4e6e6;
    height: 40px;
    padding: 10px;
    font-size: 12px;
    font-weight: 400;
    width: calc(100% - 50px);
    display: flex;
    .message-square {
      height: 15px;
      width: 15px;
      margin-right: 10px;
    }
    .box-text {
      color: #677075;
      font-family: $arial;
      &:hover {
        color: $blue;
      }
    }
  }
}
</style>
