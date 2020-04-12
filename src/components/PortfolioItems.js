import React from 'react';
import { Card, CardText, CardTitle, CardActions, Button } from "react-mdl";
import './css/Portfolio.css'

function PortfolioItems(props){
    return(
            <span id = "project-card">
                <Card shadow={4} style = {{width: '320px', height: '320px'}}>
                <CardTitle expand style = {{color: '#fff', background: 'props.details.href'}}
                        id="card-title">{props.details.project_name}</CardTitle>
                <CardText id="card-text">{props.details.text}</CardText>
                <CardActions border>
                        <Button colored id="button-text">{props.details.project_name}</Button>
                </CardActions>
                </Card>
            </span>
    )
}

export default PortfolioItems