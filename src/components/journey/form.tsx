interface FormProps {
    onSubmit: any,
    search: any
}

export default function Form({ onSubmit, search }: FormProps) {
    return (
        <form onSubmit={onSubmit}>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    onChange={(event) => search(event.target.value)}
                />
                <label htmlFor="floatingInput">Journey Search</label>
            </div>
        </form>
    );
}
