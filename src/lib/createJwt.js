import axios from "axios";

async function createJwt(data) {
  const res = await axios.post("/jwt", data);
  return res;
}
export default createJwt;
