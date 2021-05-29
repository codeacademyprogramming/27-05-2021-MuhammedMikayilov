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
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align="right">Calories</StyledTableCell>
                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">
                  Protein&nbsp;(g)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {/* {row.name} */}
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {/* {row.calories} */}
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {/* {row.fat} */}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {/* {row.carbs} */}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {/* {row.protein} */}
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
