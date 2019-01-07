import React, {Component} from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
			   keyword: ""
			},
			status: null,
			response: null,
			selected: null,
			error: null
		}
	}

	handleSearch() {
		let data = {
			keyword: this.state.data.keyword
		}
		this.fetchInfo(data);
	}

	async fetchInfo(data) {
		const response = await fetch('http://localhost:8080/search', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const r = await response.json();

		if (Array.isArray(r) && r.length === 0) {
			this.setState({response: null});
			this.setState({error: "No se encontraron resultados. Intente nuevamente"});
		} else {
			this.setState({response: r});
			this.setState({error: null});
		}
	}

	async detailedView(id){
		this.setState({status: 'selected'});

		let data = {
			tagUsed: this.state.data.keyword,
			id: id
		}
		const response = await fetch('http://localhost:8080/details', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const r = await response.json();

		if (r) {
			this.setState({selected: r[0]});
			this.setState({error: null});
		}
	}

	backButton(){
		this.setState({status: null});
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
					<a className="nav-item nav-link active" href="/">Busqueda</a>
					<a className="nav-item nav-link" href="/ranking">Ranking</a>
				</nav>
						
						<div className="pad-25 ml-0 mt-4" style={{height: "100%", position: "relative"}}>
							<div className="container-fluid">
								<div className="row">
									<div className="col-12">
										<form>
											<div className="col-9 centered-items">
												<div className="form-row">
													<div className="form-group col-md-6">
														<label htmlFor="name"
															className="text-dark mb-2 float-left">Keyword <small
															className="text-danger">*</small></label>
														<input type="text" className="form-control br-5" id="keyword" 
															required
															onChange={(e) => this.handleChange("keyword", e)}/>
														<button type="button" className="btn btn-primary mt-4"
															style={{borderRadius: 5}}
															onClick={() => this.handleSearch()}>Buscar
														</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								<hr/>
								<div className="row mt-4">
									<div className="col-12" style={(this.state.status === null) ? {display: "block"} : {display: "none"}}>
										{ this.state.response && <h3>Posibles resultados</h3>}
										<ul className="list-group mt-4">
											{
												this.state.response !== null && this.state.response.map((item, key) => (
													<li className="list-group-item" key={item.id}>
														<span>{ item.titulo }</span>
														<button type="button" className="btn btn-info float-right"
															onClick={() => this.detailedView(item.id)}>Ver
														</button>
													</li>
												))
											}
											{
												this.state.error && <h3>{this.state.error}</h3>
											}
										</ul>
									</div>
									<div className="col-12" style={(this.state.status !== null) ? {display: "block"} : {display: "none"}}>
										{	
											this.state.selected && 
											<div className="col-6">
												<div className="card mb-3">
													<img className="card-img-top" src={this.state.selected.imagen} alt={this.state.selected.titulo}/>
													<div className="card-body">
														<h5 className="card-title">{this.state.selected.titulo}</h5>
														<p className="card-text">{this.state.selected.descripcion}</p>
														<button type="button" className="btn btn-info float-right mb-4"
															onClick={() => this.backButton()}>Atras
														</button>
													</div>
												</div>
											</div>
										}
									</div>
								</div>
							</div>
						</div>
			</div>
		)
	}
}

export default Search;