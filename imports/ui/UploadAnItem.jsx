import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { ItemCollection } from '../collections/items.js';
import { Header, Card, Input, Icon, Image, Button, Divider, Form, Segment } from 'semantic-ui-react';

class UploadItemPage extends React.Component {

  constructor(props) 
  {
    super(props);

    var CurrentDate = new Date();
    this.state = 
    {
      user :Session.get('user'),
      ItemName: 'Tool Name',
      ItemDescription: 'This is a tool for testing the web app !!',
      ItemPrice : 'Free',
      ItemOwner :'Share-admin',
      ItemStatus : 'working',
    }

      this.updateStateItemName = this.updateStateItemName.bind(this);
      this.updateStateItemDescription = this.updateStateItemDescription.bind(this);
      this.updateStateItemPrice = this.updateStateItemPrice.bind(this);
      this.updateStateItemOwner = this.updateStateItemOwner.bind(this);
      this.updateStateItemStatus = this.updateStateItemStatus.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  };


   updateStateItemName(event)        {this.setState({ ItemName: event.target.value});}
   updateStateItemDescription(event) {this.setState({ItemDescription: event.target.value});}
   updateStateItemPrice(event)       {this.setState({ItemPrice : event.target.value});}
   updateStateItemOwner(event)       {this.setState({ItemOwner : event.target.value});}
   updateStateItemStatus(event)      {this.setState({ItemStatus: event.target.value});}


   handleSubmit() {
      
      var Name = this.state.ItemName;
      var Description = this.state.ItemDescription;
      var Price = this.state.ItemPrice;
      var Owner = this.state.ItemOwner;
      var Status = this.state.ItemStatus;
      date = new Date();
    console.log("Name: " + this.state.ItemName);
    console.log("Description: " + this.state.ItemDescription);
    console.log("Price: " + this.state.ItemPrice);
    console.log("Owner: " + this.state.ItemOwner);
    console.log("Status: " + this.state.ItemStatus);
    console.log("Status: " + date);

    ItemCollection.insert({Name,Description,Price,Owner,Status,date});
    
}

   render() {
      return (
         <div>
          <Segment.Group>
          <Segment>
          <Header as='h2'>
           <Icon name='send outline' />
            <Header.Content>
              Upload your item to the network
            </Header.Content>
          </Header>
          </Segment>

          <Segment.Group horizontal>
          <Segment inverted color='green' raised circular>
          <Form inverted size='small'>

          <Form.Field>
            <label>Item Name</label>
            <Input icon = "registered" type = "text" value = {this.state.ItemName} onChange = {this.updateStateItemName} />            
          </Form.Field>

          <Divider hidden />

          <Form.Field>
           <label>Item Description</label>
            <Input icon = "browser" type = "text" value = {this.state.ItemDescription} onChange = {this.updateStateItemDescription} />
          </Form.Field>
          <Divider hidden />
           
          <Form.Field>
           <label>Item Price</label>
            <Input icon = "dollar" type = "text" value = {this.state.ItemPrice}  onChange = {this.updateStateItemPrice} />
          </Form.Field>
          <Divider hidden />
          
          <Form.Field>
           <label>Item Owner</label>
            <Input icon = "user" type = "text" value = {this.state.ItemOwner} onChange = {this.updateStateItemOwner} />
          </Form.Field>
          <Divider hidden />
                            
          <Form.Field>         
           <label>Item Status</label>
            <select value = {this.state.ItemStatus} onChange= {this.updateStateItemStatus} >    
            <option value="good">New</option>
            <option value="used">Used</option>
            <option value="working">Working</option>
            <option value="partlyworking">Partly Working</option>
            </select>  
           </Form.Field>   
          <Divider hidden />
          </Form>
          <Button icon='send' color='blue' content='Submit' onClick = {this.handleSubmit}/>
          </Segment>
          <Segment raised >
            <header as='h2'>
            <Header.Content>
              Preview 
            </Header.Content>
            </header>
           <Card>
            <Image src='https://s-media-cache-ak0.pinimg.com/736x/54/7a/9c/547a9cc6b93e10261f1dd8a8af474e03.jpg' />
            <Card.Content>
              <Card.Header>
              {this.state.ItemName}
              </Card.Header>
              <Card.Description>{this.state.ItemDescription}</Card.Description>
              <Divider/>
           
                <span className='date'>
                  Uploaded on : 16/04/2017 
                </span>
                <Divider/>
                <span >
                  Price : {this.state.ItemPrice}
                  </span>
                <Divider/>
                 <span>
                  Owner : {this.state.ItemOwner}
                  </span>
               </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                  <Button icon='add to cart' basic color='green' content='Borrow'></Button>
                  <Button icon='talk outline' basic color='blue' content='Message  Owner'></Button>
                </div>
            </Card.Content>
          </Card>
          </Segment>
          </Segment.Group>
          </Segment.Group>
         </div>
   
   
         );
        }
}

export default UploadItemPage;