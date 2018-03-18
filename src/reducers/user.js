const user = (state, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      return { ...payload, isAuthenticated: true };
    case 'LOGOUT':
      return { isAuthenticated: false };
    default:
      return { isAuthenticated: false };
  }
};

export default user;
