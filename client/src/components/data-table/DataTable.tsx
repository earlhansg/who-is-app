// hooks 
import { useEffect } from 'react';
// material ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// models 
import { DomainInformation } from '@models/domain-information.model';
import { ContactInformation } from '@models/contact-information.model';
// component
import NoData from '@components/no-data/NoData';

type DataTableProps = {
  informationType: string
  searchKey: string
  data: DomainInformation | ContactInformation
}

const domainHeader = ['Domain Name', 'Registrar', 'Registration Date', 'Expiration Date', 'Estimated Domain Age', 'Hostnames'];
const contactHeader = ['Registrant Name', 'Technical Contact Name', 'Administrative Contact Name', 'Contact Email'];

const DataTable = ({informationType, searchKey, data }: DataTableProps) => {
  useEffect(() => {
    initializeTableHeader();
  }, [informationType])

  const initializeTableHeader = () => {
    return informationType === 'domain' ? domainHeader : contactHeader;
  }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="Data Information table">
      {/* <caption>A basic table example with a caption</caption>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody> */}
      <TableHead>
        <TableRow>
          {initializeTableHeader().map((headerName, index) => (<TableCell key={index}>{headerName}</TableCell>))}
        </TableRow>
      </TableHead>
      {/* <div className='flex justify-center !w-100'>
            <ErrorOutlineIcon/>
        </div> */}
    </Table>
    {/* <NoData/> */}
  </TableContainer>
  );
}

export default DataTable
