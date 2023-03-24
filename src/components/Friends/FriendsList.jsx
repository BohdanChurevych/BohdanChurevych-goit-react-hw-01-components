import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import { List } from './Friends.styled';

const FriendList = ({ friends }) => {
  return (
    <>
      <List>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </List>
    </>
  );
};

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default FriendList;