// hook
import { useState } from "react";
// components
import Filter from "@components/filter/Filter";
import DataTable from "@components/data-table/DataTable";
// material ui
import Divider from "@mui/material/Divider";

const mockData = {
  domainName: "example.com",
  registrarName: "Example Registrar",
  registrationDate: "2020-01-01",
  expirationDate: "2025-01-01",
  estimatedDomainAge: 4,
  hostnames: "www.example.com, mail.example.com",
};

const Card = () => {
  // states
  const [searchKey, setSearchKey] = useState("");
  const [informationType, setInformationTypes] = useState("domain");
  const [refetch, setRefetch] = useState(false);

  const updateInformationType = (type: string) => {
    if(informationType !== type) {
        setRefetch(!refetch)
    }
    setInformationTypes(type);
  };

  return (
    <div
      className="w-[1200px] rounded shadow-lg px-3 py-5 flex flex-col gap-5 mt-20"
      style={{ alignSelf: "start" }}
    >
      <section className="flex flex-col gap-2">
        <h1 className="text-gray-700 text-2xl font-medium">List of Domains</h1>
        <Divider flexItem />
      </section>
      <section className="mx-2 flex flex-col gap-5">
        <Filter
          handleChangeType={(type) => updateInformationType(type)}
          handleChangeKey={(key) => setSearchKey(key)}
          triggerRefetch={() => setRefetch(!refetch)}
        />
        <DataTable
          informationType={informationType}
          searchKey={searchKey}
          data={mockData}
        />
      </section>
    </div>
  );
};

export default Card;
