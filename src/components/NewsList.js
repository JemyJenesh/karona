import React, { useEffect } from "react";
import { Segment, Image, Placeholder, Grid, Header } from "semantic-ui-react";

import { fetchNews } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

const NewsList = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.theme.dark);
  const news = useSelector((state) => state.record.news);

  useEffect(() => {
    if (news === null) dispatch(fetchNews());
  }, [dispatch, news]);

  if (news === null) {
    return (
      <Grid.Column>
        <Segment inverted={dark}>
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
        </Segment>
      </Grid.Column>
    );
  }

  return news.map((n) => (
    <Grid.Column
      key={n._id}
      mobile="16"
      tablet="8"
      computer="5"
      style={{ marginBottom: "2rem" }}
    >
      <Segment inverted={dark}>
        <Image src={n.image_url} wrapped />
        <Header>{n.title}</Header>
        <div style={{ fontStyle: "italic" }}>
          {new Date(n.created_at).toDateString()}
        </div>
        <a href={n.url} target="_blank" rel="noopener noreferrer">
          {n.summary}
        </a>
      </Segment>
    </Grid.Column>
  ));
};

export default NewsList;
