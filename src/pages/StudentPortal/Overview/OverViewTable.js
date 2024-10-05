import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Avatar } from "@mui/material";
import ProgressBar from "./components/ProgressBar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function createData(id, name, calories, fat, carbs, protein, icon) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
    icon,
  };
}

const Avataricon = [
  <Avatar
    src={require("../../../assets/avatar1-BitUNrbl.png")}
    sx={{
      width: "20px",
      height: "20px",
      position: "relative",
      left: "5px",
    }}
  />,
  <Avatar
    src={require("../../../assets/avatar2-4Zw0wyKV.png")}
    sx={{
      width: "20px",
      height: "20px",
    }}
  />,
  <Avatar
    src={require("../../../assets/avatar3-CQVfZJmL.png")}
    sx={{
      width: "20px",
      height: "20px",
      position: "relative",
      right: "5px",
    }}
  />,
  <Avatar
    src={require("../../../assets/avatar4-UQqyHlpd.png")}
    sx={{
      width: "20px",
      height: "20px",
      position: "relative",
      right: "10px",
    }}
  />,
  <Avatar
    src={require("../../../assets/avatar5-Dut-0EdJ.png")}
    sx={{
      width: "20px",
      height: "20px",
      position: "relative",
      right: "15px",
    }}
  />,
];

const rows = [
  createData(
    1,
    "Fixing Critical Bugs",
    Avataricon,
    <ProgressBar />,
    <Typography
      sx={{
        background: "#DCE4FF",
        color: "rgb(84, 111, 255)",
        borderRadius: "20px",
        fontSize: "14px",
        position: "relative",
        left: ".5rem",
        wordWrap: "nowrap",
      }}
    >
      InProgress
    </Typography>,
    "2 Days",
    <MoreHorizIcon />
  ),
  createData(
    2,
    "Designing Landing Page",
    Avataricon,
    <ProgressBar />,
    <Typography
      sx={{
        background: "#D5E8DD",
        color: "rgb(46, 139, 87)",
        borderRadius: "20px",
        fontSize: "14px",
        position: "relative",
        left: ".5rem",
        wordWrap: "nowrap",
      }}
    >
      Completed
    </Typography>,
    "3 Hours",
    <MoreHorizIcon />
  ),
  createData(
    3,
    "Setting Up Analytics",
    Avataricon,
    <ProgressBar />,
    <Typography
      sx={{
        background: "#D5E8DD",
        color: "rgb(46, 139, 87)",
        borderRadius: "20px",
        fontSize: "14px",
        position: "relative",
        left: ".5rem",
        wordWrap: "nowrap",
      }}
    >
      Completed
    </Typography>,
    "5 Hours",
    <MoreHorizIcon />
  ),
  createData(
    4,
    "Setting Up Analytics",
    Avataricon,
    <ProgressBar />,
    <Typography
      sx={{
        background: "#DCE4FF",
        color: "rgb(84, 111, 255)",
        borderRadius: "20px",
        fontSize: "14px",
        position: "relative",
        left: ".5rem",
        wordWrap: "nowrap",
      }}
    >
      InProgress
    </Typography>,
    "4 Days",
    <MoreHorizIcon />
  ),
  createData(
    5,
    "Fixing UI/UX Issues",
    Avataricon,
    <ProgressBar />,
    <Typography
      sx={{
        background: "#FFFFCC",
        color: "rgb(204, 141, 67)",
        borderRadius: "20px",
        fontSize: "14px",
        position: "relative",
        left: ".5rem",
        wordWrap: "nowrap",
      }}
    >
      Pendig
    </Typography>,
    "5 Days",
    <MoreHorizIcon />
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "task",
    numeric: false,
    disablePadding: true,
    label: "Task",
  },
  {
    id: "members",
    numeric: true,
    disablePadding: false,
    label: "Members",
  },
  {
    id: "progress",
    numeric: true,
    disablePadding: false,
    label: "Progress",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "time",
    numeric: true,
    disablePadding: false,
    label: "Time Left",
  },
  {
    id: "icon",
    numeric: true,
    disablePadding: false,
    label: <MoreHorizIcon />,
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <input
            type="checkbox"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ fontWeight: "600", fontSize: "15px" }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function OverViewTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, padding: ".5rem" }}>
        <TableContainer
          sx={{
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#c2c6e8 ",
              borderRadius: "10px !important",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "white",
            },
            scrollbarWidth: "thin",
            scrollbarColor: "#c2c6e8 white",
          }}
        >
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    {/* <TableCell padding="checkbox">
                      <input
                        type="checkbox"
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                        className="bg-black-500"
                      />
                    </TableCell> */}
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      sx={{ color: "#73747B", fontWeight: "bold" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        left: ".5rem",
                      }}
                    >
                      {row.calories}
                    </TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "500", fontSize: "0.875rem" }}
                    >
                      {row.protein}
                    </TableCell>
                    <TableCell align="center">{row.icon}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}
