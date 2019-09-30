import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CampaignNodeCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.campaignName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.emailNodes} Nodes
        </Typography>
        <Typography variant="body2" component="p">
          {props.memberCount} Members
        </Typography>
      </CardContent>
      <CardActions>
          <Link href="/campaign/{props.campaign.id}">
            <Button size="small">View</Button>
          </Link>
      </CardActions>
    </Card>
  );
}