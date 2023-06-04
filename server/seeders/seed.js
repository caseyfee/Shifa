const db = require('../config/connection');
const { Patient, MedicalHistory } = require('../models');
const patientSeeds = require('./patientSeeds.json');
const medicalHistorySeeds = require('./medicalHistorySeeds.json');

db.once('open', async () => {
  try {
    await MedicalHistory.deleteMany({});
    await Patient.deleteMany({});

    await Patient.create(patientSeeds);

    for (let i = 0; i < medicalHistorySeeds.length; i++) {
      const { _id, medicalHistoryAuthor } = await MedicalHistory.create(medicalHistorySeeds[i]);
      const patient = await Patient.findOneAndUpdate(
        { patientname: medicalHistoryAuthor },
        {
          $addToSet: {
            medicalHistorys: _id,
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
