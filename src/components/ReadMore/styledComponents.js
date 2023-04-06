// Style your elements here
import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 30px 100px 30px;
  margin: 20px;
  box-shadow: 1px 1px 1px 1px #334155;
`

export const Head = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #1e293b;
  font-weight: bolder;
  text-align: center;
`

export const Para = styled(Head)`
  font-size: 25px;
  font-weight: 700;
  color: #334155;
`

export const Content = styled(Para)`
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  width: 80%;
  margin: auto;
`

export const Btn = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  font-weight: 600;
  padding: 10px;
  background-color: #1f81ff;
  height: 70px;
  width: 150px;
  border: none;
  cursor: pointer;
  outline: none;
  align-self: center;
  margin-top: 20px;
`

export const Imag = styled.img`
  width: 80%;
  height: 300px;
  margin: auto;
  margin-bottom: 20px;
`
