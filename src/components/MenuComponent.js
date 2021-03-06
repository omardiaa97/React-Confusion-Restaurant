import React, {Component} from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from "reactstrap";

class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }
    selectDish(dish){
        this.setState({selectedDish: dish});
    }
    renderDish(dish){
        if (dish != null){
            return(
                <Card>
                    <CardImg src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
                return(
                  <div></div>
                );
            }
    }
    render(){
        const menu = this.props.dishes.map(dish =>{
            return(
                <div key={dish.id} className={"col-sm-2 col-md-3"}>
                        <Card onClick={()=>this.selectDish(dish)}>
                        <CardImg src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className={"container"}>
                <div className={"row"}>
                        {menu}
                </div>
                <div className={"row"}>
                    <br></br>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;
