import React from "react";
import {Button, Table, Tooltip} from "antd";
import type { ColumnsType} from 'antd/es/table';
import {ContainerTooltip, Th, Tr} from "./TableStyle";

export interface ITable{
    type:string
    data: IData[]
}


export interface IData {
    key: React.Key;
    name: string;
    points: number;
    statusLive: string;
    tooltipData:{
        kills: number
        deaths: number
    }
}

const columns: ColumnsType<IData> = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Status',
        dataIndex: 'statusLive'
    },
    {
        title: 'Points',
        dataIndex: 'points',
        defaultSortOrder: 'descend'
    }
];


const CustomTooltip = (props:any) => {
   const {kills, deaths} = props.tooltipData

    return(
      <ContainerTooltip><div>Kills: {kills}</div><div>Deaths: {deaths}</div><div><Button type="primary">Add friend</Button></div></ContainerTooltip>
  )
}

const CustomRow = (props:any) => {
    const {children,dataSource} = props
    const status = children.find((child:any)=>child.key === 'statusLive')
    const tooltip = dataSource.find((child:any)=>child.key === String(props["data-row-key"]))
    return (
        <Tooltip title={()=>CustomTooltip(tooltip)} overlayStyle={{maxWidth: '400px'}} destroyTooltipOnHide={false}>
            <Tr {...props} status={status.props.record.statusLive}/>
        </Tooltip>
    );
}
const CustomCelHeader = (props:any) => {
   let {type} = props
    return (
        <Th {...props} background={type === "win" ? true : false}/>
    );
}

export const TablePlayers: React.FC<ITable> = (props) => {
    let {type,data} = props
    return(
        <Table columns={columns} dataSource={data} components={{
            header:{
                cell: (props:any)=> CustomCelHeader({...props,type})
            },
            body: {
                row: (props:any)=>CustomRow({...props,dataSource:data})
            }
        }}
               pagination={false} scroll={{y: "calc(100vh - 150px)"}}/>
    )
}