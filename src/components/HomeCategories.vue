<template>
  <div class="categories">
    <ul class="categories-menu">
      <li>
        <a class="active" href="#">Recent Questions</a>
      </li>
      <li>
        <a href="#">Most Answered</a>
      </li>
      <li>
        <a href="#">Bump Questions</a>
      </li>
      <li>
        <a href="#">Answers</a>
      </li>
      <li>
        <a href="#">Most Visited</a>
      </li>
      <li>
        <a href="#">Most Voted</a>
      </li>
      <li>
        <a href="#">No Answers</a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.categories {
  width: auto;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  background-color: $main-background;
  border-bottom: solid 2px #e4e6e6;
  border-left: solid 1px #e4e6e6;
  border-right: solid 1px #e4e6e6;
  .categories-menu {
    height: 100%;
    display: flex;
    list-style-type: none;
    overflow: auto;
    li {
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 20px;
      a {
        text-decoration: none;
        font-family: $arial;
        font-size: 13px;
        display: flex;
        align-items: center;
        height: 100%;
        color: $text-gray-100;
        white-space: nowrap;
        transition: ease-in-out 0.3s;
        &:hover {
          color: $primary-color;
          border-bottom: 5px solid;
        }
        &.active {
          color: $primary-color;
          border-bottom: 5px solid;
        }
      }
    }
  }
}
</style>
