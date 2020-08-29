import React from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmojiFrown, EmojiAngry, EmojiSmile } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull, faBed } from '@fortawesome/free-solid-svg-icons';


const Cards = (props)=>{

    return(
    <div className="container mt-3">
        <div className="row">
            <div className="col-xs-12 col-md-4">
                <Card style={{ width: '15rem' }}>
                    <Card.Body>
                    <div className="row">
                        <div className="col-8">
                        <Card.Title>infected</Card.Title>
                       </div>
                        <div className="col-4">
                        <FontAwesomeIcon icon={faBed} color="blue" size="lg" />
                        </div>
                    </div>

                        <h5>{props.data.confirmed.value}</h5>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-xs-12 col-md-4">
                <Card style={{ width: '15rem' }}>
                        <Card.Body>
                        <div className="row">
                        
                            <div className="col-8">
                            <Card.Title>Recovered</Card.Title>
                            </div>
                            <div className="col-4">
                            <EmojiSmile color="green" size={24} />
                            </div>
                        </div>
                        <h5>{props.data.recovered.value}</h5>
                        </Card.Body>
                </Card>
            </div>
            <div className="col-xs-12 col-md-4">
                <Card style={{ width: '15rem' }}>
                        <Card.Body>
                            <div className="row">
                                <div className="col-8">
                                    <Card.Title>Deaths</Card.Title>
                                </div>
                                <div className="col-4">
                                <FontAwesomeIcon icon={faSkull} color="red" size="lg" />
                                </div>
                            </div>
                        <h5>{props.data.deaths.value}</h5>
                        </Card.Body>
                </Card>
            </div>
        </div>
        <span className="mb-2 text-muted" >Last update: {(new Date(props.data.lastUpdate)).toUTCString()}</span>
    </div>    
        );
}
export default Cards;