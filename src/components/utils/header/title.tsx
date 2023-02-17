interface TitleProps {
    title: string
}

export default function Title({ title }: TitleProps) {
    return (
        <div className="d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm">
            <i className="bi bi-chat-dots me-3"></i>
            <div className="lh-1">
                <h1 className="h6 mb-0 text-white lh-1">{title}</h1>
            </div>
        </div>
    );
}
