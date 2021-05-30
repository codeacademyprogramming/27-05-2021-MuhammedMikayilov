import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import getCoffeList from "../../redux/actions/coffeListAction";
import { Col, Row } from "reactstrap";
import ModalOrder from "../OrderList/CreateModal";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
function Coffees() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { coffees } = useSelector((state) => state.coffeList);
  React.useEffect(() => {
    getCoffeList()(dispatch);
  });

  return (
    <Box width="1024px" margin="0 auto" marginTop="50px">
      <Row>
        {coffees.map((coffe) => (
          <Col md="4" key={coffe.id}>
            <Card className={`${classes.root} mt-5`} key={coffe.id}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={coffe.img}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {coffe.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {coffe.ingredients.map((ingredient) => ingredient + " ")}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    className="text-danger"
                    style={{ fontSize: "24px" }}
                  >
                    {coffe.price} Azn
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <ModalOrder
                  title="Order this coffe"
                  coffeType={coffe}
                  format="Create"
                />
              </CardActions>
            </Card>
          </Col>
        ))}
      </Row>
    </Box>
  );
}

export default Coffees;
