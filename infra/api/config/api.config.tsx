const request = {
  endpoint: {
    internalEndpoint: {
      url:"http://localhost:3000"
    },
    externalEndpoint: {
      url:"https://plw3477.vps-kinghost.net"
    }
  },
  routes: {
    externalApi: {
      login: "/login",
      createUser: "/login",
      searchUser: "/users/search",
    },
    internalApi: {
      home: "/api/home"
    },
  },
};

export default request;
