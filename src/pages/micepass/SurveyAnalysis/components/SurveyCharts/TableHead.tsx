import React, { FC } from 'react';

import {
  TableHead as MuiTableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';

const TableHead: FC = () => (
    <MuiTableHead>
      <TableRow>
        <TableCell>Answer options</TableCell>
        <TableCell align="left">Number of answers</TableCell>
        <TableCell align="left">percentage</TableCell>
      </TableRow>
    </MuiTableHead>
  );

export default TableHead;
