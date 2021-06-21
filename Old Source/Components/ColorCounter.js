import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
            <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
        </View>
    )
}

export default ColorCounter

const styles = StyleSheet.create({})
