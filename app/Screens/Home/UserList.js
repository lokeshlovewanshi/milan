import { FlatList, Pressable } from "react-native";
import { Text } from "react-native-paper";

const UserCard = ({ user, openDetailScreen }) => {
  return (
    <Pressable onPress={openDetailScreen}>
      <View>
        <Text>user 1</Text>
      </View>
    </Pressable>
  );
};
const UserList = ({ users, openDetailScreen }) => {
  return (
    <FlatList
      data={users}
      keyExtractor={(listing) => listing.id.toString()}
      renderItem={({ item }) => (
        <UserCard user={item} openDetailScreen={openDetailScreen} />
      )}
    />
  );
};

export default UserList;
