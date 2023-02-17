import styles from "@/src/components/utils/menu/menu.module.css";
import { destroyCookie } from "nookies";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface PropsMenu {
  cookies?: any;
}

export default function Menu({ cookies }: PropsMenu) {
  const router = useRouter();
  const [Cookies, setCookies] = useState<object>();

  useEffect(() => {
    const isAdmin = JSON.parse(cookies?.Next_User);
    setCookies(isAdmin.User.next_admin);
  }, [cookies]);

  const userIsAdmin = Cookies;

  function clearStorage(): void {
    destroyCookie(null, "Next_User");
  }

  return (
    <>
      {/**
       *
       * View Smartphone
       *
       */}
      <div className="d-flex flex-row flex-shrink-0 bg-light vw-100 position-fixed bottom-0 d-sm-none">
        <ul className="nav nav-pills nav-flush flex-row justify-content-between mb-auto text-center w-100">
          <Link
            href="/home"
            passHref
            className="d-block p-3 link-dark text-decoration-none text-center"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Icon-only"
          >
            <i className="bi bi-chat-left-dots-fill"></i>
            <span className="visually-hidden">Icon-only</span>
          </Link>

          <li className="nav-item">
            <Link
              href="/home"
              passHref
              className={`nav-link py-3 border-bottom rounded-0 ${
                router.pathname.includes("home") ? "active" : ""
              }`}
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Home"
              data-bs-original-title="Home"
            >
              <i className="bi bi-house"></i>
            </Link>
          </li>

          <li>
            <Link
              href="/journey"
              passHref
              className={`nav-link py-3 border-bottom rounded-0 ${
                router.pathname.includes("journey") ? "active" : ""
              }`}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Dashboard"
              data-bs-original-title="Dashboard"
            >
              <i className="bi bi-chat-dots"></i>
            </Link>
          </li>

          <li>
            <Link
              href="/documents"
              passHref
              className={`nav-link py-3 border-bottom rounded-0 ${
                router.pathname.includes("documents") ? "active" : ""
              }`}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Orders"
              data-bs-original-title="Orders"
            >
              <i className="bi bi-file-earmark"></i>
            </Link>
          </li>

          <li>
            <Link
              href="/reports"
              passHref
              className={`nav-link py-3 border-bottom rounded-0 ${
                router.pathname.includes("reports") ? "active" : ""
              }`}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Products"
              data-bs-original-title="Products"
            >
              <i className="bi bi-pie-chart"></i>
            </Link>
          </li>

          <li>
            <Link
              href="/settings"
              passHref
              className={`nav-link py-3 border-bottom rounded-0 ${
                router.pathname.includes("settings") ? "active" : ""
              }`}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Customers"
              data-bs-original-title="Customers"
            >
              <i className="bi bi-gear"></i>
            </Link>
          </li>

          {userIsAdmin && (
            <button
              style={{ border: "none" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className=" bg-light d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none"
            >
              <i className="bi bi-building"></i>
            </button>
          )}

          <Link
            onClick={clearStorage}
            href="/"
            passHref
            className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none"
          >
            <i className="bi bi-box-arrow-left"></i>
          </Link>
        </ul>
      </div>

      {/**
       *
       * View Desktop
       *
       */}

      <div
        id={styles.mobile}
        className=" d-flex flex-column flex-shrink-0 bg-light vh-100"
        style={{ width: "4.5rem", position: "absolute" }}
      >
        <Link
          href="/home"
          passHref
          className="d-block p-3 link-dark text-decoration-none text-center"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Icon-only"
        >
          <i className="bi bi-chat-left-dots-fill"></i>
          <span className="visually-hidden">Icon-only</span>
        </Link>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <Link
              href="/home"
              passHref
              className={`nav-link py-3 border-bottom rounded-0 ${
                router.pathname.includes("home") ? "active" : ""
              }`}
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Home"
              data-bs-original-title="Home"
            >
              <i className="bi bi-house"></i>
            </Link>
          </li>
          <li>
            <Link
              href="/journey"
              passHref
              className={`nav-link py-3 border-bottom rounded-0 ${
                router.pathname.includes("journey") ? "active" : ""
              }`}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Dashboard"
              data-bs-original-title="Dashboard"
            >
              <i className="bi bi-chat-dots"></i>
            </Link>
          </li>
          <li>
            <Link
              href="/documents"
              className={`nav-link py-3 border-bottom rounded-0 ${
                router.pathname.includes("documents") ? "active" : ""
              }`}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Orders"
              data-bs-original-title="Orders"
            >
              <i className="bi bi-file-earmark"></i>
            </Link>
          </li>
          <li>
            <Link
              href="/reports"
              passHref
              className={`nav-link py-3 border-bottom rounded-0 ${
                router.pathname.includes("reports") ? "active" : ""
              }`}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Products"
              data-bs-original-title="Products"
            >
              <i className="bi bi-pie-chart"></i>
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              passHref
              className={`nav-link py-3 border-bottom rounded-0 ${
                router.pathname.includes("settings") ? "active" : ""
              }`}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Customers"
              data-bs-original-title="Customers"
            >
              <i className="bi bi-gear"></i>
            </Link>
          </li>
        </ul>
        {userIsAdmin && (
          <button
            style={{ border: "none" }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className=" bg-light d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none"
          >
            <i className="bi bi-building"></i>
          </button>
        )}

        <div className="border-top">
          <Link
            onClick={clearStorage}
            href="/"
            passHref
            className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none"
          >
            <i className="bi bi-box-arrow-left"></i>
          </Link>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
