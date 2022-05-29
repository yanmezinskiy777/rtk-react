import { useEffect } from "react";
import { fetchUsers, IUser } from "../user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

const UserView = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => {
    return {
      users: state.user.data,
      loading: state.user.loading,
      error: state.user.error,
    };
  });
  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, []);
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>UserView</h1>
      <ul>
        {users?.map((user: IUser) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserView;
