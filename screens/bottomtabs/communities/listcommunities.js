import React from 'react';
import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';
import {calHeight, calWidth} from '../../../caldimens';
import PostCommunity from './postCommunity';

const ListCommunities = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.communityList}
        renderItem={({item}) => (
          <PostCommunity item={item} navigation={props.navigation} />
        )}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={props.refreshing}
            onRefresh={props.onRefresh}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: calWidth(90),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: calHeight(12),
  },
});

export default ListCommunities;
