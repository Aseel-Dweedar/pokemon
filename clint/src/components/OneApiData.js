import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class OneApiData extends Component {
  render() {
    return (
      <div>
        {this.props.apiData.map((value, index) => {
          return (
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={value.url} alt={value.name} />
              <Card.Body>
                <Card.Title>{value.name}</Card.Title>
                <Button onClick={() => this.props.addToFavorite(value)} variant="primary">
                  Add To Favorite
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default OneApiData;
