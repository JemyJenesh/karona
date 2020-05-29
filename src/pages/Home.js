import React from "react";

import NepalStat from "../components/NepalStat";
import Timeline from "../components/Timeline";
import { Grid } from "semantic-ui-react";
import NewsList from "../components/NewsList";
import WorldStat from "../components/WorldStat";
import WorldPieChart from "../components/WorldPieChart";

const Home = () => {
  return (
    <Grid stackable centered divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <h3 id="home">Current status of Nepal</h3>
          <NepalStat />
        </Grid.Column>
        <Grid.Column>
          <h3>Timeline</h3>
          <Timeline />
        </Grid.Column>
      </Grid.Row>
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
      <Grid.Row>
        <h2 id="news">News related to corona virus</h2>
      </Grid.Row>
      <Grid.Row verticalAlign="top">
        <NewsList />
      </Grid.Row>
    </Grid>
  );
};

export default Home;
