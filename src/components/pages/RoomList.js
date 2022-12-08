import RoomCard from "./RoomCard";

function RoomList({ rooms }) {
  return (
    <div className="cards-container"  >
      {rooms.map((room) => {
        return <RoomCard key={room.id} room={room} />;
      })}
    </div>
  );
}
// style={{display: 'flex', flexDirection: 'row'}}
export default RoomList;