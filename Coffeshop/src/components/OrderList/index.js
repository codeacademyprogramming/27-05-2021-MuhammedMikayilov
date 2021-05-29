import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ModalOrder from "./CreateModal";
import { Box, Button, Typography } from "@material-ui/core";
import getOrderList from "../../redux/actions/ordersAction";
import { useDispatch, useSelector } from "react-redux";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function OrderList() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.order);

  React.useEffect(() => {
    getOrderList()(dispatch);
  }, []);
  return (
    <Box width="1024px" margin="0 auto" paddingTop="50px">
      <Box>
        <Typography
          variant="h2"
          className="text-center"
          onClick={() => {
            console.log(orders);
          }}
        >
          Order List
        </Typography>
      </Box>
      <Box marginBottom="20px">
        <ModalOrder title="Create new Order" coffeType={null} format="Create" />
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="right">Order Name</StyledTableCell>
                <StyledTableCell align="right">Order Count</StyledTableCell>
                <StyledTableCell align="right">Special Notes</StyledTableCell>
                <StyledTableCell align="right">Order Price</StyledTableCell>
                <StyledTableCell align="right">Order STATUS</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row, idx) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {idx + 1}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.count}</StyledTableCell>
                  <StyledTableCell align="right">{row.special}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.price} Azn
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography
                      variant="body2"
                      className={`${
                        row.status === "CREATED"
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {row.status}
                    </Typography>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default OrderList;
