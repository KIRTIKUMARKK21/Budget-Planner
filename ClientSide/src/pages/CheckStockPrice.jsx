import React from 'react';
import { Container,Button,Box } from '@mui/material';
import SelectSymbol from "../sections/@StockPrice/Symbol"
const CheckStockprice = () => {
  const [stock, setStock] = React.useState([]);
  const [stockPrice, setStockPrice] = React.useState([]);
  const [stockName, setStockName] = React.useState([]);
  const [stockSymbol, setStockSymbol] = React.useState([]);
  return (
    <Container>
      <h1>Check Stock Price</h1>
      <SelectSymbol />
      <Box sx={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
      <Button variant="contained" sx={{mt:2,boxShadow:'none'}}>
          Check Stock Price
          </Button>
      </Box>
    </Container>
  );
};

export default CheckStockprice;
