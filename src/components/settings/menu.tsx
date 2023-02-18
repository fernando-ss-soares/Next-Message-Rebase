import Link from "next/link";

interface settingsProps {
    title? : string
}

export default function Menu({ title }: settingsProps) {
  return (
    <>
      <h6 className="border-bottom pb-2 mb-0">{title}</h6>

      <Link
        href="/settings/contact"
        className="d-flex text-muted pt-3 text-decoration-none"
      >
        <button type="button" className="btn btn-primary me-2">
          <i
            className="bi bi-filetype-csv"
            style={{ width: 16, height: 16 }}
          ></i>
        </button>

        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div className="d-flex justify-content-between">
            <strong className="text-gray-dark">Contact List</strong>
          </div>
        </div>
      </Link>

      <Link
        href="/settings/integration"
        className="d-flex text-muted pt-3 text-decoration-none"
      >
        <button type="button" className="btn btn-primary me-2">
          <i
            className="bi bi-globe2"
            style={{ width: 16, height: 16 }}
          ></i>
        </button>

        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div className="d-flex justify-content-between">
            <strong className="text-gray-dark">Integration</strong>
          </div>
        </div>
      </Link>

      <Link
        href="/settings/profiles"
        className="d-flex text-muted pt-3 text-decoration-none"
      >
        <button type="button" className="btn btn-primary me-2">
          <i
            className="bi bi-people-fill"
            style={{ width: 16, height: 16 }}
          ></i>
        </button>

        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div className="d-flex justify-content-between">
            <strong className="text-gray-dark">Access Profiles</strong>
          </div>
        </div>
      </Link>
    </>
  );
}
