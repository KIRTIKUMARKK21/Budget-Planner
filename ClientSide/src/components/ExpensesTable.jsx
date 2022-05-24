import * as React from "react"; 
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { tableCellClasses } from '@mui/material/TableCell';
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/material/styles";
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
const Row = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);


  return (
    <>
      <StyledTableRow {...otherProps}>
        {children}
        <StyledTableCell align="center">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
      </StyledTableRow>
      {isExpanded && <StyledTableRow>{expandComponent}</StyledTableRow>}
    </>
  );
};

const ExpenseTable = () => {
  const rows = [
    {
      name: "Expense 1",
      note: " this is a expense stuff",
      category: "bills",
      price: "392149",
      date: "12-12-2020",
    },
    {
      name: "Expense 1",
      note: " this is a expense stuff",
      category: "bills",
      price: "392149",
      date: "12-12-2020",
    },
    {
      name: "Expense 1",
      note: " this is a expense stuff",
      category: "bills",
      price: "392149",
      date: "12-12-2020",
    },
    {
      name: "Expense 1",
      note: " this is a expense stuff",
      category: "bills",
      price: "392149",
      date: "12-12-2020",
    },
  ];
  // rows.concat(rows);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead sx={{ fontSize: "bold" }}>
          <StyledTableRow>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Price&nbsp;(₹)</StyledTableCell>
            <StyledTableCell align="center">
              Date&nbsp;(dd-mm-yyyy)
            </StyledTableCell>
            <StyledTableCell align="center">Note</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row
              key={index}
              expandComponent={
                <StyledTableCell colSpan="12">{row.note}</StyledTableCell>
              }
            >
              <StyledTableCell align="center" component="th" scope="row">
                {row.category}
              </StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseTable;
