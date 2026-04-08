const wait = (value) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(value), 300);
  });

export const authAPI = {
  signin: async ({ email }) =>
    wait({
      data: {
        token: 'mock-jwt-token',
        user: {
          id: email || 'demo-user',
          role: 'USER',
        },
      },
    }),
  signup: async ({ username }) =>
    wait({
      data: {
        status: 'success',
        message: `Account created for ${username || 'user'}.`,
      },
    }),
};

export const userAPI = {
  getAll: async () =>
    wait({
      data: {
        content: [],
        last: true,
      },
    }),
};
