const getOnePerson = (req, res) => {
  const {
    params: { user_id },
  } = req;

  if (!user_id) {
    return;
  }

  // const personDetails
};

const createPerson = (req, res) => {
  const { body } = req;

  const newPerson = {
    name: body.name,
  };
};

module.exports = {
  createPerson,
  getOnePerson,
};
