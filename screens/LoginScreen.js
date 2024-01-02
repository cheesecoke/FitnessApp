import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Alert,
} from "react-native";

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // TODO: Improve UI error for login
    const handleLogin = () => {
        fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then((response) => {
                console.log({ response });
                if (!response.ok) {
                    throw new Error(
                        "Network response was not ok " + response.statusText
                    );
                }

                return response.json();
            })
            .then((data) => {
                if (data.message === "Login successful") {
                    navigation.navigate("MainScreen");
                } else {
                    Alert.alert("Login Failed", data.message);
                }
            })
            .catch((error) => {
                Alert.alert("Login Failed", "An error occurred during login.");
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
            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate("Register")}
                style={styles.registerButton}
            >
                <Text style={styles.registerButtonText}>
                    Don't have an account? Register
                </Text>
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
    registerButton: {
        marginTop: 15,
    },
    registerButtonText: {
        color: "blue",
    },
});

export default LoginScreen;
