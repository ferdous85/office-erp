import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
                        head: {
                            backgroundColor: theme.palette.common.black,
                            color: theme.palette.common.white,
                        },
                        body: {
                            fontSize: 14,
                        },
                        }))(TableCell);

const StyledTableRow = withStyles(theme => ({
                        root: {
                            '&:nth-of-type(odd)': {
                            backgroundColor: theme.palette.background.default,
                            },
                        },
                        }))(TableRow);

function createData(name, calories, fat, carbs, protein) {
                        return { name, calories, fat, carbs, protein };
                        }

                        const rows = [
                                    createData('Biprodas Roy', 159, 6.0, 24, 4.0),
                                    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
                                    createData('Eclair', 262, 16.0, 24, 6.0),
                                    createData('Cupcake', 305, 3.7, 67, 4.3),
                                    createData('Gingerbread', 356, 16.0, 49, 3.9),
                                    ];

                        const useStyles = makeStyles({
                                    table: {
                                        minWidth: 700,
                                    },
                                    });

            function Attendance() {
                     const classes = useStyles();

                        return (
                            <React.Fragment>
                                <h3>Employee Attendence</h3>
                            <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell>Full Name</StyledTableCell>
                                    <StyledTableCell align="right">Employee ID</StyledTableCell>
                                    <StyledTableCell align="right">Attendance Status</StyledTableCell>
                                    <StyledTableCell align="right">Working Days</StyledTableCell>
                                    <StyledTableCell align="right">Leave</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map(row => (
                                    <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                            </React.Fragment>
                        );
                        }


export default Attendance