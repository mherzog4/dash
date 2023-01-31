import { Card, Metric, Text, Footer, Flex, Button } from "@tremor/react";

export default () => (
  <Card maxWidth="max-w-sm">
    <Text>Ticket Sales</Text>
    <Metric>$ 34,743</Metric>
    <Footer height="h-16">
      <Flex justifyContent="justify-end">
        <Button text="See detailed report" size="xs" importance="secondary" />
      </Flex>
    </Footer>
  </Card>
);
