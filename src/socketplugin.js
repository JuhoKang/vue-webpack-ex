export default function createSocketPlugin (socket) {
  return store => {
    socket.on("serverHello", (data) => {
      console.log(data);
      store.commit("serverMessageChange", data.msg);
      store.commit("countChange", data.count);
    });
  }
}