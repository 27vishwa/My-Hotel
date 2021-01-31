import React from 'react'
import {Card} from 'react-bootstrap'
//import {Link} from 'react-router-dom'

import product from '../images/product.png'
import sweet from '../images/sweets.png'
import icecream from '../images/icecream.png'
import juices from '../images/juices.png'
import namkeen from '../images/namkeen.png'

import '../App.css'
//import Kajukatli1 from '../sweets/kajukatli'
class Home extends React.Component{    
    sweets()
    {
      this.props.history.push({
        pathname: "/sweets",
      })
    }
    icecreams()
    {
      this.props.history.push({
        pathname: "/icecreams",
      })
    }
    juice()
    {
      this.props.history.push({
        pathname: "/juices",
      })
    }
    namkeens()
    {
      this.props.history.push({
        pathname: "/namkeens",
      })
    }
    render()
    {
        return(
           <div style={{ backgroundImage:`url(${product})` ,backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",backgroundPosition:"top" ,opacity:"0.8"}} >
                         <div >
           
             <div className="container">
             <div className="row"> 
             <div className="overflow">
               <Card 
             style={{ width: '19rem',marginLeft: '200px',height:'450px',marginTop:'10px' }}
            onClick={()=>{this.sweets()}}
             >
            <Card.Header style={{textAlign:'center',color:'blueviolet'}}>SWEETS</Card.Header>
            <Card.Body>
            <Card.Img  src={sweet} className="ss"/>
    <Card.Text>
    “SWEET” can trigger our taste buds causing us to salivate now. 
    Nothing can be as awesome as having a sweet treat to celebrate 
    any event that involves happiness.
    </Card.Text>
  </Card.Body>
</Card> 

             </div>
             <div>
             <Card 
              onClick={()=>{this.icecreams()}}
             style={{ width: '19rem',marginLeft: '180px',height:'450px',marginTop:'10px' }}>
            <Card.Header style={{textAlign:'center',color:'blueviolet'}}>ICE-CREAM</Card.Header>
            <Card.Body>
            <Card.Img  src={icecream} className="ss"/>
    <Card.Text>
    Ice-cream is one of the most popular desserts.
 It is a frozen dessert made out of milk and cream generally
  and come in many flavours.
    </Card.Text>
  </Card.Body>
</Card> 
             </div>
             </div>
              </div>
              <div className="container">
             <div className="row">
              <div>
             <Card 
              onClick={()=>{this.juice()}}
             style={{ width: '19rem',marginLeft: '200px',marginTop:'60px',height:'450px',marginBottom:'10px' }}>
            <Card.Header style={{textAlign:'center',color:'blueviolet'}}>JUICES</Card.Header>
            <Card.Body>
            <Card.Img  src={juices} className="ss"/>
    <Card.Text>
    Juicing is a method of extracting juice from fruits and vegetables. 
    It is one of the fastest and most convenient ways of providing your body with nutrition.
    

    </Card.Text>
  </Card.Body>
</Card> 
             </div>
             <div>
             <Card
              onClick={()=>{this.namkeens()}}
             style={{ width: '19rem',marginLeft: '180px',marginTop:'60px',height:'450px',marginBottom:'10px'}}>
            <Card.Header style={{textAlign:'center',color:'blueviolet'}}>NAMKEEN</Card.Header>
            <Card.Body>
            <Card.Img  src={namkeen} className="ss" />
    <Card.Text>
    Namkeen is the Hindi word used to describe a savory flavor.
    Typical namkeen snacks in Indian cuisine include khaara, farsan,
     chivda, sav, chips, and bhujiya.
    </Card.Text>
  </Card.Body>
</Card> 
             </div>
             </div>
             </div>
           
             </div>
                     </div>

        )
    }
}
export default Home;