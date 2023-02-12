import axios from "axios";
import configRequest from "../config/api.config";

interface request {
  user?: string;
  password?: string;
  res?: object;
}

async function requestAxios({ user, password, res }: request) {
  const URL_NEXT_API = `${configRequest.endpoint.externalEndpoint.url}${configRequest.routes.externalApi.login}`;

  console.log(URL_NEXT_API)

  const request_return = axios
    .get(URL_NEXT_API, {
      params: {
        email: user,
        password: password,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });

  return request_return;
}

export default requestAxios;
