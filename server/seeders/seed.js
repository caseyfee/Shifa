const db = require('../config/connection');
const { User, MedicalHistory } = require('../models');
const userSeeds = require('./userSeeds.json');
const medicalHistorySeeds = require('./medicalHistorySeeds.json');

db.once('open', async () => {
  try {
    await MedicalHistory.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < medicalHistorySeeds.length; i++) {
      const { _id, medicalHistoryAuthor } = await MedicalHistory.create(medicalHistorySeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: medicalHistoryAuthor },
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
