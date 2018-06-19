import React, { Component } from 'react';
import '../Assets/css/grayscale.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


class Jouers extends Component {
	constructor(props){
		super(props);
		this.state = {
			jouers:[],
			collapse: []
			
		};
		this.toggle = this.toggle.bind(this);
	}

 toggle(ide) {
 	console.log(ide)
   	let newState = Object.assign(this.state.collapse)
    for (var i = 0; i < newState.length; i++) {
    	if(this.state.jouers[i].id === ide){
    		newState[i]=false;
    		console.log("yes")
    	}else{
    		newState[i]=true;
    		console.log("non")
    	}
    }
    this.setState({ collapse: newState });
  }

	componentDidMount(){
		console.log(this.props.location.param1);
		fetch(this.props.location.param1, {
            method: 'GET',
            headers: {
                'X-Auth-Token': '3b7136ad76ce4b0cacd7e1b02d50870f',
            }
        })
		.then(res => res.json())
		.then(res => {
			this.setState({
			 jouers: res.players,
			 collapse: new Array(res.players.length).fill(true)
			});
		})
		.catch(error => {
			console.log('error dude, desolé');
		})
	}



	render () {
		const tailleArray = this.state.jouers.length;
		
		return (
		<div>
	        <header className="ligues">
			 <div className="intro-body">
		        <div className="container">
		          <div className="row">
		            <div className="col-lg-8 mx-auto">
		              <h1 className="brand-heading">Ligues Football</h1>
		              <a href="" className="btn btn-circle js-scroll-trigger">
		                <i className="fa fa-angle-double-down animated"></i>
		              </a>
		            </div>
		          </div>
		        </div>
		      </div>
		    </header>
		    <h1>Jouers Page</h1>
		    <div className="container">
		    { 
				tailleArray>0 ? (
				    
				    <div className="row">
						{		
							this.state.jouers.map((p,i) => {
								return(
									<div className="col-md-3" key={p.id}>
										<div className="hello">
										  <img className="card-img-top" src="https://cdn0.iconfinder.com/data/icons/cup/154/football-shield-club-sport-512.png" alt="Card image cap"/>
										  <div className="card-body">
										    <h5 className="card-title black"> {p.name} </h5>
										   <Button color="primary" id={p.id} onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
							       			<Collapse isOpen={this.state.collapse[p.id]}>
									          <Card>
									            <CardBody className="noir">
									            Anim pariatur cliche reprehenderit,
									             enim eiusmod high life accusamus terry richardson ad squid. Nihil
									             anim keffiyeh helvetica, craft beer labore wes anderson cred
									             nesciunt sapiente ea proident.
									            </CardBody>
									          </Card>
									        </Collapse>
										  </div>
										</div>
									</div>
								);
							})
						}
				    </div>
				):(
					<div className="centered"><h1>pas de jouers</h1></div>
				)
			}
			</div>
		</div>
		);
	}
}

export default Jouers;