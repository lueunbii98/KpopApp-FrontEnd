import { ApiService } from "./api.service";

export const GetAllMembers = () => {
    return new Promise(async resolve => {
      return ApiService.get("Member")
        .then((response) => {
          resolve(response.data);
        })
        .catch(({ response }) => {
          resolve(response);
        });
    });
  }