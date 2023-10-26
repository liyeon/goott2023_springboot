/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const BIKEMEMBER_BASE_REST_API_URL = "http://localhost:8091/api/v1/bikemembers";

class BikeMemberService {
  getAllBikeMembers() {
    // 스프링에서 get 방식으로 받아준다.
    // ajax 통신을 하기위한 axios
    return axios.get(BIKEMEMBER_BASE_REST_API_URL);
  }
  createBikeMember(bikemember) {
    return axios.post(BIKEMEMBER_BASE_REST_API_URL, bikemember);
  }
  // createBikeMember(bikemember) {
  //   return axios.post(BIKEMEMBER_BASE_REST_API_URL+"/num", bikemember);
  // }
  getBikeMemberById(bikememberId) {
    return axios.get(BIKEMEMBER_BASE_REST_API_URL + "/" + bikememberId);
  }
  updateBikeMember(bikememberId, bikemember) {
    return axios.put(
      BIKEMEMBER_BASE_REST_API_URL + "/" + bikememberId,
      bikemember
    );
  }

  deleteBikeMember(bikememberId) {
    return axios.delete(
      BIKEMEMBER_BASE_REST_API_URL + "/" + bikememberId
    );
  }

  loginBikeMember(bikememberId){
    return axios.get(BIKEMEMBER_BASE_REST_API_URL+"/"+bikememberId);
  }
}
export default new BikeMemberService();
