import React, { useEffect } from "react";
import { Statistic, Segment, Placeholder } from "semantic-ui-react";

import { fetchNepalData } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

const NepalStat = () => {
  const dispatch = useDispatch();
  const nepal = useSelector((state) => state.record.nepal);
  const dark = useSelector((state) => state.theme.dark);

  useEffect(() => {
    if (nepal === null) dispatch(fetchNepalData());
  }, [dispatch, nepal]);

  const placeComma = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Segment inverted={dark}>
      {nepal !== null ? (
        <Statistic.Group horizontal>
          <Statistic color="red">
            <Statistic.Value>{placeComma(nepal.deaths)}</Statistic.Value>
            <Statistic.Label className="ui red">Deaths</Statistic.Label>
          </Statistic>
          <Statistic color="yellow">
            <Statistic.Value>{nepal.in_isolation}</Statistic.Value>
            <Statistic.Label className="ui yellow">
              Active cases
            </Statistic.Label>
          </Statistic>
          <Statistic color="green">
            <Statistic.Value>{nepal.recovered}</Statistic.Value>
            <Statistic.Label className="ui green">Recovered</Statistic.Label>
          </Statistic>
          <Statistic color="blue">
            <Statistic.Value>{nepal.tested_positive}</Statistic.Value>
            <Statistic.Label className="ui blue">Total cases</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      ) : (
        <Placeholder inverted={dark}>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      )}
    </Segment>
  );
};

export default NepalStat;
