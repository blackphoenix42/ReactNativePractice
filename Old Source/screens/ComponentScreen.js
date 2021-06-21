import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComponentScreen = () => {
    const name = "Phoenix"
    return (
        <View>
            <Text style={styles.textStyle}>ThisGetting started with React Native!</Text>
            <Text style={styles.subHeaderStyle}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ComponentScreen