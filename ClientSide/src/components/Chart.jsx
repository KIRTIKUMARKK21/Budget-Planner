import { Typography, Container } from '@mui/material';
import { Box, Stack, Paper } from '@mui/material';
import React from 'react';
import PieChart from '../sections/@charts/PieChart';
import { Text, Title } from '@mantine/core';
import BarChart from '../sections/@charts/BarChart';
import LineChart from '../sections/@charts/LineChart';
const Attr = ({ title, value }) => {
  return (
    <React.Fragment>
      <Title order={4} sx={{ width: '90%', marginTop: 4 }}>
        {title}
      </Title>
      <Paper
        elevation={2}
        sx={{ height: '3em', display: 'flex', alignItems: 'center', paddingLeft: 2, width: '90%', mb: 4 }}
      >
        <Text size="md">₹{value}</Text>
      </Paper>
    </React.Fragment>
  );
};

const Chart = (props) => {
  const suggested = [
    {
      id: 'needs',
      label: 'Needs',
      value: 185,
      color: 'hsl(120, 70%, 50%)',
    },
    {
      id: 'savings',
      label: 'Savings',
      value: 185,
      color: 'hsl(120, 70%, 50%)',
    },
    {
      id: 'desires',
      label: 'Desires',
      value: 185,
      color: 'hsl(120, 70%, 50%)',
    },
  ];
  const data = [
    {
      id: 'scala',
      label: 'scala',
      value: 185,
      color: 'hsl(120, 70%, 50%)',
    },
    {
      id: 'hack',
      label: 'hack',
      value: 145,
      color: 'hsl(264, 70%, 50%)',
    },
    {
      id: 'erlang',
      label: 'erlang',
      value: 589,
      color: 'hsl(52, 70%, 50%)',
    },
    {
      id: 'ruby',
      label: 'ruby',
      value: 285,
      color: 'hsl(291, 70%, 50%)',
    },
    {
      id: 'go',
      label: 'go',
      value: 386,
      color: 'hsl(179, 70%, 50%)',
    },
  ];

  const data3 = [
    {
      id: 'expenditure',
      label: 'expenditure',
      value: 300,
      color: 'orange',
    },
    {
      id: 'investment',
      label: 'Investment',
      value: 300,
      color: 'purple',
    },
    {
      id: 'savings',
      label: 'savings',
      value: 300,
      color: 'orange',
    },
  ];
  const stonks = [
    {
      symbol: 'ABC',
      purchasePrice: [
        {
          price: 234,
          num: 32,
        },
        {
          price: 34,
          num: 2,
        },
        {
          price: 3234,
          num: 3253,
        },
      ],
      currentPrice: 234,
    },
    {
      symbol: 'AB',
      purchasePrice: [
        {
          price: 24334,
          num: 532,
        },
        {
          price: 23674,
          num: 332,
        },
        {
          price: 2364,
          num: 342,
        },
      ],
      currentPrice: 23,
    },
    {
      symbol: 'XC',
      purchasePrice: [
        {
          price: 734,
          num: 32,
        },
        {
          price: 2384,
          num: 32,
        },
        {
          price: 2304,
          num: 329,
        },
      ],
      currentPrice: 498,
    },
    {
      symbol: 'BC',
      purchasePrice: [
        {
          price: 2434,
          num: 332,
        },
        {
          price: 23544,
          num: 342,
        },
        {
          price: 234,
          num: 32,
        },
      ],
      currentPrice: 34,
    },
    {
      symbol: 'IO',
      purchasePrice: [
        {
          price: 2534,
          num: 32,
        },
        {
          price: 2334,
          num: 342,
        },
        {
          price: 23344,
          num: 3342,
        },
      ],
      currentPrice: 24,
    },
  ];

  const labels = stonks.map(({ symbol }) => symbol);
  console.log(labels);
  const dataset1 = stonks.map((item) => {
    let sum = 0;
    item.purchasePrice.map(({ price, num }) => {
      sum += price * num;
    });
    return sum;
  });
  const dataset2 = stonks.map((item) => {
    let sum = 0;
    const { currentPrice } = item;
    item.purchasePrice.map(({ num }) => {
      sum += currentPrice * num;
    });
    return sum;
  });
  console.log(dataset2, dataset1);
  const dataStonks = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataset1,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: dataset2,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const Lines = [
    {
      date: '09-10-21',
      balance: 23432,
    },
    {
      date: '09-11-21',
      balance: 23506,
    },
    {
      date: '09-12-21',
      balance: 23890,
    },
    {
      date: '09-13-21',
      balance: 20890,
    },
    {
      date: '09-15-21',
      balance: 25890,
    },
    {
      date: '09-16-21',
      balance: 25923,
    },
    {
      date: '09-17-21',
      balance: 26023,
    },
    {
      date: '09-18-21',
      balance: 26370,
    },
  ];
  //MM-DD-YYYY
  const Lines2 = [
    {
      date: '09-10-21',
      balance: 20000,
    },
    {
      date: '09-11-21',
      balance: 22000,
    },
    {
      date: '09-12-21',
      balance: 21870,
    },
    {
      date: '09-13-21',
      balance: 17082,
    },
    {
      date: '09-15-21',
      balance: 23890,
    },
    {
      date: '09-16-21',
      balance: 34890,
    },
    {
      date: '09-17-21',
      balance: 32219,
    },
    {
      date: '09-18-21',
      balance: 40000,
    },
  ];
  const LinesLabels = Lines.map((t) => new Date(t.date));
  console.log(LinesLabels);
  const LinesDataset1 = Lines.map((t) => t.balance);
  const LinesDataset2 = Lines2.map((t) => t.balance);
  const LinesData = {
    labels: LinesLabels,

    datasets: [
      {
        label: 'Dataset 1',
        data: LinesDataset1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: LinesDataset2,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Box sx={{ width: 400, height: 500, m: 5 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Total Category-wise expense
        </Typography>
        <PieChart data={data} />
      </Box>
      <Box sx={{ width: 400, height: 500, m: 5 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Total Category-wise Income
        </Typography>
        <PieChart data={data} scheme={{ scheme: 'greens' }} />
      </Box>
      <Stack direction={{ lg: 'row', sm: 'column' }}>
        <Box sx={{ minWidth: 400, height: 500 }}>
          <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            Total Category-wise Income
          </Typography>
          <PieChart data={data3} scheme={{ scheme: 'oranges' }} />
        </Box>
        <Box sx={{ minWidth: 400, height: 500, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Typography
            variant="h5"
            sx={{ textAlign: 'center', fontWeight: 'bold', width: '100%', textAlign: 'center', mb: 3 }}
          >
            Current Balance
          </Typography>
          <Attr title={'Savings'} value={2000} />
          <Attr title={'Expense'} value={2000} />
          <Attr title={'invested'} value={2000} />
        </Box>
      </Stack>
      <BarChart data={dataStonks} />
      <LineChart data={LinesData} />
      <Box sx={{ minWidth: 400, height: 500 }}>
         <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
         Suggested expenditure
        </Typography>
      <PieChart data={suggested} scheme={{ scheme: 'blues' }} />
      </Box>
    </Container>
  );
};

export default Chart;
