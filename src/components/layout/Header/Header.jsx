import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import UserActions from "./UserActions";

export default function Header() {
  return (
    <header className="header">
      <NavBar /> 
      <SearchBar />
      <UserActions /> 
    </header>
  );
}
