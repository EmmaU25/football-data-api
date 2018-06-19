import React, { Component } from 'react';
import '../Assets/css/grayscale.css';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';


class Ligues extends Component {
	constructor(){
		super();
		this.state = {
			ligues: []
		};
	}

	componentDidMount (){
		fetch('http://api.football-data.org/v1/competitions/?season=2017', {
            method: 'GET',
            headers: {
                'X-Auth-Token': '3b7136ad76ce4b0cacd7e1b02d50870f',
            }
        })
			.then(res => res.json())
			.then(res =>{
				this.setState({
					ligues:res
				});
			})
			.catch(error => {
				console.log('error, desolé')
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
		    <div className="centered">
		    	<h1>Ligues Page</h1>
		    </div>

		    <div className="container">
		     <div className="row">
				{this.state.ligues.map(function(p, index){
					const newTo = { 
					  pathname: "/menu", 
					  param1: p.id,
					  param2: p.caption,
					  param3:p.currentMatchday,
					  param4:p.numberOfMatchdays,
					  param5:p.numberOfTeams,
					  param6:p.numberOfGames,
					  param7:p.lastUpdated 
					};
					return(
						<div className="col-md-3 centered" key={p.id}>
							<div className="hello">
							  <img className="ing" src="https://cdn0.iconfinder.com/data/icons/cup/154/football-shield-club-sport-512.png" alt="Card image cap"/>
							  <div className="card-body">
							    <h5 className="card-title black"> {p.caption} </h5>
							    <Link to={newTo} className="btn btn-primary">GO</Link>
							    <br />
   							    <br />

							    <UncontrolledDropdown>
							      <DropdownToggle caret>
							        Actions
							      </DropdownToggle>
							      <DropdownMenu>
							        <DropdownItem header>Actions</DropdownItem>
							        <DropdownItem ><Link to={`/matchs/${p.id}`} className="btn btn-primary">Matchs</Link></DropdownItem>
							        <DropdownItem><Link to={`/table/${p.id}`} className="btn btn-primary">Classement</Link></DropdownItem>
							        <DropdownItem> <Link to={`/details/${p.id}`} className="btn btn-primary">Equipes</Link></DropdownItem>
							      </DropdownMenu>
							    </UncontrolledDropdown>
							  </div>
							</div>
						</div>
					);
				})}
			</div>
			</div>
		</div>
		);
	}
}

export default Ligues;