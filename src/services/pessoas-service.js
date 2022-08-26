import axios from "axios";

export const getAllColaborators = async () => {
  const result = await axios.get("http://localhost:3000/pessoas");
  return result.data;
};

export const createColaborator = async (collaborators) => {
  const result = await axios.post(
    "http://localhost:3000/pessoas",
    collaborators
  );

  return result.data;
};
