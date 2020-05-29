import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { fetchTimeline } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { Segment } from "semantic-ui-react";

const Timeline = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.theme.dark);
  const timeline = useSelector((state) => state.record.timeline);

  useEffect(() => {
    if (timeline === null) dispatch(fetchTimeline());
  }, [dispatch, timeline]);

  if (!timeline) return null;

  return (
    <Segment inverted={dark} style={{ width: "100%", height: 308 }}>
      <ResponsiveContainer>
        <LineChart
          data={[...timeline.filter((tl) => tl.totalCases > 0)]}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="basis"
            dataKey="totalCases"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="totalRecoveries"
            stroke="#82ca9d"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Segment>
  );
};

export default Timeline;
