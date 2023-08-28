import UserService, { CreateUserPayload } from "../../services/user";

const queries = {
  getUserToken: async(_: any, payload: {email: string, password: string}) => {
    const token = await UserService.getUserToken({
      email: payload.email,
      password: payload.password
    })
    return token;
  },
  getCurrentLoggeedInUser: async() => {
    throw new Error("I dont know who are you?");
  },

};

const mutations= {
    createUser: async(_: any, payload:CreateUserPayload) => {
      const res = await UserService.createUser(payload);
      return res.id;
    },
};

export const resolvers = {queries, mutations};
