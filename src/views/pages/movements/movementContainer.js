import { ConstructionOutlined } from '@material-ui/icons';
import React from 'react';
import { getMovements } from 'services/movements';
import MovementsView from './movementView';
// eslint-disable-next-line react/prefer-stateless-function
export default class MovementsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movements: [],
            open: false
        };
        this.handleClickAddButton = this.handleClickAddButton.bind(this);
        this.handleClickCancelar = this.handleClickCancelar.bind(this);
    }

    componentDidMount() {
        this.getMovements();
    }

    handleClickAddButton() {
        this.setState({ open: true });
    }

    handleClickCancelar() {
        this.setState({ open: false }, () => {
            this.getMovements();
        });
    }

    async getMovements() {
        const movements = await getMovements();
        this.setState({ movements });
    }

    render() {
        const { movements, open } = this.state;
        return (
            <MovementsView
                movements={movements}
                onClickAddButton={this.handleClickAddButton}
                open={open}
                onClickCancelar={this.handleClickCancelar}
            />
        );
    }
}
