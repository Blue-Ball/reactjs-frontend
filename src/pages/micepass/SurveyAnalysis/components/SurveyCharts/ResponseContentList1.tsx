import React, { FC, useState } from 'react';
// import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { ResponseContent } from './types';

// const useStyles = makeStyles(() => ({
//   card: {
//     boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
//     border: "1px solid #e3e6f0",
//     borderRadius: "0.6rem",
//     // marginBottom: theme.spacing(6),
//   },  
// }));

export interface ResponseContentListProps {
  data?: ResponseContent[];
}

const ResponseContentList: FC<ResponseContentListProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  // const classes = useStyles();
  if (!data) {
    return null;
  }

  const renderContent = () => {
    if (data.length > 10) {
      const EndIcon = open ? ArrowDropUpIcon : ArrowDropDownIcon;
      const sliceData = open ? data : data.slice(0, 9);
      return (
        <>
          {sliceData.map((el, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableRow key={index}>
              <TableCell>{`${el.responseContent} (${el.responseContentCount})`}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <div style={{ display: 'flex' }}>
              <Button
                fullWidth
                endIcon={<EndIcon />}
                onClick={() => {
                  setOpen((open) => !open);
                }}
              >
                {open ? '查看部分' : '查看全部'}
              </Button>
            </div>
          </TableRow>
        </>
      );
    }
    return data.map((el) => (
      <TableRow key={`${el.responseContent}${el.responseContentCount}`}>
        <TableCell style={{border:"none"}}>{`${el.responseContent} (${el.responseContentCount})`}</TableCell>
      </TableRow>
    ));
  };

  return (
    <Grid item xs={12} style={{paddingLeft:'10px'}}>
      <Table>
        <TableBody>{renderContent()}</TableBody>
      </Table>
    </Grid>
  );
};

export default ResponseContentList;
