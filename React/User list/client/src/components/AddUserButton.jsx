export default function AddUserButton({ onCreateClick }) {
  return (
    <button className="btn-add btn" onClick={onCreateClick}>
      Add new user
    </button>
  );
}
