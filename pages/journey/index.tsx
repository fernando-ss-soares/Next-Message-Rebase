import Title from "@/src/components/utils/header/title";
import Form from "@/src/components/journey/form";
import Table from "@/src/components/journey/table";
import { useState } from "react";
import Link from "next/link";

export default function Journey() {
    const [JourneySearch, setJourneySearch] = useState("");

  function onSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <>
      <div className="container px-4 py-5">
        <Title title="Journey" />
        <Link href="journey/create">
          <button type="button" className="btn btn-primary">
            <i className="bi bi-plus-circle me-3"></i> Journey
          </button>
        </Link>
      </div>

      <div className="container px-4 py-1">
        <Form onSubmit={onSubmit} search={setJourneySearch} />
      </div>

      <div className="container px-4 py-2">
        <Table search={JourneySearch} />
      </div>
    </>
  );
}