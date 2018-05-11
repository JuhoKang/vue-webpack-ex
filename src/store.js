import Vue from 'vue'
import Vuex from 'vuex'
import io from "socket.io-client";
import createSocketPlugin from './socketplugin';

Vue.use(Vuex)

const socket = io("http://localhost:3000")


const plugin = createSocketPlugin(socket);

export default new Vuex.Store({
  state: {
    count: 0,
    serverMessage: "Nothing yet",
  },
  mutations: {
    increment (state) {
      state.count++
    },
    serverMessageChange (state, msg) {
      state.serverMessage = msg
    },
    countChange (state, x) {
      state.count = x;
    }
  },
  actions: {
    //need some more knowledge
    sendMessage (context) {
      socket.emit("hello", { greetings: "hello", count: this.state.count });
    }
  },
  plugins: [plugin],
})
