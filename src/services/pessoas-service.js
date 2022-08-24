import axios from "axios";

export const getAllColaborators = async () => {
  const result = await axios.get("http://localhost:3000/pessoas");
  return result.data;
};

export const createColaborator = async (collaborator) => {
  const result = await axios.post(
    "http://localhost:3000/pessoas",
    collaborator
  );
  return result.data;
};
