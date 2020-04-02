import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem,Button,Row,Col,Label,Modal,ModalHeader,ModalBody,Nav,Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';

import {LocalForm,Control,Errors} from 'react-redux-form'
const required=(val)=>val && val.length;
const maxLength=(len)=>(val)=>(!val) || (val.length <=len)
const minLength=(len)=>(val)=>(val) && (val.length >= len)

 function RenderDish({dish}){
    if(dish!=null){
         return(
           <Card>
             <CardImg width="100%" src={dish.image} alt={dish.name} /> 
             <CardBody>
             <CardTitle>{dish.name}</CardTitle>
         <CardText>{dish.description}</CardText>
             </CardBody>
           </Card>
         )
    }
    else{
      return(
          <div>

          </div>
      
      )
    }
}
 function RenderComments({comments}){
  if(comments!=null){
      return(
          <div>
              <h4>Comments</h4>
               {
                   comments.map(insideComment=>{
                       return(
                           <div key={insideComment["id"]}>
                               <ul class="list-unstyled">
                                 <li><p>{insideComment["comment"]}</p></li>
                                 <li><p><span>--</span>{insideComment["author"]} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(insideComment["date"])) )}</p></li>
                               </ul>
                            
                            </div>
                       );
                   })
               }
              <CommentForm/>     
          </div>
      )
     
  }
  else {
    return(
        <div>
        
        </div>
    );
   
}
}
class CommentForm extends Component{
  constructor(props){
      super(props);
      this.state={
       isNavOpen:false,
       isModalOpen:false
    };
    this.toggleNav=this.toggleNav.bind(this);
      this.toggleModal=this.toggleModal.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
  }
  toggleNav(){
   this.setState({
       isNavOpen:!this.state.isNavOpen
   })
}
toggleModal(){
     this.setState({
         isModalOpen:!this.state.isModalOpen
     })
}
handleSubmit(values) {
this.toggleModal();
console.log('Current State is:'+JSON.stringify(values));
alert('current state is :'+JSON.stringify(values));

}
  render(){
      return(
          <div>
              <Button outline onClick= {this.toggleModal}>
              <span className="fa fa-edit fa-lg"></span>Submit
              </Button>
              <React.Fragment>
              <Collapse isOpen={this.state.isNavOpen}>
              
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                           <Row className="form-group">
                               
                           
                                  <Col>
                                  <Label htmlFor="rating">Rating</Label>
                                      <Control.select model=".rating" name="contactType"   
                                      className="form-control"
                                      >
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      </Control.select>
                                  </Col>
                            </Row>
                            <Row className="form-group">
                           
                                  <Col>
                                  <Label htmlFor="yourname">Your Name</Label>
                                      <Control.text model=".yourname" name="yourname"
                                      placeholder="Your Name"   
                                      className="form-control"
                                      validators={{
                                          required,minLength:minLength(3),maxLength:maxLength(15)
                                      }}
                                      />
                               <Errors
                                  className="text-danger"
                                  model=".yourname"
                                  show="touched"
                                  messages={{
                                      required:'Required',
                                      minLength:'Must be grater than 2 Characters',
                                      maxLength:'Must be 15 characters or Less'
                                  }}
                                 /> 
                                  </Col>
                                
                            </Row>
                            <Row className="form-group">
                            
                                  <Col >
                                  <Label htmlFor="comment">Comment</Label>
                                      <Control.textarea model=".comment" name="comment"   
                                      className="form-control" row ="6"
                                      />
                                  </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                        
                    </ModalBody>
               </Modal>      
                   

              </Collapse>
              </React.Fragment>
          </div>
              
              
              
              
          
      );
  }

}



const DishDetails=(props)=>{
    return(
        <div className="container">
                <div className="row">
        <Breadcrumb>
         <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
         <BreadcrumbItem  active>{props.selected.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
           <h3>{props.selected.name}</h3>
           <hr/>
        </div>
      </div>
        <div className="row">
          
             
             <div className="col-12 col-md-5">
             <RenderDish dish={props.selected}/>
             </div>
             <div className="col-12 col-md-5">
             <RenderComments comments={props.comments}/>
             </div>
         </div>
        </div>
        
         );
}
   
      
   


export default DishDetails;