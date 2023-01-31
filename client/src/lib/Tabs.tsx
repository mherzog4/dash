import { UserGroupIcon, UserIcon } from "@heroicons/react/solid";

import {
  TabList,
  Tab,
  Card,
  ProgressBar,
  Flex,
  Text,
  Metric,
} from "@tremor/react";

import { useState } from "react";

const LocationA = [
  {
    name: "Product A",
    percentage: 38,
    stat: "$ 100,838",
  },
  {
    name: "Product B",
    percentage: 34,
    stat: "$ 90,224",
  },
];

const LocationB = [
  {
    name: "Product Z",
    percentage: 82,
    stat: "$ 108,799",
  },
  {
    name: "Product E",
    percentage: 10,
    stat: "$ 13,268",
  },
];

export default () => {
  const [showCard, setShowCard] = useState(true);
  return (
    <Card>
      <>
        <Text>Total Sales</Text>
        <Metric>$ 442,276</Metric>
        <TabList
          defaultValue={1}
          handleSelect={(value) => setShowCard(value === 1)}
          marginTop="mt-6"
        >
          <Tab value={1} text="Peer performance" icon={UserGroupIcon} />
          <Tab value={2} text="Individual performance" icon={UserIcon} />
        </TabList>
      </>

      {showCard === true ? (
        <div className="mt-6">
          {LocationA.map((item) => (
            <div className="mt-4" key={item.name}>
              <Flex marginTop="mt-4">
                <Text>{item.name}</Text>
                <Flex spaceX="space-x-2" justifyContent="justify-end">
                  <Text> {item.stat} </Text>
                  <Text>
                    {" "}
                    ({item.percentage}
                    %)
                  </Text>
                </Flex>
              </Flex>
              <ProgressBar percentageValue={item.percentage} marginTop="mt-2" />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6">
          {LocationB.map((item) => (
            <div className="mt-4" key={item.name}>
              <Flex marginTop="mt-4">
                <Flex>
                  <Text> {item.name} </Text>
                </Flex>
                <Flex spaceX="space-x-2" justifyContent="justify-end">
                  <Text> {item.percentage}% </Text>
                  <Text> ({item.stat}) </Text>
                </Flex>
              </Flex>
              <ProgressBar percentageValue={item.percentage} marginTop="mt-2" />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};
