import request from "@/infra/api/config/api.config";
import { useState, useEffect } from "react";
import axios from "axios";
import { parseCookies } from "nookies";
import Link from "next/link";

export default function Profiles() {
  
    useEffect(() => {
    const cookies = parseCookies();
    const URL_NEXT_API = `${request.endpoint.externalEndpoint.url}${request.routes.externalApi.searchUser}`;
    const storageUser = JSON.parse(cookies.Next_User);
    const storageToken = storageUser?.Token;

    axios
      .get(URL_NEXT_API, {
        headers: {
          Authorization: "Bearer " + `${storageToken}`,
        },
      })
      .then((response) => {
        setUserData(response.data.Message.Users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [UserSearch, setUserSearch] = useState([]);
  const [UserData, setUserData] = useState([]);

  function onSubmit(event: any) {
    event.preventDefault();
  }

  const Data = UserData.filter((e: any) => e.next_name.includes(UserSearch));

  return (
    <>
      <div className="container px-4 py-5">
        <div className="d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm">
          <i className="bi bi-chat-dots me-3"></i>
          <div className="lh-1">
            <h1 className="h6 mb-0 text-white lh-1">Access Profiles</h1>
          </div>
        </div>
        <Link href="profiles/create">
          <button type="button" className="btn btn-primary">
            <i className="bi bi-plus-circle me-3"></i> User
          </button>
        </Link>
      </div>

      <div className="container px-4 py-1">
        <form onSubmit={onSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              onChange={(event: any) => setUserSearch(event.target.value)}
            />
            <label htmlFor="floatingInput">User Search</label>
          </div>
        </form>
      </div>

      <div className="container px-4 py-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((data: any) => (
              <tr key={data._id}>
                <th scope="row">{data.next_id}</th>
                <td>{`${data.next_name} ${data.next_lastname}`}</td>
                <td>{data.next_email}</td>
                <td>
                  <Link
                    href={`profiles/view/${data.next_id}`}
                    type="button"
                    className="btn btn-primary"
                  >
                    Change user
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
