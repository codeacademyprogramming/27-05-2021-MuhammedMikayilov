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
import getOrderList, {
  updateOrderItem,
} from "../../redux/actions/ordersAction";
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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function OrderList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);

  const changeStatusClick = (item) => {
    const updateOrder = updateOrderItem(dispatch);
    if (item.status === "CREATED") {
      updateOrder(item.id, {
        status: "IN_PROGRESS",
      });
    }
    if (item.status === "IN_PROGRESS") {
      updateOrder(item.id, {
        status: "DONE",
      });
    }
  };

  React.useEffect(() => {
    getOrderList()(dispatch);
  }, [dispatch]);
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
                <StyledTableRow key={row.id}>
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
                          : row.status === "IN_PROGRESS"
                          ? "text-info"
                          : "text-danger"
                      } status_order`}
                      onClick={() => changeStatusClick(row)}
                    >
                      {row.status !== "DONE" && (
                        <Button
                          variant="outlined"
                          color="primary"
                          className="me-3"
                        >
                          Edit
                        </Button>
                      )}
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
