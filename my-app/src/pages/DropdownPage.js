import React from 'react';
import SimpleDropdownSelect from '../components/SimpleDropdownSelect';

const techCompanies = [
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
    { label: "Tesla", value: 4 },
    { label: "Amazon", value: 5 },
    { label: "Alphabet", value: 6 },
];

const jobDescriptions = [
    { label: "Software Engineer", value: 1 },
    { label: "Data Analyst", value: 2 },
    { label: "Business Analyst", value: 3 },
    { label: "Product Manager", value: 4 },
    { label: "UX Designer", value: 5 },
    { label: "Cloud Architect", value: 6 },
];

const locations = [
    { label: "Berlin", value: 1 },
    { label: "İstanbul", value: 2 },
    { label: "Seoul", value: 3 },
    { label: "Amsterdam", value: 4 },
];

const DropdownPage = () => (
    <div className="container">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Dropdown Options</h5>
                <h6 className="card-subtitle mb-2 text-muted">Check each one</h6>
                <div className="row">
                    <div className="col-md-4">
                        <SimpleDropdownSelect data={techCompanies}/>
                    </div>
                    <div className="col-md-4">
                        <SimpleDropdownSelect data={jobDescriptions}/>
                    </div>
                    <div className="col-md-4">
                        <SimpleDropdownSelect data={locations}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default DropdownPage