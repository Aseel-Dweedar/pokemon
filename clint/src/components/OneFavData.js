import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class OneFavData extends Component {
  render() {
    return (
      <div>
        {this.props.favData.map((value, index) => {
          return (
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={value.url} alt={value.name} />
              <Card.Body>
                <Card.Title>{value.name}</Card.Title>
                <Button onClick={() => this.props.deleteFavorite(value._id)} variant="primary">
                  Delete From Favorite
                </Button>
                <Button onClick={() => this.props.setShowUpdateForm(value._id)} variant="primary">
                  Update
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default OneFavData;
