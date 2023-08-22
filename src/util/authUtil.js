// Interface & types

export const authHeader = () => {
  const token = JSON.parse(localStorage.getItem('token') ?? 'null');
  // return authorization header with jwt token

  return {
    Authorization: token,
  };
};
