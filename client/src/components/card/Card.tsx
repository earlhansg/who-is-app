// hook
import { useEffect, useState } from "react";
// components
import Filter from "@components/filter/Filter";
import DataTable from "@components/data-table/DataTable";
// api
import { fetchDomain } from "src/api/domainApi";
// material ui
import Divider from "@mui/material/Divider";
import { ContactInformation } from "@models/contact-information.model";
import { DomainInformation } from "@models/domain-information.model";

const Card = () => {
  // states
  const [searchKey, setSearchKey] = useState("amazon.com");
  const [informationType, setInformationTypes] = useState("domain");
  const [refetch, setRefetch] = useState(false);
  const [data, setData] = useState<ContactInformation | DomainInformation | null>(null)

  const updateInformationType = (type: string) => {
    if(informationType !== type) {
        setRefetch(!refetch)
    }
    setInformationTypes(type);
  };

  const refetchDomain = async () => {
    try {
      const dataFiltered = await fetchDomain({domainName: searchKey, type: informationType});
      setData(dataFiltered);
    } catch {
      setData(null);
    }
  }

  useEffect(() => {
    // if filter triggers this will run 
    refetchDomain();
  }, [refetch])

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
          defaultKey={searchKey}
        />
        <DataTable
          informationType={informationType}
          data={data}
          refetch={refetch}
        />
      </section>
    </div>
  );
};

export default Card;
