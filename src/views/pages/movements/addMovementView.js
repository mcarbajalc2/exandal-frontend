import { Button, Drawer, FormControl, InputLabel, List, ListItem, ListItemText, MenuItem, Select, TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class AddMovementView extends React.Component {
    render() {
        const { open, movement, products, onClickCancelar, onClickGuardar, onChangeQuantity, onChangeMoment, onChangeProducto } =
            this.props;
        return (
            <Drawer anchor="right" open={open}>
                <List>
                    <ListItem>
                        <h2>Nuevo Movimiento</h2>
                    </ListItem>
                    <ListItem>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="demo-simple-select-label">Producto</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Producto" onChange={onChangeProducto}>
                                {products.map((product) => (
                                    <MenuItem key={`product-${product.productId}`} value={product.productId}>
                                        {product.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </ListItem>
                    <ListItem>
                        <TextField
                            type="number"
                            id="standard-basic"
                            label="Cantidad"
                            value={movement.quantity}
                            onChange={onChangeQuantity}
                            fullWidth
                        />
                    </ListItem>
                    <ListItem>
                        <TextField
                            type="datetime-local"
                            id="standard-basic"
                            label="Fecha"
                            value={movement.moment}
                            onChange={onChangeMoment}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </ListItem>
                </List>

                <List style={{ marginTop: `auto` }}>
                    <ListItem>
                        <Box mr={2}>
                            <Button variant="outlined" mr={1} onClick={onClickCancelar}>
                                Cancelar
                            </Button>
                        </Box>
                        <Button variant="contained" color="primary" onClick={onClickGuardar}>
                            Guardar
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}
