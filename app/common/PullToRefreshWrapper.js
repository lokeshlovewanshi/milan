import React, { useCallback, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

const PullToRefreshWrapper = ({ onRefresh, children }) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
  }, [onRefresh]);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      {children}
    </ScrollView>
  );
};

export default PullToRefreshWrapper;
