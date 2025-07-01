import { useDispatch } from "react-redux";
import Button from "../components/ui/Button";
import { removeAuth } from "../redux/reducers/AuthReducer";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(removeAuth());
  };
  return (
    <main className="w-full h-full bg-amber-200">
      <Button title={"Logout"} color={"orange"} onClick={handleLogout} />
    </main>
  );
};

export default HomeScreen;
