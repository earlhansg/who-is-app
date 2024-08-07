// hooks
import { useEffect, useState } from "react";
// material ui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from '@mui/material/CircularProgress';
// models
import { DomainInformation } from "@models/domain-information.model";
import { ContactInformation } from "@models/contact-information.model";
// component
import NoData from "@components/no-data/NoData";
// lib
import moment from 'moment';

type DataTableProps = {
  informationType: string;
  data: DomainInformation | ContactInformation | null;
  refetch: boolean;
};

const domainHeader = [
  "Domain Name",
  "Registrar",
  "Registration Date",
  "Expiration Date",
  "Estimated Domain Age",
  "Hostnames",
];
const contactHeader = [
  "Registrant Name",
  "Technical Contact Name",
  "Administrative Contact Name",
  "Contact Email",
];

const DataTable = ({ informationType, data, refetch }: DataTableProps) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    initializeTableHeader();
    initializeTableBody();
    // Set a timeout to update isLoading to false after 2 seconds (2000 milliseconds)
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup the timeout if the component unmounts or refetch changes
    return () => clearTimeout(timeoutId);
  }, [refetch]);

  const initializeTableHeader = () => {
    return informationType === "domain" ? domainHeader : contactHeader;
  };

  const initializeTableBody = () => {
    if (data && 'domainName' in data) {
      return (
        <TableRow>
          <TableCell component="th" scope="row">
            {data.domainName}
          </TableCell>
          <TableCell>{data.registrarName}</TableCell>
          <TableCell>{moment(data.registrationDate).format('YYYY-MM-DD')}</TableCell>
          <TableCell>{moment(data.expirationDate).format('YYYY-MM-DD')}</TableCell>
          <TableCell>{data.estimatedDomainAge}</TableCell>
          <TableCell>{data.hostnames}</TableCell>
        </TableRow>
      );
    } else {
      return (  
        <TableRow>
          <TableCell component="th" scope="row">
            {data?.registrantName}
          </TableCell>
          <TableCell>{data?.technicalContactName}</TableCell>
          <TableCell>{data?.administrativeContactName}</TableCell>
          <TableCell>{data?.contactEmail}</TableCell>
        </TableRow>
      );
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ): (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Data Information table">
          {data && (
            <TableBody>
              {initializeTableBody()}
            </TableBody>
          )}

            <TableHead>
              <TableRow>
                {initializeTableHeader().map((headerName, index) => (
                  <TableCell key={index}>{headerName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
          </Table>
          {/* <NoData/> */}
          {!data && !isLoading && <NoData />}
        </TableContainer>
      )}
    </>
  );
};

export default DataTable;
