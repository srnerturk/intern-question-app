<template>
  <header class="header">
    <div class="header-container">
      <div class="navbar-brand">
        <buttonBase
          :color="['backwhite', 'fontblue']"
          size=""
          fontfamily=""
          class="btn-brand"
          @click="onClick"
          >Discy</buttonBase
        >
      </div>
      <div class="navbar-menu">
        <ul>
          <buttonBase
            :color="[
              'backwhite',
              'fontblack',
              'hoverbackblack',
              'hoverfontwhite',
            ]"
            size=""
            fontfamily="roboto"
            class="btn-menu"
            @click="onClick"
            >Home</buttonBase
          >
        </ul>
        <ul>
          <buttonBase
            :color="[
              'backwhite',
              'fontblack',
              'hoverbackblack',
              'hoverfontwhite',
            ]"
            size=""
            fontfamily="roboto"
            class="btn-menu"
            @click="onClick"
            >About Us</buttonBase
          >
        </ul>
        <ul>
          <buttonBase
            :color="[
              'backwhite',
              'fontblack',
              'hoverbackblack',
              'hoverfontwhite',
            ]"
            size=""
            fontfamily="roboto"
            class="btn-menu"
            @click="onClick"
            >Blog</buttonBase
          >
        </ul>
        <ul>
          <buttonBase
            :color="[
              'backwhite',
              'fontblack',
              'hoverbackblack',
              'hoverfontwhite',
            ]"
            size=""
            fontfamily="roboto"
            class="btn-menu"
            @click="onClick"
            >Contact Us</buttonBase
          >
        </ul>
        <div class="search-bar">
          <div class="search">
            <input
              type="text"
              class="text-term"
              placeholder="Type Search Words"
            />
            <div @click="click">
              <button @click="onClick" type="îcon" class="icon-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#677075"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="login-container">
          <ul>
            <buttonBase
              :color="[
                'fontgrey',
                'backwhite',
                'hoverfontwhite',
                'hoverbackred',
              ]"
              size=""
              fontfamily="roboto"
              class="btn"
              @click="isOpenIn = !isOpenIn"
              >Sign In</buttonBase
            >
            <div v-if="isOpenIn">
              <div class="overlay">
                <div class="modal">
                  <svg
                    @click="(isOpenIn = false), (isOpenUp = false)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-x modal-close"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>

                  <div class="modal-header">
                    <h3>Sıgn In</h3>
                  </div>

                  <div class="modal-body">
                    <div class="username">
                      <label for="uname">Username or email </label>
                      <span>*</span>

                      <input type="text" name="uname" required class="row" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-user loginuser"
                      >
                        <path
                          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        ></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>

                    <!-- Password -->
                    <div class="password">
                      <label for="psw">Password </label>
                      <span>*</span>
                      <input type="password" name="psw" required class="row" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-unlock password-icon"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                      </svg>
                    </div>
                    <div class="remember clearfix">
                      <label>
                        <input
                          type="checkbox"
                          checked="checked"
                          name="remember"
                        />
                        Remember Me!
                      </label>
                      <a href="" class="forgot">Forgot password?</a>
                    </div>
                    <button class="login-btn"><h4>Login</h4></button>
                  </div>
                  <div class="modal-footer">
                    <h5>
                      Don't have account,<button
                        @click="(isOpenUp = !isOpenUp), (isOpenIn = false)"
                      >
                        Sign Up Here
                      </button>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </ul>
          <ul>
            <buttonBase
              :color="['backblue', 'fontwhite', 'hoverbackblack']"
              size=""
              fontfamily="roboto"
              class="btn"
              @click="isOpenUp = !isOpenUp"
              >Sign Up</buttonBase
            >
            <div v-if="isOpenUp">
              <div class="overlay">
                <div class="modal">
                  <svg
                    @click="(isOpenIn = false), (isOpenUp = false)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-x modal-close"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>

                  <div class="modal-header">
                    <h3>Sıgn Up</h3>
                  </div>

                  <div class="modal-body">
                    <div class="username">
                      <label for="uname">Username</label>
                      <span>*</span>

                      <input type="text" name="uname" required class="row" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-user loginuser"
                      >
                        <path
                          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        ></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div class="password">
                      <label for="psw">E-Mail </label>
                      <span>*</span>
                      <input type="email" name="psw" required class="row" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-mail"
                      >
                        <path
                          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        ></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <!-- Password -->
                    <div class="password">
                      <label for="psw">Password </label>
                      <span>*</span>
                      <input type="password" name="psw" required class="row" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-unlock password-icon"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                      </svg>
                    </div>
                    <div class="password">
                      <label for="psw">Confirm Pasword </label>
                      <span>*</span>
                      <input type="password" name="psw" required class="row" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-lock"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <div class="sign-check clearfix">
                      <label>
                        <input
                          type="checkbox"
                          checked="checked"
                          name="remember"
                        />
                        By registering, you agree to the
                        <a href="">Terms of Service</a> and
                        <a href="">Privacy Policy</a> . <span>*</span>
                      </label>
                    </div>
                    <button type="submit" class="signup-btn">
                      <h4>Signup</h4>
                    </button>
                  </div>
                  <div class="modal-footer">
                    <h5>
                      Have an account?,<button
                        @click="(isOpenIn = !isOpenIn), (isOpenUp = false)"
                      >
                        Sign In
                      </button>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import buttonBase from "./buttonBase.vue";
export default {
  methods: {
    click() {
      this.$emit("click");
    },
    onClick() {
      alert();
    },
  },
  name: "NavbarContainer",
  components: {
    buttonBase,
  },
  data: function () {
    return {
      isOpenIn: false,
      isOpenUp: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  background-color: #ffffff;
  border-bottom-style: solid;
  border-color: $background-gray-400;
  border-width: 1px;
  width: 100%;
  height: 80px;
}
.header-container {
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar-menu {
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  height: 80px;
  align-items: center;
}
.login-container {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  grid-gap: 10px;
}

.navbar-brand {
  font-size: 25px;
}
.btn {
}
.btn-menu {
  padding: 8px 8px;
}

.btn-brand {
  font-size: 30px;
}
//Search Bar
.search-bar {
  margin-left: 20px;
  border-color: #ffffff;
}
.search {
  width: 100%;
  display: flex;
  border: 0;
}
.text-term {
  font-size: 11.7px;
  font-family: "open sans", Arial, sans-serif;
  font-style: italic;
  background-color: $background-gray-300;
  padding: 0px 60px;
  margin-top: 1px;
  border: none;
  padding-left: 7px !important;
  input.placeholder {
    text-align: center;
  }
  &:focus {
    border: none;
    outline: none;
  }
}
.icon-search {
  border: none;
  padding: 6px 8px;
  cursor: pointer;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  overflow: scroll;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(39, 41, 48, 0.95);
  z-index: 999;
  transition: opacity 0.2s ease;
}
@import "../assets/scss/main.scss";
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}
a {
  text-decoration: none;
}
.modal {
  position: relative;
  width: 25%;
  margin: auto auto;
  margin-top: 90px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  &-close {
    position: absolute;
    top: -30px;
    right: 0;
    color: $main-background;
  }
  &-close:hover {
    cursor: pointer;
  }
  span {
    color: red;
  }
}

.modal-header {
  height: 100px;
  background-color: $blue;
  padding: 70px 10px;
  h3 {
    text-align: center;
    font-family: $roboto;
    font-size: 24px;
    font-weight: 700;
    color: $main-background;
  }
}
.modal-body {
  background-color: #fff;
  color: $text-gray-100;
  padding: 60px;
  line-height: 40px;
  .username input,
  .password input {
    padding: 10px;
    width: 100%;
    padding-left: 30px;
  }
  svg {
    position: relative;
    top: -36px;
    left: 6px;
  }
  .password {
    margin-top: -25px;
  }
  input {
    margin-top: -14px;
    padding: 11px 11px 11px 30px;
    border: 1px solid $background-gray-400;
    &:focus {
      outline: none;
    }
  }
  .remember {
    margin-top: -25px;
    a {
      color: $text-gray-700;
      &:hover {
        color: $blue;
      }
    }
  }
}
.modal-footer {
  margin-top: 5px;
  text-align: center;
  h5 {
    color: $main-background;
  }
  button {
    border: none;
    background: none;
    color: $blue;
    font-weight: 700;
    &:hover {
      color: $main-background;
      cursor: pointer;
    }
  }
}
.open-modal {
  border: none;
  background-color: $main-background;
  color: $text-gray-500;
  &:hover {
    background-color: $red-100;
    color: $main-background;
  }
}
label {
  font-size: 12px;
  font-family: $arial;
  padding-bottom: 0;
  &:hover {
    cursor: pointer;
  }
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.forgot {
  float: right;
  font-size: 12px;
  text-decoration: none;
}
.login-btn,
.signup-btn {
  width: 100%;
  padding: 11px 12px 12px;
  border: none;
  background-color: $blue;
  color: $main-background;
  transition: background-color 0.5s ease-in;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    background-color: $text-gray-100;
  }
}
.sign-check {
  line-height: 16px;
  margin-top: -15px;
  a {
    color: $text-gray-700;
    &:hover {
      color: $blue;
    }
  }
}
</style>
