import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { TableCell, TableRow, TableSortLabel } from "@material-ui/core";
import DataTable, { useDataTable } from "@e-group/material-module/DataTable";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@e-group/material/Grid";

import { DefaultPayload } from "@e-group/material-module/DataTable/useDataTable";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0 .15rem 1.75rem 0 rgba(58, 59, 69, .15)!important",
    border: "1px solid #e3e6f0",
    borderRadius: "0.35rem",
    marginBottom: theme.spacing(6),
  },
  cardHeader: {
    background: "#f8f9fc",
    borderBottom: "1px solid #e3e6f0",
    "& .MuiTypography-root": {
      color: "#5a5c69!important",
      fontSize: "1rem",
      lineHeight: "1.2",
    },
  },
  cardContent: {
    padding: "0",
    paddingBottom: "0",
    "& .MuiTableHead-root th": {
      fontSize: "1rem",
      color: "#858796",
      textTransform: "capitalize",
    },
    "& .MuiTableBody-root td": {
      color: "#858796",
      fontSize: "1rem",
      lineHeight: "1.5",
    },
  },
}));

type RowData = {
  name: string;
  date: string;
  title: string;
};

function createData(name: string, date: string, title: string) {
  return { name, date, title } as RowData;
}

const columns = ["name", "date", "title"];

const assignments = [
  createData(
    "Tiger Nixon",
    "21/08/2021",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ),
  createData(
    "Garrett Winters",
    "21/08/2021",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ),
  createData(
    "Ashton Cox",
    "21/08/2021",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ),
  createData(
    "Cedric Kelly",
    "21/08/2021",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ),
];

interface MyDefaultPayload extends Omit<DefaultPayload, "from"> {
  startIndex?: number;
}

const BulletinBoard: React.VoidFunctionComponent = () => {
  const {
    handleColumnSortData,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
  } = useDataTable<
    {
      from: number;
      size: number;
    },
    MyDefaultPayload
  >(
    "myTableKey",
    {
      from: 0,
      size: 10,
    },
    {
      fromKey: "startIndex",
    }
  );

  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardHeader title="Bulletin Board" className={classes.cardHeader} />
        <CardContent className={classes.cardContent}>
          <DataTable
            columns={columns}
            data={assignments}
            renderColumns={(rowData, { orderIndex, order, sortData }) => (
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderIndex === 0}
                    direction={order}
                    onClick={handleColumnSortData(sortData, "name", 0)}
                  >
                    {rowData[0]}
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderIndex === 0}
                    direction={order}
                    onClick={handleColumnSortData(sortData, "date", 0)}
                  >
                    {rowData[1]}
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderIndex === 0}
                    direction={order}
                    onClick={handleColumnSortData(sortData, "title", 0)}
                  >
                    {rowData[2]}
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            )}
            renderDataRow={(rowData) => {
              const data = rowData as RowData;
              return (
                <TableRow key={data.name}>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell>{data.title}</TableCell>
                </TableRow>
              );
            }}
            MuiTablePaginationProps={{
              count: assignments.length,
              page,
              rowsPerPage,
              rowsPerPageOptions: [2, 4, 6, 8],
              onChangePage: handleChangePage,
              onChangeRowsPerPage: handleChangeRowsPerPage,
            }}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BulletinBoard;
