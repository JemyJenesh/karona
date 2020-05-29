import React, { useEffect } from "react";

import { fetchNepalData } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import Stat from "./Stat";

const NepalStat = () => {
  const dispatch = useDispatch();
  const nepal = useSelector((state) => state.record.nepal);

  useEffect(() => {
    if (nepal === null) dispatch(fetchNepalData());
  }, [dispatch, nepal]);

  return nepal === null ? (
    <Stat deaths={null} />
  ) : (
    <Stat
      deaths={nepal.deaths}
      active={nepal.in_isolation}
      total={nepal.tested_positive}
      recovered={nepal.recovered}
    />
  );
};

export default NepalStat;
