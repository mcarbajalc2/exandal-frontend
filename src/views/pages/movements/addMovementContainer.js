import React from 'react';
import { addMovement } from 'services/movements';
import { getProducts } from 'services/products';
import AddMovementView from './addMovementView';

export default class AddMovementContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movement: {
                id: undefined,
                productId: undefined,
                quantity: 0,
                moment: ''
            },
            products: []
        };
        this.handleClickGuardar = this.handleClickGuardar.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleChangeMoment = this.handleChangeMoment.bind(this);
        this.handleChangeProducto = this.handleChangeProducto.bind(this);
    }

    async componentDidMount() {
        const products = await getProducts();
        this.setState({ products });
    }

    handleChangeQuantity(evt) {
        const { movement } = this.state;
        movement.quantity = evt.target.value;
        this.setState({ movement });
    }

    handleChangeMoment(evt) {
        const { movement } = this.state;
        movement.moment = evt.target.value;
        this.setState({ movement });
    }

    handleChangeProducto(evt) {
        const { movement } = this.state;
        movement.productId = evt.target.value;
        this.setState({ movement });
    }

    async handleClickGuardar() {
        const { movement } = this.state;
        const { onClickCancelar } = this.props;

        await addMovement(movement);
        onClickCancelar();
    }

    render() {
        const { movement, products } = this.state;
        const { open, onClickCancelar } = this.props;
        return (
            <AddMovementView
                movement={movement}
                open={open}
                products={products}
                onClickCancelar={onClickCancelar}
                onClickGuardar={this.handleClickGuardar}
                onChangeQuantity={this.handleChangeQuantity}
                onChangeMoment={this.handleChangeMoment}
                onChangeProducto={this.handleChangeProducto}
            />
        );
    }
}
