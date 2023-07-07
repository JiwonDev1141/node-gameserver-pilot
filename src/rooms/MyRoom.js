import { Room } from "@colyseus/core";
import { MyRoomState } from "./schema/MyRoomState.js";

export class MyRoom extends Room {
  maxClients = 4;

  onCreate (options) {

    this.setState(new MyRoomState());

    this.onMessage("type", (client, message) => {
      //
      // handle "type" message.
      //
    });

    this.onMessage("chat", (client, message) => {
      this.broadcast("chat", {
        
        message: `${client.sessionId}: ${message}`
      })
    })

  }

  onJoin (client, options) {
    console.log(client.sessionId, "joined!");
  }

  onLeave (client, consented) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
