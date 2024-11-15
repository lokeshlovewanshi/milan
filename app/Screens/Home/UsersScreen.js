import { FlatList, View } from "react-native";
import PullToRefreshWrapper from "../../common/PullToRefreshWrapper";
import { useContext } from "react";
import { UserListContext } from "../../store/Context";
import UserList from "./UserList";
import { Text } from "react-native-paper";

const Header = () => {
  return (
    <View>
      <Text>header user</Text>
    </View>
  );
};
const UsersScreen = () => {
  const { users } = useContext(UserListContext);

  const handleRefresh = () => {
    console.log("working............");
  };

  const openDetailScreen = () => {};
  return (
    <PullToRefreshWrapper onRefresh={handleRefresh}>
      <View>
        <Header />
        <UserList users={users} openDetailScreen={openDetailScreen} />
      </View>
    </PullToRefreshWrapper>
  );
};
