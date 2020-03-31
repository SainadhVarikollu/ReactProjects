import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

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