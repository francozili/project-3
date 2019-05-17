import React, { Component } from 'react';

export default class CreateDoctorsList extends Component {

    constructor(props) {
        super(props);

        this.onChangeDoctorsName = this.onChangeDoctorsName.bind(this);
        this.onChangeDoctorsPicture = this.onChangeDoctorsPicture.bind(this);
        this.onChangeDoctorsDescription = this.onChangeDoctorsDescription.bind(this);
        this.onChangeDoctorsInformation = this.onChangeDoctorsInformation.bind(this);
        this.onChangeDoctorsAvailability = this.onChangeDoctorsAvailability.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Doctors_name: "",
            Doctors_picture: "",
            Doctors_description: "",
            Doctors_information: "",
            Doctors_availability: "",
        }
    }
    onChangeDoctorsName(e) {
        this.setState({
            Doctors_name: e.target.value
        });
    }

    onChangeDoctorsPicture(e) {
        this.setState({
            Doctors_picture: e.target.value
        });
    }

    onChangeDoctorsDescription(e) {
        this.setState({
            Doctors_description: e.target.value
        });
    }

    onChangeDoctorsInformation(e) {
        this.setState({
            Doctors_information: e.target.value
        });
    }

    onChangeDoctorsAvailability(e) {
        this.setState({
            Doctors_availability: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Doctors Description: ${this.state.Doctors_description}`);
        console.log(`Doctors Name: ${this.state.Doctors_name}`);
        console.log(`Doctors Information: ${this.state.Doctors_information}`);
        console.log(`Doctors Picture: ${this.state.Doctors_picture}`);
        console.log(`Doctors Availability: ${this.state.Doctors_availability}`)
        this.state = ({
            Doctors_name: "",
            Doctors_picture: "",
            Doctors_description: "",
            Doctors_information: "",
            Doctors_availability: "",
        });
    }
    render() {
        return (
            <div style={{ marginTop: 25 }}>
                <h3>Create New Doctor</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Doctors_name}
                            onChange={this.onChangeDoctorsName} />

                        <label>Picture</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Doctors_picture}
                            onChange={this.onChangeDoctorsPicture} />

                        <label>Description</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Doctors_description}
                            onChange={this.onChangeDoctorsDescription} />

                        <label>Information</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Doctors_information}
                            onChange={this.onChangeDoctorsInformation} />

                        <label>Availability</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Doctors_availability}
                            onChange={this.onChangeDoctorsAvailability} />
                    </div>
                </form>
            </div >
        )
    }
}