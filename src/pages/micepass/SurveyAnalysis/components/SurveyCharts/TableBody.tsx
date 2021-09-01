import React, { FC } from 'react';

import calcPercent from '@e-group/utils/calcPercent';
import {
  TableBody as MuiTableBody,
  TableRow,
  TableCell,
  makeStyles,
} from '@material-ui/core';
import sortOptionCount from './sortOptionCount';
import sortResponseContentCount from './sortResponseContentCount';
import colors from './colors';

import { Question } from './types';

const useStyles = makeStyles(() => ({
  colorBlock: {
    width: '12px',
    height: '12px',
    display: 'inline-block',
    marginRight: '7px',
    marginBottom: '2px',
    verticalAlign: 'middle',
    border: 'solid 2px',
    borderRadius: '50%',
  },
}));

export interface TableBodyProps {
  question: Question;
  totalResponses: number;
}

const TableBody: FC<TableBodyProps> = ({ question, totalResponses }) => {
  const classes = useStyles();
  switch (question.questionType) {
    case 'rating': {
      if (question.responseContentList) {
        const { statistics } = question;
        return (
          <MuiTableBody>
            {question.responseContentList
              .sort(sortResponseContentCount)
              .map((el) => (
                <TableRow key={el.responseContent}>
                  <TableCell component="th" scope="row">
                    {el.responseContent}
                  </TableCell>
                  <TableCell align="left">{el.responseContentCount}</TableCell>
                  <TableCell align="left">
                    {calcPercent(
                      el.responseContentCount,
                      question.questionCount
                    )}
                  </TableCell>
                </TableRow>
              ))}
            {statistics && (
              <>
                <TableRow>
                  <TableCell rowSpan={5} style={{ borderBottom: 'none' }} />
                  <TableCell>最大值</TableCell>
                  <TableCell align="left">{statistics.max} 分</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>最小值</TableCell>
                  <TableCell align="left">{statistics.min} 分</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>總分</TableCell>
                  <TableCell align="left">
                    {statistics.totalScore} 分
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>平均數</TableCell>
                  <TableCell align="left">{statistics.mean} 分</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>標準差</TableCell>
                  <TableCell align="left">
                    {statistics.standardDeviation} 分
                  </TableCell>
                </TableRow>
              </>
            )}
          </MuiTableBody>
        );
      }
      return (
        <MuiTableBody>
          <TableRow />
        </MuiTableBody>
      );
    }
    case 'choiceone':
    case 'select': {
      if (question.optionList) {
        return (
          <MuiTableBody>
            {question.optionList.sort(sortOptionCount).map((el) => (
              <TableRow key={el.optionId}>
                <TableCell component="th" scope="row">
                  {el.optionName}
                </TableCell>
                <TableCell align="left">{el.optionCount}</TableCell>
                <TableCell align="left">
                  {calcPercent(el.optionCount, question.questionCount)}
                </TableCell>
              </TableRow>
            ))}
          </MuiTableBody>
        );
      }
      return (
        <MuiTableBody>
          <TableRow />
        </MuiTableBody>
      );
    }
    case 'choicemulti': {
      if (question.optionList) {
        return (
          <MuiTableBody>
            {question.optionList.sort(sortOptionCount).map((el, index) => (
              <TableRow key={el.optionId}>
                <TableCell component="th" scope="row">
                  <div
                    className={classes.colorBlock}
                    style={{ borderColor: colors[index % colors.length] }}
                  />
                  {el.optionName}
                </TableCell>
                <TableCell align="left">{el.optionCount}</TableCell>
                <TableCell align="left">
                  {calcPercent(el.optionCount, totalResponses)}
                </TableCell>
              </TableRow>
            ))}
          </MuiTableBody>
        );
      }
      return (
        <MuiTableBody>
          <TableRow />
        </MuiTableBody>
      );
    }
    default:
      return null;
  }
};

export default TableBody;
