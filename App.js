/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import { FlatList, View, Text, SafeAreaView } from "react-native";

const items = [{ title: "Foo" }, { title: "Foo" }, { title: "Foo" }];

export default class App extends Component {
  renderItem = ({ item }) => {
    console.log(item);
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  keyExtractor = (item, index) => `row-${index}`;

  listHeader = () => (
    <View>
      <Text>Header</Text>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={items}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ListHeaderComponent={this.listHeader}
        />
      </SafeAreaView>
    );
  }
}
