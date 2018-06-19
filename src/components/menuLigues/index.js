import React, { Component } from 'react';
import '../Assets/css/grayscale.css';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

class menuLigues extends Component {
	constructor(props){
			super(props)
			this.state = {
				ide: '',
				caption: '',
				currentMatchday: '',
				numberOfMatchdays: '',
				numberOfTeams: '',
				numberOfGames: '',
				lastUpdated: '',
				cont: "true"
			};
	}

	componentDidMount(){
		if(this.state.cont === "true"){
			this.setState({
				id: this.props.location.param1,
				caption: this.props.location.param2,
				currentMatchday: this.props.location.param3,
				numberOfMatchdays: this.props.location.param4,
				numberOfTeams: this.props.location.param5,
				numberOfGames: this.props.location.param6,
				lastUpdated: this.props.location.param7,
				cont:"false"
			});
		}else{
			console.log("Ya se hizo")
		}
		
	}
//this.props.match.params.id

	render () {
		    var validationMatch;
		    if(this.props.location.param3 === this.props.location.param4){
		      validationMatch=<div className="col-md-6"><Card body inverse color="danger"><CardTitle>{this.props.location.param4}</CardTitle><CardText>Nombre total de matchs à jouer</CardText></Card></div>
		    }else{
		      validationMatch=<div className="col-md-6"><Card body inverse style={{ backgroundColor: '#73668E', borderColor: '#73668E' }}><CardTitle>{this.props.location.param4}</CardTitle><CardText>Nombre total de matchs à jouer</CardText></Card></div>
		    }
		return (
		<div>
		    <header className="ligues">
		      <div className="intro-body">
		        <div className="container">
		          <div className="row">
		            <div className="col-lg-8 mx-auto">
		              <h1 className="brand-heading">{this.props.location.param2}</h1>
		              <a href="" className="btn btn-circle js-scroll-trigger">
		                <i className="fa fa-angle-double-down animated"></i>
		              </a>
		            </div>
		          </div>
		        </div>
		      </div>
		    </header>
		    <h3>Details de </h3>
		<div className="container">
		    <div className="row">
		    	<div className="col-md-6">
		    		<div className="row">
			    		<div className="col-md-6 margin-g" >
			    			<Card body inverse color="success">
						        <CardTitle>{this.props.location.param5}</CardTitle>
						        <CardText>Nombre d'équipes</CardText>
					      	</Card>
			    		</div>
			    		<div className="col-md-6 margin-g">
			    			<Card body inverse color="info">
						        <CardTitle>{this.props.location.param6}</CardTitle>
						        <CardText>Nombre de matchs</CardText>
					      	</Card>
			    		</div>

			    		<div className="col-md-12">
			    			<Card body inverse color="warning">
						        <CardTitle>{this.props.location.param7}</CardTitle>
						        <CardText>Dernière mise à jour</CardText>
					      	</Card>
			    		</div>
		    		</div>
		    	</div>


		    	<div className="col-md-6">
		    		<div className="row">
			    		<div className="col-md-6">			    			
			    			<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
						        <CardTitle>{this.state.currentMatchday}</CardTitle>
						        <CardText>Journée actuelle</CardText>
					      	</Card>
			    		</div>
			    		{validationMatch}
		    		</div>

		    	</div>
		    </div>
		</div>
		</div>
		);
	}
}

export default menuLigues;