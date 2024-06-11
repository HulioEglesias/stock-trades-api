const {check, validationResult} = require('express-validator');
const checkValid = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({errors: errors.array()});
  next();
};

module.exports = [
  check('shares').isInt({min: 1, max: 100})
    .withMessage('Shares must be between 1 and 100!'),
  check('type').isIn(['buy', 'sell'])
    .withMessage('Type must be buy or sell!'),
  checkValid,
];