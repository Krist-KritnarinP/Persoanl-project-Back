export const pathNotfound = (req, res) => {
  res.status(404).json({
    status: "Error",
    message: "Path not found",
  });
};
