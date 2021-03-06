import React from "react";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CardActionArea } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const Project = (props) => {
  const { name, tech, deployed, image, repo, } = props;

  const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 140,
    },
  });

  const classes=useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia src={image} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tech}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <a href={deployed} target="_blank" rel="noreferrer">
              Deployed Application
            </a>
          </Button>
          <Button>
            <a href={repo} target="_blank" rel="noreferrer">
              Github Repository
            </a>
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Project;