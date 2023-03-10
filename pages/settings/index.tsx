import Title from "@/src/components/utils/header/title";
import Menu from "@/src/components/settings/menu";
import Footer from "@/src/components/settings/footer";
import { parseCookies } from "nookies";

export default function Settings() {
  
  const cookies = parseCookies();
  
  return (
    <>
      <div className="container px-4 py-5">
        <Title title="Settings" />
      </div>

      <div className="container px-4 py-5">
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <Menu title="All settings" cookies={cookies} />

          <Footer title="Next Message" />
        </div>
      </div>
    </>
  );
}
