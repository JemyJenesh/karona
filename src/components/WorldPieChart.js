import React, { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { useSelector } from "react-redux";
import { Segment } from "semantic-ui-react";
import Loading from "./Loading";

const WorldPieChart = () => {
  const [data, setData] = useState([]);
  const world = useSelector((state) => state.record.world);
  const dark = useSelector((state) => state.theme.dark);

  useEffect(() => {
    if (world) {
      setData((prev) => [
        ...prev,
        {
          name: "Deaths",
          value: world.deaths,
          color: "#DB2828",
        },
        {
          name: "Critical",
          value: world.critical,
          color: "#F2711C",
        },
        {
          name: "Active",
          value: world.active,
          color: "#FBBD08",
        },
        {
          name: "Recovered",
          value: world.recovered,
          color: "#21BA45",
        },
      ]);
    }
  }, [world]);

  if (world === null)
    return (
      <Segment inverted={dark}>
        <Loading dark={dark} />
      </Segment>
    );

  return (
    <Segment inverted={dark} style={{ width: "100%", height: 378 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#8884d8" label>
            {data.map((entry) => (
              <Cell key={entry.color} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Segment>
  );
};

export default WorldPieChart;
