import React, { Component } from 'react';

export class StringsFormCmp extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="card">
                        <h5 className="card-header">Featured</h5>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <a className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
