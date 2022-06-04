import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import { Box, FormGroup } from "@material-ui/core";
import getCoffeList from "../../../redux/actions/coffeListAction";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Form, Label, Input } from "reactstrap";
import { updateOrder } from "../../../redux/actions/ordersAction";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function EditOrder({ item }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [, setLoading] = React.useState(false);
  const [inputVal, setInputVal] = React.useState({
    name: item?.name,
    count: item?.count,
    special: item?.special,
    price: item?.price,
    status: item?.status,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    const updateOrderList = updateOrder(dispatch);
    updateOrderList(item.id, inputVal, setLoading);
    setOpen(false);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setInputVal({ ...inputVal, [name]: value });
    if (name === "name") {
      let price = coffees.find((coffe) => coffe.name === value).price;
      setInputVal({ ...inputVal, name: value, price: price });
    }
    if (name === "count") {
      setInputVal({ ...inputVal, count: Number(value) });
    }
  };
  const dispatch = useDispatch();

  React.useEffect(() => {
    getCoffeList()(dispatch);
  }, [dispatch]);

  const { coffees } = useSelector((state) => state.coffeList);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleSubmit}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpen(false)}
              aria-label="close"
            >
              <ArrowBackIcon />
            </IconButton>
            <Button autoFocus color="inherit" onClick={handleSubmit}>
              Edit Order
            </Button>
          </Toolbar>
        </AppBar>

        <Box width="1024px" margin="0 auto" paddingTop="100px">
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="exampleSelect">Coffe Type</Label>
                  <Input
                    type="select"
                    name="name"
                    id="exampleSelect"
                    onChange={handleChange}
                    defaultValue={item.name}
                  >
                    <option>Select Coffe Type</option>
                    {coffees.map((coffe) => (
                      <option key={coffe.id} value={coffe.name}>
                        {coffe.name}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="count">Count</Label>
                  <Input
                    type="number"
                    name="count"
                    id="count"
                    onChange={handleChange}
                    defaultValue={item.count}
                    placeholder="Write Count"
                  />
                </FormGroup>
              </Col>

              <Col md="8" className="offset-2 mt-5">
                <FormGroup>
                  <Label for="special">Special Notes</Label>
                  <Input
                    type="textarea"
                    name="special"
                    id="special"
                    defaultValue={item.special}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="6" style={{ marginTop: "80px" }}>
                <FormGroup>
                  <Label for="price">Special Notes</Label>
                  <Input
                    type="text"
                    name="price"
                    id="price"
                    disabled
                    value={Number(inputVal.count) * Number(inputVal.price)}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="6" style={{ marginTop: "105px" }}>
                <Button
                  variant="contained"
                  autoFocus
                  color="primary"
                  onClick={handleSubmit}
                >
                  Edit Order
                </Button>
              </Col>
            </Row>
          </Form>
        </Box>
      </Dialog>
    </div>
  );
}

export default EditOrder;
