export default function createSocketPlugin (socket) {
  return store => {
    socket.on("serverHello", (data) => {
      store.commit("serverMessageChange", data)
    });
  }
}