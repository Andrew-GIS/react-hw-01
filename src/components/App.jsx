import Profile from "./profile";
import user from "./data/user.json";
import Statistic from "./statistics";
import statisticData from "./data/data.json"
import FriendsList from "./friendList";
import friends from "./data/friends.json";

export const App = () => {
  return (
    <div>
      <>
        <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      </>
      <>
        <Statistic title="Upload stats" stats={statisticData} />
      </>
      <>
        <FriendsList friends={friends} />
      </>
    </div>
  );
};
