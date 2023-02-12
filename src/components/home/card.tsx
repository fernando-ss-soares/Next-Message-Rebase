interface CardProps {
    title: string,
    description: string
}

export default function Card({ title, description }: CardProps) {
    return (
      <>
        <div className="d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex justify-content-left fs-4 rounded-3">
            <button type="button" className="btn btn-primary align-items-left">
              <i className="bi bi-chat-dots"></i>
            </button>
          </div>
          <h4 className="fw-semibold mb-0">{title}</h4>
          <p className="text-muted">{description}</p>
        </div>
      </>
    );
  }
  