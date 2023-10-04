



const HospitalSelection = ({ formData, handleHospitalChange }) => {


    return (
        <div className="form-group">
            <label className="form-label" htmlFor="hospital">
                Hospital:
            </label>
            <div className="hospital-select-container">
                <select
                    className="hospital-select"
                    id="hospital"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleHospitalChange}
                    required
                >
                    <option value="" disabled selected>Select Hospital</option>
                    <option
                        value="LenoxHillHospital"
                    >
                        LENOX HILL HOSPITAL
                    </option>
                    <option
                        value="ColumbiaPresbyterianHospital"
                    >
                        COLUMBIA PRESBYTERIAN HOSPITAL
                    </option>
                    <option
                        value="BellevueHospitalCenter"
                    >
                        BELLEVUE HOSPITAL CENTER
                    </option>
                </select>
                <div className="hospital-select-icon">▼</div>
            </div>
        </div>
    )
}



export default HospitalSelection;