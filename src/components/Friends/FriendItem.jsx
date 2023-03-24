import { Item, Offline, Online } from './Friends.styled';

const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      {isOnline ? <Offline></Offline> : <Online></Online>}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};

export default FriendItem;
