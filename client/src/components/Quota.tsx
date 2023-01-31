import { Card, Flex, Text, ProgressBar } from "@tremor/react";

export default () => (
  <Card maxWidth="max-w-sm">
    <Flex>
      <Text>$ 9,012 &bull; 45%</Text>
      <Text>$ 20,000</Text>
    </Flex>
    <ProgressBar percentageValue={45} color="teal" marginTop="mt-2" />
  </Card>
);
