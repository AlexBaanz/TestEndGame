import React, {useEffect, useState} from 'react';
import {Col, Row} from "antd";
import {Container, Win,Vs,Lose} from "./AppStyle";
import {IData, TablePlayers} from "./component/Table";
import axios from "axios";

interface IInfo {
    win: IData[],
    lose: IData[]
}
const App: React.FC = () => {
    const [data, setData] = useState<IInfo|null>(null)
    useEffect(()=>{
       axios.get(`http://localhost:4444/api/end-game`)
           .then(res => {
               setData(res.data);
           })
    },[])
return(
    <Container>
        {data !== null &&
        <>
        <Row>
            <Col span={11}><Win>WIN</Win></Col>
            <Col span={2}><Vs>VS</Vs></Col>
            <Col span={11}><Lose>Lose</Lose></Col>
        </Row>
        <Row>
                <Col span={11}><TablePlayers data={data.win} type={"win"}/></Col>
                <Col span={2}></Col>
                <Col span={11}><TablePlayers data={data.lose} type={"lose"}/></Col>
        </Row>
        </>
        }
    </Container>
)
}
export default App;
