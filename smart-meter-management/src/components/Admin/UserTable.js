import { deleteUser, getAllUsers } from '../../services/adminApi';
import UserTableRow from './UserTableRow';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    try {
      const res = await deleteUser(id);

      if (res.status === 200) {
        setUsers(users.filter((user) => user._id !== id));
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      setLoading(true);
      try {
        const res = await getAllUsers();
        console.log(res.data.user);
        setUsers(res.data.user);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
        setLoading(false);
      }
    };
    fetchAllUsers();
  }, []);

  if (loading) {
    return (
      <div className='grow flex justify-center items-center'>
        <p>Loading...please wait!!</p>
      </div>
    );
  }

  return (
    <div className='basis-4/5 mt-8'>
      <div className='flex justify-between  my-4'>
        <p className='font-bold bg-orange-800 rounded-sm p-1 px-4 w-fit '>
          Device List
        </p>

        <Link
          to='/addUser'
          className='px-4 py-2 rounded-md bg-yellow-600 text-white'
        >
          Add user
        </Link>
      </div>

      <table className='table-auto w-full bg-green-100'>
        <thead className='border border-black bg-orange-800 border-collapse'>
          <tr className='text-center'>
            <th className='p-2 border border-black'>ID</th>
            <th className='p-2 border border-black'>Username</th>
            <th className='p-2 border border-black'>Email</th>
            <th className='p-2 border border-black'>Delete</th>
          </tr>
        </thead>
        <tbody className='font-bold'>
          {users.map((user, i) => (
            <UserTableRow
              user={user}
              i={i}
              key={user._id}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
