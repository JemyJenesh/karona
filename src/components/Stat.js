import React from "react";
import { Statistic, Segment } from "semantic-ui-react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Stat = ({ deaths, critical, active, recovered, total }) => {
  const dark = useSelector((state) => state.theme.dark);

  const placeComma = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Segment inverted={dark}>
      {deaths === null ? (
        <Loading dark={dark} />
      ) : (
        <>
          <Statistic.Group horizontal>
            <Statistic color="red">
              <Statistic.Value>{placeComma(deaths)}</Statistic.Value>
              <Statistic.Label className="ui red">Deaths</Statistic.Label>
            </Statistic>
            {critical && (
              <Statistic color="orange">
                <Statistic.Value>{placeComma(critical)}</Statistic.Value>
                <Statistic.Label className="ui orange">
                  Critical cases
                </Statistic.Label>
              </Statistic>
            )}
            <Statistic color="yellow">
              <Statistic.Value>{placeComma(active)}</Statistic.Value>
              <Statistic.Label className="ui yellow">
                Active cases
              </Statistic.Label>
            </Statistic>
            <Statistic color="green">
              <Statistic.Value>{placeComma(recovered)}</Statistic.Value>
              <Statistic.Label className="ui green">Recovered</Statistic.Label>
            </Statistic>
            <Statistic color="blue">
              <Statistic.Value>{placeComma(total)}</Statistic.Value>
              <Statistic.Label className="ui blue">Total cases</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </>
      )}
    </Segment>
  );
};

export default Stat;
