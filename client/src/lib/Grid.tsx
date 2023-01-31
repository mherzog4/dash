import { ColGrid, Col, Card, Text, Metric } from "@tremor/react";

export default () => (
  <ColGrid
    numCols={1}
    numColsSm={2}
    numColsLg={3}
    gapX="gap-x-2"
    gapY="gap-y-2"
  >
    <Col numColSpan={1} numColSpanLg={2}>
      <Card>
        <Text>Title</Text>
        <Metric>KPI 1</Metric>
      </Card>
    </Col>
    <Card>
      <Text>Title</Text>
      <Metric>KPI 2</Metric>
    </Card>
    <Col>
      <Card>
        <Text>Title</Text>
        <Metric>KPI 3</Metric>
      </Card>
    </Col>
    <Card>
      <Text>Title</Text>
      <Metric>KPI 4</Metric>
    </Card>
    <Card>
      <Text>Title</Text>
      <Metric>KPI 5</Metric>
    </Card>
  </ColGrid>
);
