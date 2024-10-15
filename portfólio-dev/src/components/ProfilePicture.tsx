export function ProfilePicture() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-32 w-32 rounded-full border-4 border-main-red overflow-hidden">
        <img
          className="h-full w-full object-cover border-4 border-base-gray-100 rounded-full"
          src="/src/assets/Nikolas.png"
          alt="Profile"
        ></img>
      </div>
      <img className="absolute pl-20 pt-20" src="src/assets/Code.png" />
    </div>
  );
}
