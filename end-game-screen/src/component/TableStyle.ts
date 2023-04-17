import styled from "styled-components";

interface ITh{
    background?: boolean
}

interface ITr{
    status?: string
}

export const Th = styled.th<ITh>`
    background: ${props => props.background ? "#94c5ff" : "#ff5b5b"} !important;
`;
export const Tr = styled.tr<ITr>`
    background: ${props => props.status === "Dead" ? "#d5b1b1" : ""} !important;
    :hover td{
      background: ${props => props.status === "Dead" ? "#e09b9b" : ""} !important;
    }
`;
export const ContainerTooltip = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    div{
      display: flex;
      padding: 10px;
    }
`;