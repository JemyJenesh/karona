import React from "react";

import WorldPieChart from "../components/WorldPieChart";
import WorldStat from "../components/WorldStat.js";
import { Grid } from "semantic-ui-react";

const WorldData = () => {
  return (
    <Grid stackable centered>
      <Grid.Row columns={2}>
        <Grid.Column>
          <h3>Global status</h3>
          <WorldStat />
        </Grid.Column>
        <Grid.Column>
          <h3>Data showcase</h3>
          <WorldPieChart />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default WorldData;
