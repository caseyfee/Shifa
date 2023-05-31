const db = require('../config/connection');
const { Doctor, Patient } = require('../models');
const doctorSeeds = require ("./doctorSeeds.json");
const patientSeeds = require ("./patientSeeds.json");



db.once('open', async () => {
  try {
    await Patient.deleteMany({});
    await Doctor.deleteMany({});

    await Doctor.create(doctorSeeds);

    for (let i = 0; i < patientSeeds.length; i++) {
      const { _id, patientAuthor } = await Patient.create(patientSeeds[i]);
      const doctor = await Doctor.findOneAndUpdate(
        { username: patientAuthor },
        {
          $addToSet: {
            patients: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
