import { Card, Title, DonutChart } from "@tremor/react";

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default () => (
  <Card maxWidth="max-w-lg">
    <Title>Call Conversions</Title>
    <DonutChart
      data={cities}
      category="sales"
      dataKey="name"
      valueFormatter={valueFormatter}
      marginTop="mt-6"
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
  </Card>
);
