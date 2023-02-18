// import { BASE_INSTANCE } from 'api/constant';
import { BASE_INSTANCE } from "../../constant";

export const signUpServices = (data) => BASE_INSTANCE.post('/user', data);
