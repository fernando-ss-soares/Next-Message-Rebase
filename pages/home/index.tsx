import Title from "@/src/components/home/title";
import Hero from "@/src/components/home/hero";
import Card from "@/src/components/home/card";
import StyleMenu from "@/src/components/utils/menu/menu.module.css";
import request from "@/infra/api/config/api.config";
import axios from "axios";

export async function getServerSideProps() {
  const ResponseAxios = await axios
    .get(
      `${request.endpoint.internalEndpoint.url}${request.routes.internalApi.home}`
    )
    .then()
    .catch((error) => {
      console.log(error);
    });

  const responseServerSideProps = ResponseAxios?.data?.list;

  return {
    props: { responseServerSideProps },
  };
}

interface HomeProps {
  responseServerSideProps: Array<object>;
}

export default function Home({ responseServerSideProps }: HomeProps) {
  return (
    <>
      <div className="container-sm px-4 py-5 d-flex flex-column">
        <Title title="Next Message" />

        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <Hero />
          <div
            id={StyleMenu.mobile}
            className="row row-cols-1 row-cols-sm-2 g-4"
          >
            {responseServerSideProps.map((data: any) => (
              <Card
                key={data.id}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}