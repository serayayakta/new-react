import React from 'react';
import SimpleDropdownSelect from '../components/SimpleDropdownSelect';

const DropdownPage = () => (
    <div className="container">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Dropdown Options</h5>
                <h6 className="card-subtitle mb-2 text-muted">Check each one</h6>
                <div className="row">
                    <div className="col-md-4">
                        <SimpleDropdownSelect />
                    </div>
                    <div className="col-md-4">
                        <SimpleDropdownSelect />
                    </div>
                    <div className="col-md-4">
                        <SimpleDropdownSelect />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default DropdownPage