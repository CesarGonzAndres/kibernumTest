import React, {Component} from 'react';

class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
               keyword: ""
            },
            status: "init",
            response: null,
            selected: null,
            status: false
        }
    }

    componentWillMount() {
        this.fetchInfo();
    }

    handleSearch() {
        let data = {
            keyword: this.state.data.keyword
        }
        this.fetchInfo(data);
    }

    async fetchInfo(data) {
        const response = await fetch('http://localhost:8080/ranking', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const r = await response.json();
        if (r) {
            this.setState({response: r}, () => { });
        } 
    }

    backButton(){
		this.setState({status: false});
	}

    async detailedSubrank(id){
		this.setState({status: true});
		let data = {
			id: id
		}
		const response = await fetch('http://localhost:8080/subranking', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const r = await response.json();
		if (Array.isArray(r) && r.length !== 0) {
            this.setState({selected: r}, () => {
                console.log(this.state.selected);
            });
			this.setState({error: null});
		}
	}

    handleChange(key, e) {
        const d = this.state.data;
        d[key] = e.target.value;
        this.setState({data: d});
    }

    render() {
        return (
            <div>

                <nav className="nav nav-pills nav-justified">
					<a className="nav-item nav-link" href="/">Busqueda</a>
					<a className="nav-item nav-link active" href="/ranking">Ranking</a>
				</nav>
                
                <div className="pad-25 ml-0 mt-4" style={{height: "100%", position: "relative"}}>
					<div className="container-fluid">
						<div className="row mt-4">
							<div className="col-12" style={(this.state.status === false) ? {display: "block"} : {display: "none"}}>
								{this.state.response && <h3>Posibles resultados</h3>}
					    			<ul className="list-group mt-4">
									    {
										this.state.response && this.state.response.map((item, key) => (
											<li className="list-group-item" key={item.id}>
		    			    					<span><b>Nº</b> {key} - <b>Titulo: </b>{ item.titulo } - <b>Veces buscado:</b> { item.timesVisited }</span>
					    						<button type="button" className="btn btn-info float-right"
													onClick={() => this.detailedSubrank(item.id)}>Ver
				    							</button>
			    							</li>
		    								))
	    								}
									</ul>
							</div>
                            <div className="col-12" style={(this.state.status === true) ? {display: "block"} : {display: "none"}}>
                            
                                {this.state.selected && <h3>Tags mas utilizados</h3>}
                                <ul className="list-group mt-4">
									{
									this.state.selected && this.state.selected.map((item, key) => (
										<li className="list-group-item" key={key}>
		    			    				<span><b>Nº</b> {key} - <b>Tag: </b>{ item.tag } - <b>Veces buscado:</b> { item.count }</span>
			    						</li>
		    							))
                                    }
                                    <button type="button" className="col-4 btn btn-info float-right mt-4"
										onClick={() => this.backButton()}>Atras
									</button>
								</ul>
						    </div>
                        </div>
					</div>
				</div>       
            </div>
        )
    }
}

export default Ranking;