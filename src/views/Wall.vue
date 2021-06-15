<template>
  <div class="wall-div">
    <header>
      <button
          v-if="!loggedIn"
          class="reg-log-btn"
          v-on:click="openLogin"
      >Login</button>
      <button
          v-if="!loggedIn"
          class="reg-log-btn"
          v-on:click="openRegister"
      >Registration</button>
      <button
          v-if="loggedIn"
          class="reg-log-btn"
          v-on:click="logOut"
      >Log out</button>
    </header>
    <h1>This is wall for your messages</h1>
    <div class="comments-div">
      <Comment
          v-for="(comment, index) in comments"
          :key="index"
          class="comment"
          :text="comment['comment']"
          :username="comment['user']"
      ></Comment>
      <div
          v-if="loggedIn"
      >
        <p>Leave your comment here</p>
        <input
            v-model="thisComment"
        >
        <button
            v-on:click="sendComment"
        >Send</button>
      </div>
    </div>
    <reg-log-modal
        v-if="registration || login"
        v-bind:registration="registration"
        v-on:close="registration = false; login = false;"
        v-on:login="sendLogReg"
    ></reg-log-modal>
  </div>
</template>

<script>
import RegLogModal from "../components/RegLogModal";
import {postData, getRequest} from "../unitls/httpMethods.js"
import Comment from "../components/Comment";
export default {
  name: "Wall",
  components: {Comment, RegLogModal},
  props: {
  },
  data: ()=> {return {
    registration : false,
    login: false,
    loggedIn: sessionStorage.getItem('temp_token') ? true: false,
    comments: [],
    thisComment: '',
  }},
  methods: {
    openRegister(){
      this.login = false;
      this.registration = true;
    },
    openLogin(){
      this.login = true;
      this.registration = false;
    },
    logOut(){
      sessionStorage.removeItem('temp_token');
      this.loggedIn = false
    },
    sendLogReg(data){
      let url = ' http://127.0.0.1:5000';
      let regUrl = '/api/users';
      let logUrl = '/api/token';
      if (data['registration']){
        postData(url+regUrl,
            {
              username: data['username'],
              password: data['password']
            } ).then((res)=>{
          console.log(res);
          let base64 = btoa(`${data['username']}:${data['password']}`)
          let headers = {
            Authorization: `Basic ${base64}`
          }
          getRequest(url+logUrl, {}, headers).then((res)=>{
            console.log(res);
            sessionStorage.setItem('temp_token', res['token']);
            this.loggedIn = true;
          });
        })
      } else {
        let base64 = btoa(`${data['username']}:${data['password']}`)
        let headers = {
          Authorization: `Basic ${base64}`
        }
        getRequest(url+logUrl, {}, headers).then((res)=>{
          console.log(res);
          sessionStorage.setItem('temp_token', res['token']);
          this.loggedIn = true;
        });
      }
      this.registration = false;
      this.login = false;
    },
    sendComment(){
      let url = ' http://127.0.0.1:5000';
      let postCommentUrl = '/api/post_comment';
      let base64 = btoa(`${sessionStorage.getItem('temp_token')}:`)
      let headers = {
          Authorization: `Basic ${base64}`
        }
      postData(url+postCommentUrl, {comment: this.thisComment}, headers).then(r => {
        console.log(r);
         this.getComments();
      })
    },
    getComments(){
      let url = ' http://127.0.0.1:5000';
    let getCommentsUrl = '/api/get_comments/';
    getRequest(url+getCommentsUrl).then(res => {
      this.comments = res['comments'];
    })
    }

  },
  created() {
    this.getComments();
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
.wall-div{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  align-items: center;
}
header {
  width: 100%;
  height: 60px;
  background: #a5a5a5;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
input {
  border-radius: 4px;
  border: 2px solid #afafaf;
}
button{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.reg-log-btn{
  cursor: pointer;
  margin: 16px 16px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background: #FFFFFF;
}
.reg-log-btn:hover{
  box-shadow: 0 0 8px rgba(0,0,0,0.5);
}
.comments-div{
  width: 60%;
}
.comment{
  margin: 8px 4px;
}
</style>