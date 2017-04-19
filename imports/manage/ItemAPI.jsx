import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Table, Card, Image, Divider, Button} from 'semantic-ui-react'

const colors = [
  'teal'
]
import { ItemCollection } from '../collections/items.js';

import Item from '../objects/item.jsx';

class ItemAPI extends React.Component {

      renderItemsList ()
      {
             return this.props.items.map((item) => (
               <div key={item._id}> 
           <Card>
            <Image src='https://s-media-cache-ak0.pinimg.com/736x/54/7a/9c/547a9cc6b93e10261f1dd8a8af474e03.jpg' />
            <Card.Content>
              <Card.Header>
              {item.itemName}
              </Card.Header>
              <Card.Description>{item.itemDescription}</Card.Description>
              <Divider/>
           
                <span className='date'>
                  Uploaded on : {item.itemPrice}
                </span>
                <Divider/>
                <span >
                  Price : {item.itemPrice}
                  </span>
                <Divider/>
                 <span>
                  Owner : {item.itemOwner}
                  </span>
               </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                  <Button icon='add to cart' basic color='green' content='Borrow'></Button>
                  <Button icon='talk outline' basic color='blue' content='Message  Owner'></Button>
                </div>
            </Card.Content>
          </Card>
          </div>
      ));
      }

      render() {
            return (
            <div>
            <h1> This is the DB Items </h1>
            <ul>
            {this.renderItemsList()}
            </ul>
              <div>
                {colors.map(color => (
                  <Table color={color} key={color} inverted>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Option</Table.HeaderCell>
                        <Table.HeaderCell>Data</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>{this.renderItemsList()}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                ))}
              </div>
            </div>
            );
      }

}

ItemAPI.propTypes = {
  items: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    items: ItemCollection.find({}, { sort: { createdAt: -1 }}).fetch()
  };
}, ItemAPI);