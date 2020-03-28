import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';


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
 function RenderComments({selected}){
  if(selected!=null){
      return(
          <div>
              <h4>Comments</h4>
               {
                   selected.comments.map(insideComment=>{
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
        <div className="row">
             <div className="col-12 col-md-5">
             <RenderDish dish={props.selected}/>
             </div>
             <div className="col-12 col-md-5">
             <RenderComments selected={props.selected}/>
             </div>
         </div>
         );
}
   
      
   


export default DishDetails;