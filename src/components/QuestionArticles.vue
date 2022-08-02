<template>
  <article>
    <div class="pinned">Pinned</div>
    <div class="user-vote">
      <div class="user">
        <div class="user-img">
          <img
            class="user"
            src="https://2code.info/demo/themes/Discy/Try/wp-content/uploads/2018/04/team-2-42x42.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="vote">
        <vote-container direction="column" currentValue="195" />
      </div>
    </div>
    <div class="content">
      <div class="meta">
        <div class="user">
          <a href="#" class="full-name">Martin Hope</a>
        </div>
        <ul class="post-meta">
          <li>
            <span>Asked: </span>
            <a href="#">April 19, 2018</a>
          </li>
          <li>
            <span>In: </span>
            <a href="#">language</a>
          </li>
        </ul>
      </div>

      <router-link class="title" :to="'/question'"
        >Is this statement, “i see him last night” can be understood as “I saw
        him last night”?</router-link
      >

      <div class="description">
        In my local language (Bahasa Indonesia) there are no verb-2 or past
        tense form as time tracker. So, I often forget to use the past form of
        verb when speaking english. I saw him last night (correct) I see him
        last night
      </div>
      <ul class="tags">
        <li>
          <a href="#">english</a>
        </li>
        <li>
          <a href="#">language</a>
        </li>
      </ul>
      <div class="answer">
        <ul class="answer-tabs">
          <li class="best-answer">
            <a class="icon-text" href="#">
              <div class="message-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="#656C77"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-message-circle"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  ></path>
                </svg>
              </div>
              <span class="text">3 answers</span>
            </a>
          </li>
          <li class="view-stats">
            <div class="eye">
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
                class="feather feather-eye"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <span class="views">408 views</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
<script>
import VoteContainer from "./VoteContainer.vue";
export default {
  components: {
    VoteContainer,
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000;
}
ul {
  list-style-type: none;
}
article {
  width: auto;
  background-color: $main-background;
  border-bottom: solid 1px #e4e6e6;
  border-left: solid 1px #e4e6e6;
  border-right: solid 1px #e4e6e6;
  padding: 30px;
  position: relative;
  overflow: hidden;
  display: flex;
  .pinned {
    background-color: $red-300;
    color: $main-background;
    font-weight: 700;
    position: absolute;
    right: -35px;
    top: 20px;
    padding: 5px 50px;
    transform: rotate(45deg);
  }
  .user-vote {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    .user {
      .user-img {
        width: 45px;
        height: 45px;
        border-radius: 100%;
        border: solid 2px $blue;
        display: flex;
        align-items: center;
        justify-content: center;
        .user {
          width: 35px;
          height: 35px;
          border-radius: 100%;
        }
        &:hover {
          border: solid 2px $primary-color;
        }
      }
    }
    .vote {
      margin: auto;
    }
  }
  .content {
    .meta {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      .user {
        .full-name {
          font-size: 14px;
          margin-right: 20px;
          color: $blue;
          font-family: roboto, Arial, sans-serif;
          &:hover {
            color: $primary-color;
          }
        }
      }
      .post-meta {
        display: flex;
        font-size: 11px;
        list-style-type: none;
        li {
          margin-right: 10px;
          span {
            color: $text-gray-200;
            font-family: $arial;
          }
          a {
            font-family: $arial;
            color: $blue;
            &:hover {
              color: $primary-color;
            }
          }
        }
      }
    }
  }
  .title {
    display: block;
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 15px;
    color: $primary-color;
    font-family: roboto, Arial, sans-serif;
    &:hover {
      color: $blue;
    }
  }
  .description {
    font-size: 14px;
    color: $text-gray-200;
    margin-bottom: 25px;
    font-family: roboto, Arial, sans-serif;
  }
  .tags {
    display: flex;
    margin-bottom: 25px;
    li {
      list-style-type: none;
      margin-right: 10px;
      a {
        font-size: 11px;
        color: $text-gray-100;
        border: solid 1px #e1e3e3;
        padding: 5px;
        &:hover {
          background-color: $blue;
          color: $main-background;
        }
      }
    }
  }
  .answer {
    .answer-tabs {
      list-style-type: none;
      display: flex;
      .best-answer {
        margin-right: 20px;
        font-size: 12px;
        font-family: $arial;
        color: $text-gray-100;
        .icon-text {
          display: flex;
          .message-circle {
            height: 15px;
            width: 15px;
            margin-right: 10px;
          }
          .text {
            font-size: 12px;
            font-family: $arial;
            color: $text-gray-100;
          }
        }
      }
      .view-stats {
        font-size: 12px;
        font-family: $arial;
        color: $text-gray-100;
        display: flex;
        .eye {
          height: 15px;
          width: 15px;
          margin-right: 10px;
        }
        .view {
          font-size: 12px;
          font-family: $arial;
          color: $text-gray-100;
        }
      }
    }
  }
}
</style>
