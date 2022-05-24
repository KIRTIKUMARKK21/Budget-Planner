from turtle import width
import streamlit as st
from datetime import date

import yfinance as yf
from fbprophet import Prophet
from fbprophet.plot import plot_plotly
from plotly import graph_objs as go
from get_all_tickers import get_tickers as gt
import numpy as  np
import pandas as  pd

nav = st.sidebar.radio("Navigation",["Prophet","LSTM","Salary Prediction"])
if(nav=='Prophet'):
    
    START = "2018-01-01"
    TODAY = date.today().strftime("%Y-%m-%d")

    st.title('Stock Prediction')

    # stocks = ('GOOGLE', 'APPLE', 'MSFT', 'GME')
    # d={"GOOGLE":'GOOG', "APPLE":'AAPL',"MFST":'MSFT',"GME":'GME'}
    # stock=pd.read_csv("data1.csv");
    # stocks = st.selectbox('Select dataset for prediction', stock)
    # selected_stock=d[selected_stock]

    stocks=st.text_input('Enter Stock Ticker','AAPL')

    n_years = st.slider('Years of prediction:', 1, 5)
    period = n_years * 365

    @st.cache
    def load_data(ticker):
        data = yf.download(ticker, START, TODAY)
        data.reset_index(inplace=True)
        return data

        
    data_load_state = st.text('Loading data...')
    data = load_data(stocks)
    data_load_state.text('Loading data... done!')

    st.subheader(f'Raw data From {START} to {TODAY}')
    st.write(data.describe())


    st.subheader("Opening and Closing Price vs Time Chart")
    fig = go.Figure()
    fig.add_trace(go.Scatter(x=data['Date'], y=data['Open'], name="stock_open"))
    fig.add_trace(go.Scatter(x=data['Date'], y=data['Close'], name="stock_close"))
    fig.update_layout(autosize=True,width=1000,height=700, xaxis_rangeslider_visible=True)
    st.plotly_chart(fig)

    st.subheader("Moving Average vs Time Chart")

    ma100=data.Close.rolling(100).mean()
    ma200=data.Close.rolling(200).mean()
    fig = go.Figure()
    fig.add_trace(go.Scatter(x=data['Date'], y=ma100, name="100 Days Rolling Average"))
    fig.add_trace(go.Scatter(x=data['Date'], y=ma200, name="200 Days Rolling Average"))
    fig.add_trace(go.Scatter(x=data['Date'], y=data['Close'], name='Closing Value'))
    fig.update_layout(autosize=True,width=1000,height=700, xaxis_rangeslider_visible=True)
    st.plotly_chart(fig)

    df_train = data[['Date','Close']]
    df_train = df_train.rename(columns={"Date": "ds", "Close": "y"})

    m = Prophet()
    m.fit(df_train)
    future = m.make_future_dataframe(periods=period)
    forecast = m.predict(future)



    st.write(f'Forecast plot for {n_years} years')
    fig1 = plot_plotly(m, forecast)
    st.plotly_chart(fig1)

    st.write("Forecast components")
    fig2 = m.plot_components(forecast)
    st.write(fig2)

        
    



