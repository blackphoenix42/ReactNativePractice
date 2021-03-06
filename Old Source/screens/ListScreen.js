import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 55 },
        { name: 'Friend #2', age: 20 },
        { name: 'Friend #3', age: 45 },
        { name: 'Friend #4', age: 43 },
        { name: 'Friend #5', age: 21 },
        { name: 'Friend #6', age: 12 },
        { name: 'Friend #7', age: 40 },
        { name: 'Friend #8', age: 63 },
        { name: 'Friend #9', age: 21 },
    ]

    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                // element === {item:{name:'Friend #1'},index:0}
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen