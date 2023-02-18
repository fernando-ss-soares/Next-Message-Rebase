import Title from "@/src/components/utils/header/title";
import Menu from "@/src/components/settings/menu";
import Footer from "@/src/components/settings/footer";

export default function Settings() {
  return (
    <>
      <div className="container px-4 py-5">
        <Title title="Settings" />
      </div>

      <div className="container px-4 py-5">
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <Menu title="All settings" />

          <Footer title="Next Message" />
        </div>
      </div>
    </>
  );
}
