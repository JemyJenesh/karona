import React, { useEffect } from "react";

import { fetchWorldData } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import Stat from "./Stat";

const WorldStat = () => {
  const dispatch = useDispatch();
  const world = useSelector((state) => state.record.world);

  useEffect(() => {
    if (world === null) dispatch(fetchWorldData());
  }, [dispatch, world]);

  return world === null ? (
    <Stat deaths={null} />
  ) : (
    <Stat
      deaths={world.deaths}
      critical={world.critical}
      active={world.active}
      total={world.cases}
      recovered={world.recovered}
    />
  );
};

export default WorldStat;
