import styled from 'styled-components';
import useSumArray from '../hooks/useSumArray';
import { theme } from '../theme/theme';
import months from '../consts/constants';
import uuid from 'react-uuid';

interface Chart1DataProps {
  chartData: Chart1Data;
}

const MonthlyStatisticsTable = ({ chartData }: Chart1DataProps) => {
  const { A, B } = chartData;

  const sumData = useSumArray(A, B);

  const calculateSum = (array: number[]): number => {
    return array.reduce((acc, val) => acc + val, 0);
  };

  return (
    <>
      <StyledTable>
        <StyledTHead>
          <tr>
            <th>구분</th>
            {months.map((month) => (
              <th key={month}>{month}</th>
            ))}
            <th>Total</th>
          </tr>
        </StyledTHead>
        <StyledTBody>
          <tr>
            <StyledTdA>A</StyledTdA>
            {A.map((data) => (
              <td key={uuid()}>{data}</td>
            ))}
            <StyledTotalA>{calculateSum(A)}</StyledTotalA>
          </tr>
          <tr>
            <StyledTdB>B</StyledTdB>
            {B.map((data) => (
              <td key={uuid()}>{data}</td>
            ))}
            <StyledTotalB>{calculateSum(B)}</StyledTotalB>
          </tr>
          <tr>
            <StyledTdTotal>Total</StyledTdTotal>
            {sumData.map((data: number) => (
              <td key={data}>{data}</td>
            ))}
            <StyledTotal>{calculateSum(sumData)}</StyledTotal>
          </tr>
        </StyledTBody>
      </StyledTable>
    </>
  );
};

export default MonthlyStatisticsTable;

const { colors } = theme;

const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 32px;

  & tr {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  & td {
    padding: 12px;
  }
`;

const StyledTHead = styled.thead`
  color: grey;

  & > tr > th {
    padding-bottom: 12px;

    &:first-child {
      width: 160px;
    }

    &:last-child {
      width: 120px;
    }

    &:not(:first-child):not(:last-child) {
      width: 65px;
    }
  }
`;

const StyledTBody = styled.tbody`
  color: white;
  text-align: center;
`;

const CommonStyledTd = styled.td`
  position: relative;
  font-weight: 500;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`;

const StyledTdA = styled(CommonStyledTd)`
  &::before {
    background-color: ${colors.primary};
  }
`;

const StyledTdB = styled(CommonStyledTd)`
  &::before {
    background-color: ${colors.secondary};
  }
`;

const StyledTdTotal = styled(CommonStyledTd)`
  &::before {
    background-color: ${colors.tertiary};
  }
`;

const CommonStyledTotal = styled.td`
  font-weight: 500;
`;

const StyledTotalA = styled(CommonStyledTotal)`
  color: ${colors.primary};
`;

const StyledTotalB = styled(CommonStyledTotal)`
  color: ${colors.secondary};
`;

const StyledTotal = styled(CommonStyledTotal)`
  color: ${colors.tertiary};
`;
