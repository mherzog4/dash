import { useState } from 'react';
import Pipeline from './components/Pipeline'
import Calls from './components/Calls'
import Emails from './components/Emails'
import Quota from './components/Quota'
import '@tremor/react/dist/esm/tremor.css';
import { ColGrid, Col, Text, Metric } from "@tremor/react";
import CallConversion from './components/CallConversion'
import EmailConversion from './components/EmailConversion'
import Footer from './lib/Footer'
import Home from './components/Home'
import Profile from './components/Profile'
import { useAuth0 } from "@auth0/auth0-react";

import {
    BadgeDelta,
    Card,
    DeltaType,
    Dropdown,
    DropdownItem,
    Flex,
    MultiSelectBox,
    MultiSelectBoxItem,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';

export type SalesPerson = {
    name: string,
    leads: number,
    sales: string,
    quota: string,
    variance: string,
    region: string,
    status: string,
    deltaType: DeltaType,
}

export const salesPeople: SalesPerson[] = [
    {
        name: 'Peter Doe',
        leads: 45,
        sales: '1,000,000',
        quota: '1,200,000',
        variance: 'low',
        region: 'Region A',
        status: 'overperforming',
        deltaType: 'moderateIncrease',
    },
    {
        name: 'Lena Whitehouse',
        leads: 35,
        sales: '900,000',
        quota: '1,000,000',
        variance: 'low',
        region: 'Region B',
        status: 'average',
        deltaType: 'unchanged',
    },
    {
        name: 'Phil Less',
        leads: 52,
        sales: '930,000',
        quota: '1,000,000',
        variance: 'medium',
        region: 'Region C',
        status: 'underperforming',
        deltaType: 'moderateDecrease',
    },
    {
        name: 'John Camper',
        leads: 22,
        sales: '390,000',
        quota: '250,000',
        variance: 'low',
        region: 'Region A',
        status: 'overperforming',
        deltaType: 'increase',
    },
    {
        name: 'Max Balmoore',
        leads: 49,
        sales: '860,000',
        quota: '750,000',
        variance: 'low',
        region: 'Region B',
        status: 'overperforming',
        deltaType: 'increase',
    },
    {
        name: 'Peter Moore',
        leads: 82,
        sales: '1,460,000',
        quota: '1,500,000',
        variance: 'low',
        region: 'Region A',
        status: 'average',
        deltaType: 'unchanged',
    },
    {
        name: 'Joe Sachs',
        leads: 49,
        sales: '1,230,000',
        quota: '1,800,000',
        variance: 'medium',
        region: 'Region B',
        status: 'underperforming',
        deltaType: 'moderateDecrease',
    },
];

export default function TableView() {
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedNames, setSelectedNames] = useState<string[]>([]);

    const isSalesPersonSelected = (salesPerson: SalesPerson) => (
        (salesPerson.status === selectedStatus || selectedStatus === 'all')
            && (selectedNames.includes(salesPerson.name) || selectedNames.length === 0)
    );

    // const { isLoading } = useAuth();

    // if (isLoading) return <div>Loading ... </div>

    return (
        <>
      <Profile />
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
            <Metric>Pipeline Generated</Metric>
            <Pipeline />
          </Card>
        </Col>
        <Card>
          <Text>Title</Text>
          <Metric>Calls</Metric>
          <Quota />
        </Card>
        <Card>
          <Text>Title</Text>
          <Metric>Calls</Metric>
          <Calls />
        </Card>
        <Col>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 5</Metric>
            <Emails />
          </Card>
        </Col>
        <Card>
          <Text>Title</Text>
          <Metric>KPI 4</Metric>
          <EmailConversion />
        </Card>
        <Card>
          <Text>Title</Text>
          <Metric>KPI 3</Metric>
          <CallConversion />
        </Card>
        <Card>
          <Text>Title</Text>
          <Metric>KPI 3</Metric>
          <Footer />
        </Card>
      </ColGrid>
          </>
    );
}
