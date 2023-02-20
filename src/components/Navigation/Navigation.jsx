import StyledLink, { Header } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Header>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="movies">Movies</StyledLink>
    </Header>
  );
};
