import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const DATA = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    }¸
];

const Item = ({ title }) => (
    <View style={{ flex: 1, padding: 20 }}>
        <Text>{title}</Text>
    </View>
);

const App = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    );
};

export default App;
