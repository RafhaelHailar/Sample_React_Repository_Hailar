import {Button, Card} from "react-bootstrap";   
import React , {Component} from 'react';
import SuperWashWashy300Image from "../images/washing-machine-1.webp";
import WashywepWashyNeneyImage from "../images/washing-machine-2.png";
import MachinyWashyImage from "../images/washing-machine-2.webp";


const Items = {
    SuperWashyWashy300 : {
        image : SuperWashWashy300Image,
        title : "Super Washy Washy 300",
        description : `
            Super Washy Washy 300 is made from China.
            It was so fast,faster than your father when he lefts you.
            It is taught how to watch in its early development so it's good.
            It was named after its inventer Mr. Washy Washy.    
        `
    },
    WashywepWashyNeney : {
        image : WashywepWashyNeneyImage,
        title : "Washywep Washy Neney",
        description : `
            Made from the land of Capitalism,United States of America.
            It made no sound,faster,greedy,when you pour oil in it it will be excited 
            and wash more faster,it can also be white and black.
        `
    },
    MachinyWashy : {
        image : MachinyWashyImage,
        title : "Machiny Washy",
        description : `
            Made from Japan. Although it might looks like Super Wash Washy 300 
            We can guaranteed you that the two are different
            they might sound the same but they are two diffrent
            race of washing machine.
        `
    }
}


class GridAitoms extends Component {
    render() {
        const name = this.props.name;
        const {image,title,description} = Items[name];
        return (
            <>
                <div className="col-4">
                    <Card style={{height : "100vh !important"}}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                               {description}
                            </Card.Text>
                            <Button variant='primary'>Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
            </>
        );
    }
} 

export default GridAitoms;