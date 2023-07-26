export const handleSaveError = (error, data, next) => {
  error.status = 400;
  next();
};

export function validateAtUpdate(next) {
  this.getOptions.runValidators = true;
  next();
}
