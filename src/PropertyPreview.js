import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {useHistory} from "react-router-dom";
import {searchForProperties} from "./landlords-api/landlords-api";
import {parse} from "qs";

const columns = [
  { id: 'address2', label: 'address'},
  { id: 'propertyCity', label: 'city'},
  { id: 'propertyZip', label: 'zip'},
  { id: 'condition', label: 'condition'},
  { id: 'quality', label: 'quality'},
  { id: 'ownerName', label: 'owner'},
  { id: 'violationCount', label: 'violations'},
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '100%',
  },
});

export default function PropertyPreview(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [properties, setProperties] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  let history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const queryString = parse(props.location.search, {ignoreQueryPrefix: true});
      const propertyResponse = await searchForProperties(queryString.search)

      const properties = propertyResponse.map(property => {
        if (property.violationCount === "") {
          return {...property, violationCount: '0'};
        } else {
          return property;
        }
      }, [])

      setProperties(properties);
    }
    fetchData().then();
  }, [props.location.search])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.pin} onClick={() => history.push(`/property/${row.pin}`)}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={properties.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
