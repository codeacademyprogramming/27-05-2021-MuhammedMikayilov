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
import { Box, CircularProgress, Typography } from "@material-ui/core";
import getOrderList, {
  updateOrderItem,
} from "../../redux/actions/ordersAction";
import { useDispatch, useSelector } from "react-redux";
import EditOrder from "./EditModal";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

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
  const [, setEdit] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [sorted, setSorted] = React.useState(true);
  const dispatch = useDispatch();
  let { orders } = useSelector((state) => state.order);

  const handleSort = () => {
    orders.sort((a, b) => {
      if (a.status < b.status) {
        return -1;
      } else if (a.status === b.status) {
        return 0;
      } else {
        return 1;
      }
    });
    setSorted(!sorted);
    console.log(sorted);
  };
  const changeStatusClick = React.useCallback(
    (item) => {
      const updateOrder = updateOrderItem(dispatch);
      if (item.status === "CREATED") {
        updateOrder(
          item.id,
          {
            status: "IN_PROGRESS",
          },
          setLoading
        );
      }
      if (item.status === "IN_PROGRESS") {
        updateOrder(
          item.id,
          {
            status: "DONE",
          },
          setLoading
        );
      }
    },
    [setLoading, dispatch]
  );

  React.useEffect(() => {
    getOrderList(setLoading)(dispatch);
  }, [dispatch]);
  return (
    <Box width="1024px" margin="0 auto" paddingTop="50px">
      <Box>
        <Typography variant="h2" className="text-center">
          Order List
        </Typography>
      </Box>
      <Box>
        <Row justifycontent="end">
          <Col md="6" className="mt-4">
            <ModalOrder
              title="Create new Order"
              coffeType={null}
              format="Create"
            />
          </Col>
          <Col md="3" className="offset-3">
            <Typography
              onClick={handleSort}
              style={{
                cursor: "pointer",
                paddingTop: "36px",
                textAlign: "end",
              }}
            >
              Sort by Status
            </Typography>
          </Col>
        </Row>
      </Box>
      <Box>
        {loading ? (
          <Box
            display="flex"
            className="justify-content-center align-items-center"
            style={{ height: "200px" }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>#</StyledTableCell>
                  <StyledTableCell align="right">Order Name</StyledTableCell>
                  <StyledTableCell align="right">Order Count</StyledTableCell>
                  <StyledTableCell align="right">Special Notes</StyledTableCell>
                  <StyledTableCell align="right">Order Price</StyledTableCell>
                  <StyledTableCell align="right" onClick={handleSort}>
                    Order STATUS
                  </StyledTableCell>
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
                    <StyledTableCell align="right">
                      {row.special}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.price * row.count} Azn
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Typography variant="body2">
                        {row.status !== "DONE" && (
                          <Box
                            display="inline-block"
                            marginRight="20px"
                            onClick={() => setEdit(true)}
                          >
                            <EditOrder item={row} />
                          </Box>
                        )}
                        <Typography
                          variant="body2"
                          className={`${
                            row.status === "CREATED"
                              ? "text-success"
                              : row.status === "IN_PROGRESS"
                              ? "text-info"
                              : "text-danger"
                          } `}
                          onClick={() => changeStatusClick(row)}
                        >
                          {row.status}
                        </Typography>
                      </Typography>
                      <Box
                        display="inline-block"
                        className="status_order text-primary"
                        marginLeft="20px"
                        onClick={() => changeStatusClick(row)}
                      >
                        {row.status !== "DONE" && "Change Status"}
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
}

export default OrderList;
