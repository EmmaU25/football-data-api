import React, { Component } from 'react';
import '../Assets/css/grayscale.css';


class matchs extends Component {
	constructor(){
		super();
		this.state = {
			matchs:[]
		};
	}

	componentDidMount(){
		fetch("http://api.football-data.org/v1/competitions/"+this.props.match.params.id+"/fixtures?matchday=8")
			.then(res => res.json())
			.then(res => {
				this.setState({
				 matchs: res.fixtures
				});
			})
			.catch(error => {
				console.log('error dude, desolé');
			})
	}

	render () {
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
		    <h1>Les matchs de la ligue</h1>
			<div className="row">
				{this.state.matchs.map(function(p, index){
					var date = new Date(p.date);
					var elapsed  =  date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay();
					return(
						<div className="col-md-6">
							<div class="card margine">
							 	<div className="row">
							 		<div className="col-md-12 noir">
							 		{elapsed}
							 		</div>
							 	</div>
							 	
							 	<div className="row centered">
							 		<div className="col-md-4 noir">
							 			{p.homeTeamName}	
							 		</div>
							 		
							 		<div className="col-md-4 noir">
							 			<h4> {p.result.goalsHomeTeam} - {p.result.goalsAwayTeam}</h4>
							 		</div>
							 		
							 		<div className="col-md-4 noir">
							 			{p.awayTeamName}
							 		</div>


							 	</div>
							 	
							 	<div className="row centered">
								 	<div className="col-md-12 noir">
								 		{p.status}
								 	</div>
							 	</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
		);
	}
}

export default matchs;