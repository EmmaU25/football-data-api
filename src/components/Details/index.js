import React, { Component } from 'react';
import '../Assets/css/grayscale.css';
import { Link } from 'react-router-dom';

class Details extends Component {
	constructor(){
		super();
		this.state = {
			equipes:[]
		};
	}

	componentDidMount(){
		fetch('http://api.football-data.org/v1/competitions/'+this.props.match.params.id+'/teams', {
            method: 'GET',
            headers: {
                'X-Auth-Token': '3b7136ad76ce4b0cacd7e1b02d50870f',
            }
        })
			.then(res => res.json())
			.then(res => {
	            this.setState({
				 equipes: res.teams
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
		    <h1>Teams Page</h1>
		    <div className="container">
		    <div className="row">
		    {
	    		this.state.equipes.map(p => {
	    			const newTo = { 
					  pathname: "/jouers", 
					  param1: p._links.players.href 
					};
					const ubication ={
						pathname: "/Geolocalisation",
						param2: p.name
					}
		    		if(p.crestUrl != null){
			    		return(
							<div className="col-md-3">
								<div className="centered">
								  <img className="ing" src={p.crestUrl} alt="no image disponible"/>
								  <div className="card-body">
								    <h5 className="card-title black"> {p.name}</h5>
								    <Link to= {ubication} className="btn btn-primary">Geolocalisation</Link>
								  	<Link to= {newTo} className="btn btn-primary">Regarder Jouers</Link>
								  </div>
								</div>
							</div>
						);
		    		}else{
		    			return(
							<div className="col-md-3">
								<div className="centered">
								  <img className="ing" src="https://cdn.icon-icons.com/icons2/924/PNG/512/Football_2-61_icon-icons.com_72117.png" alt="Card image cap"/>

								  <div className="card-body">
								    <h5 className="card-title black"> {p.name} {p.id} </h5>
								     <Link to= {newTo} className="btn btn-primary">GO somewhere</Link>
								  </div>
								</div>
							</div>
						);		    			
		    		}
					
				})
		    }
		    </div>
		    </div>
		</div>
		);
	}
}

export default Details;