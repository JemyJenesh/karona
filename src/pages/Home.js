import React from "react";

import NepalStat from "../components/NepalStat";
import Timeline from "../components/Timeline";
import { Grid } from "semantic-ui-react";

const Home = () => {
  return (
    <div>
      <Grid columns={2} stackable>
        <Grid.Column>
          <h3>Current status in Nepal</h3>
          <NepalStat />
        </Grid.Column>
        <Grid.Column>
          <h3>Timeline</h3>
          <Timeline />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Home;
