import reservation from "./reservationServer.js";
import room from "./roomServer.js";
import activity from "./activityServer.js";

const activityServer = activity(process.argv[2]);
const roomServer = room(process.argv[3]);
const reservationServer = reservation(
  process.argv[4],
  process.argv[2],
  process.argv[3]
);
