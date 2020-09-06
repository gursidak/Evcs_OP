import React from 'react';
import Link from '@material-ui/core/Link';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import './Orders.css'

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

// To be destined to come from Database;
// All orders: Upcoming + Past
const recent = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

const upcoming = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: '#999999',
  },
  body: {
    color: '#999999',
  },
}))(TableCell);

export default function Orders({ online }) {
  const classes = useStyles();
  return (
    <>
      <React.Fragment>
        <Title>Upcoming Orders</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {upcoming.map((row) => (
              <TableRow key={row.id}>
                {
                  online
                    ? <>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.shipTo}</TableCell>
                      <TableCell>{row.paymentMethod}</TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                    </>
                    : <>
                      <StyledTableCell>{row.date}</StyledTableCell>
                      <StyledTableCell>{row.name}</StyledTableCell>
                      <StyledTableCell>{row.shipTo}</StyledTableCell>
                      <StyledTableCell>{row.paymentMethod}</StyledTableCell>
                      <StyledTableCell align="right">{row.amount}</StyledTableCell>
                    </>
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {
          online
            ? <div className={classes.seeMore}>
              <Link href="#" onClick={preventDefault} >
                See more orders
              </Link>
            </div>
            : <div className="offlineLink">
              <Link href="#" onClick={preventDefault} className="offlineLink" >
                See more orders
            </Link>
            </div>
        }
      </React.Fragment>

      <React.Fragment>
        <Title>Recent Orders</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recent.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Link href="#" onClick={preventDefault} >
            See more orders
        </Link>
        </div>
      </React.Fragment>
    </>
  );
}