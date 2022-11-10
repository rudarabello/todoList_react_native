import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet,
  Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1
        }}keyboardShouldPersistTaps='handled'
      >
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        
      </View>
      </ScrollView>
      <KeyboardAvoidingView 
        behavior={Platform.OS  === "Android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  
  
});