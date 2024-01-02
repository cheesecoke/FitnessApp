import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        fetch("http://127.0.0.1:5000/register", {
            // Replace with your Flask API URL
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                Alert.alert(
                    "Registration Successful",
                    "You can now log in with your credentials."
                );
                navigation.navigate("Login");
            })
            .catch((error) => {
                Alert.alert(
                    "Registration Failed",
                    "An error occurred during registration."
                );
                console.error("Error:", error);
            });
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Pressable style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
    },
});

export default RegisterScreen;
