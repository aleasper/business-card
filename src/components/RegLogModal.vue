<template>
  <div>
    <div class="gray-cover">
    </div>
    <div class="reg-log-modal">
      <button
          v-on:click="close"
          id="close-btn"
      >x</button>
      <div id="login">
        <p>Username</p>
        <input
            v-model="username"
            onmousedown="this.style.outline='none'; this.style.borderBottom='2px solid #9d9d9d'"
            onmouseup="this.style.outline='none'; this.style.borderBottom='2px solid #bebebe'"
        >
      </div>
      <div id="password">
        <p>Password</p>
        <input
            v-model="password"
            type="password"
            onmousedown="this.style.outline='none'; this.style.borderBottom='2px solid #9d9d9d'"
            onmouseup="this.style.outline='none'; this.style.borderBottom='2px solid #bebebe'"
        >
      </div>
      <div id="action">
        <button
            v-on:click="sendUserData"
        >{{registration ? 'Register' : 'Login'}}</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "RegLogModal",
  props: {
    registration: Boolean,
  },
  data: ()=> {return {
    username: "",
    password: "",
  }},
  methods: {
    close(){
      this.$emit('close');
    },
    sendUserData(){
      this.$emit('login', {'username': this.username, 'password': this.password, 'registration': this.registration})
    }
  },
  mounted() {

  },
  computed: {
  },
  watch:{

  },
  updated() {
  }
}
</script>

<style scoped lang="scss">
#close-btn{
  position: absolute;
  top: 8px;
  right: 8px;
  color: #a5a5a5;
  font-size: 0.8em;
  border: none;
  background: transparent;
  cursor: pointer;
}
#close-btn:hover{
  color: #3b3b3b;
}
.gray-cover{
  z-index: -1;
  background: #000000;
  opacity: .4;
  filter: blur(0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}
.reg-log-modal{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(320px, 40%, 50%);
  height: 260px;
  box-shadow: 0 0 8px rgba(0,0,0,0.5);
  background: #FFFFFF;
  border-radius: 4px;

  display: grid;
  grid-template-areas:
      "login"
      "password"
      "action";
  grid-template-rows: 1fr 1fr 4em;
  grid-template-columns: 1fr;
  grid-gap: 0;
}

#login{
  grid-area: login;
}
#password{
  grid-area: password;
}
#action {
  grid-area: action;
}
input {
  border-radius: 4px;
  border: 2px solid #afafaf;
}
@media all and (max-width: 700px) {
  .reg-log-modal{
    width: clamp(270px, 70%, 70%);
    height: 260px;
  }
}
</style>