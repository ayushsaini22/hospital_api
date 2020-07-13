const User = require('../../../models/user');
const Patient = require('../../../models/patient');
const Report = require('../../../models/report');

//Register A Patient
module.exports.register = async (req, res) => {
    const patient  = await Patient.findOne({phone : req.body.phone});
    if(!patient){
        Patient.create(req.body);
        return res.status(200).json({
            message : "PAtient Created"
        });
    }else{
        return res.status(200).json({
            message : "Patient Already Exists"
        });
    }
}
//Create Report
module.exports.createReport = (req, res) => {
    const patientID = req.params.id;
    Patient.findById( patientID,(err,patient)=>{

        if(err)
        {
            console.log(`Error in finding user to create report ${err}`);
            return res.status(500).json({
                'status':'Internal Server Error'
            });
        }

        if(patient==null)
        {
            return res.status(404).json({
                'status': 'No patient with this phone number.'
            });
        }

        let data = {doctor:req.user._id,
                    patient:patient._id,
                    status:req.body.status};

        Report.create(data,(err,report)=>{

            if(err)
            {
                console.log(`Error in creating report ${err}`);
                return res.status(500).json({
                    message :'Internal Server Error'
                });
            }

            return res.status(200).json({
                message: 'Report Created',
                report: report
            });
        });

    });
}
//Get All Reports of a Patient
module.exports.allReports = (req, res) => {
    const patientID = req.params.id;
    Patient.findById(patientID,(err,patient)=>{

        if(err)
        {
            console.log(`Error in finding user for all reports ${err}`);
            return res.status(500).json({
                'status':'Internal Server Error'
            });
        }

        Report.find({patient : patient._id},(err,reports)=>{
        
            if(err)
            {
                console.log(`Error in finding reports of user ${err}`);
                return res.status(500).json({
                    'status':'Internal Server Error'
                });
            }

            return res.status(200).json({reports});
        });
    });

}
