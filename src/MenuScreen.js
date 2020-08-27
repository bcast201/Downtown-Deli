import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Menu extends Component {
    render() {
        return(
            <View>
                <Text style={styles.container}>
                    Menu
                </Text>
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default Menu