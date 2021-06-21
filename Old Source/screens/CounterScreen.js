import React, { useReducer } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE': return { ...state, counter: state.counter + action.payload }

        case 'DECREASE': return { ...state, counter: state.counter + action.payload }

        default: return state
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({ type: 'INCREASE', payload: 1 })
            }} />
            <Button title="Decrease" onPress={() => {
                dispatch({ type: 'DECREASE', payload: -1 })
            }} />
            <Text>Current Count:{state.counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen
