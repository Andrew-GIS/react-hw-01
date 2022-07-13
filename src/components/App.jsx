import Profile from "./profile/profile";
import user from "../data/user.json";
import Statistic from "./statistic/statistics";
import statisticData from "../data/data.json";
import FriendsList from "./friends/friendList";
import friends from "../data/friends.json";
import TransactionTable from "./transaction/transaction";
import transactions from "../data/transactions.json";

export const App = () => {
  return (
    <div>
        <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
        <Statistic title="Upload stats" stats={statisticData} />
        <FriendsList friends={friends} />
        <TransactionTable items={transactions}/>
    </div>
  );
};
