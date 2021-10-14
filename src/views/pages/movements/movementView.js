import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, CardHeader, IconButton } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import AddMovementContainer from './addMovementContainer';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// eslint-disable-next-line react/prefer-stateless-function
export default class MovementsView extends React.Component {
    render() {
        const { movements, onClickAddButton, open, onClickCancelar } = this.props;
        return (
            <div>
                <Card>
                    <CardHeader
                        title="Movimientos"
                        action={
                            <IconButton onClick={onClickAddButton}>
                                <AddCircleIcon color="primary" fontSize="large" />
                            </IconButton>
                        }
                    />
                    <Divider />
                    <CardContent>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell align="right">Producto</TableCell>
                                        <TableCell align="right">Cantidad</TableCell>
                                        <TableCell align="right">Fecha</TableCell>
                                        <TableCell align="right">Fecha de Registro</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {movements.map(({ movementId, product, quantity, moment, createAt }) => (
                                        <TableRow key={movementId}>
                                            <TableCell component="th" scope="row">
                                                {movementId}
                                            </TableCell>
                                            <TableCell align="right">{product.name}</TableCell>
                                            <TableCell align="right">{quantity}</TableCell>
                                            <TableCell align="right">{moment}</TableCell>
                                            <TableCell align="right">{createAt}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
                <AddMovementContainer open={open} onClickCancelar={onClickCancelar} />
            </div>
        );
    }
}
