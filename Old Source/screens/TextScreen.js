import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
    const [password, setPassword] = useState('')
    return (
        <View>
            <Text>Enter password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {
                password.length <= 5 ? <Text>Password must be greater than 5 characters.</Text> : null
            }
        </View>
    )
}

export default TextScreen

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})
