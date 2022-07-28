<template>
  <div class="side-bar">
    <ul class="side-bar-list">
      <li class="side-bar-list-item">
        <a href="" class="side-bar-list-item-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="side-bar-list-item-link-icon"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <p>Home</p></a
        >
      </li>
      <li class="side-bar-list-item">
        <a href="" class="side-bar-list-item-link">
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
            class="side-bar-list-item-link-icon"
          >
            <path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            ></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <p>Add Post</p></a
        >
      </li>
      <li class="side-bar-list-item">
        <a href="" class="side-bar-list-item-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="side-bar-list-item-link-icon"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <p>Questions</p>
        </a>
        <ul class="sub-menu">
          <li class="sub-menu-item">
            <a href="" class="sub-menu-item-text">New Question</a>
          </li>
          <li class="sub-menu-item">
            <a href="" class="sub-menu-item-text">Trending Questions</a>
          </li>
          <li class="sub-menu-item">
            <a href="" class="sub-menu-item-text">Must read Questions</a>
          </li>
          <li class="sub-menu-item">
            <a href="" class="sub-menu-item-text">Hot Questions</a>
          </li>
        </ul>
      </li>
      <li class="side-bar-list-item">
        <a href="" class="side-bar-list-item-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="side-bar-list-item-link-icon"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <p>Users</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SideBar",
};
</script>
<style lang="scss" scoped>
.side-bar {
  background-color: $background-gray-200;
  height: 800px;
  width: 320px;
  line-height: 22px;
  font-size: 14px;
  font-weight: 700;
  font-family: $roboto;
  padding-inline-start: 40px;

  &-list {
    //ul
    padding-top: 50px;
    display: block;
    list-style: none;

    &-item {
      //li
      list-style: none;
      margin-bottom: 20px;
      overflow: hidden;
      margin-left: 60px;
      &-link {
        &:hover {
          color: blue;
        }
        //a
        text-decoration: none;
        color: $text-gray-600;
        display: flex;
        transition: color 0.15s ease-in;
        &-icon {
          //svg
          margin-right: 10px;
          font-size: 20px;
          font-weight: 400;
          float: left;
          &:hover {
            color: blue;
          }
        }
      }
    }
  }
}
.sub-menu {
  //ul

  margin: 10px 0;

  padding: 0 0 0 33px;
  clear: both;

  &-item {
    //li

    margin-bottom: 8px;
    list-style: none;
    overflow: hidden;

    &-text {
      //a
      &:hover {
        color: blue;
      }
      text-decoration: none;
      color: $text-gray-100;
      font-size: 13px;
      font-weight: 400;
    }
  }
}
</style>
