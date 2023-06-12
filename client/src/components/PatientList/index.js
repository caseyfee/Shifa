import React from 'react';


const PatientList = ({ patients, title }) => {
    // if (!patients.length) {
    //     return <h3> No Patients Yet </h3>;
    // }

    return (
        <div>
            <h3>{title} </h3>
            {patients &&
                patients.map((patient) => (
                    <div key={patient._id} className="card mb-3" >
                        <h4 className="card-header bg-primary text-light p-2 m-0" >
                            {patient.firstName} < br />
                            <span style={{ fontSize: '1rem' }}>
                                Help out and meet with {patient.firstName} {patient.lastName}
                            </span>
                        </h4>
                        < div className="card-body bg-light p-2 justify-center" >
                            <span style={{ fontSize: '1rem' }}>
                                Email: {patient.email}
                                </span>
                                <button type="button" class="ml-5 btn btn-outline-dark btn-sm">See Medical History</button>
                                {/* <Link
                                className="btn btn-primary btn-block btn-squared"
                                to={`/medicalHistorys/${medicalHistory._id}`}
                                >
                                Join the discussion on this medicalHistory.
                                </Link> */}
                           
                        </div>

                    </div>
                ))}
        </div>

    );
};

export default PatientList;
