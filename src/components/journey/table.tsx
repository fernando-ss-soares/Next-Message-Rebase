interface TableProps {
    search: any
}

export default function Table({ search }: TableProps) {
    let journeyList = [
      {
        id: 1,
        name: "Cobrança Cartão de Crédito E-mail",
        status: "Ativo",
      },
      {
        id: 2,
        name: "Cobrança Cartão de Crédito SMS",
        status: "Testando",
      },
      {
        id: 3,
        name: "Boas Vindas E-mail",
        status: "Configurando",
      },
      {
        id: 4,
        name: "Boas Vindas SMS",
        status: "Ativo",
      },
    ].filter((e) => e.name.includes(search));
  
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {journeyList.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.name}</td>
              <td>{data.status}</td>
              <td>
                <button type="button" className="btn btn-primary">
                  Settings
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  