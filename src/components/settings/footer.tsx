interface footerProps {
    title? : string
}


export default function Footer({ title }: footerProps) {
    return (
      <small className="d-block text-end mt-3">
        <p className="fw-ligth">{title}</p>
      </small>
    );
  }
  