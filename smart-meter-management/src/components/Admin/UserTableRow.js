const UserTableRow = ({ user, i, onDelete }) => {
  return (
    <tr className='text-center'>
      <td className='p-1 border border-black '>
        <div className='flex items-center justify-center gap-2'>{i + 1}</div>
      </td>

      <td className='p-1 border border-black uppercase'>{user.username}</td>
      <td className='p-1 border border-black uppercase'>{user.email}</td>
      <td className='p-1 border border-black'>
        <button
          className='p-2 px-8 bg-red-600 text-white'
          onClick={() => onDelete(user._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default UserTableRow;
