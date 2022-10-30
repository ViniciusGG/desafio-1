import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

import { Task } from '../../components/task';
import { useState } from "react";

export function Home() {

  const [task, setTasks] = useState<string[]>([]);

  const [taskCompleted, setTaskCompleted] = useState<string[]>([]);

  const [taskName, setTaskName] = useState('');

  function handleTaskAdd() {
    if (taskName.trim() === '') {
      return Alert.alert("Campo Vazio", "Por favor, digite o nome da tarefa");
      
    }
    if (task.includes(taskName)) {
      return Alert.alert("Tarefa existe", "Já existe uma tarefa com esse nome");
    }
    setTasks(prevState => [...prevState, taskName]);
    setTaskName('');

  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover tarefa", `Tem certeza que deseja remover ?`, [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => setTasks(prevState => prevState.filter(job => job !== name))
      }
    ])
  }

  function handleTaskCheck(name: string) {
    if (taskCompleted.includes(name)) {
      setTaskCompleted(prevState => prevState.filter(job => job !== name))
    } else {
      setTaskCompleted(prevState => [...prevState, name]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Image style={styles.image} source={require('../../../Logo.png')} />

      </View>
      <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#999"
            onChangeText={setTaskName}
            value={taskName}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Text style={styles.buttonText}>
              <Image source={require('../../../plus.png')} />
            </Text>
          </TouchableOpacity>
        </View>

      <View style={styles.containerBottom}>

        <View style={styles.infoTask}>
          <Text style={styles.create}>
            Criadas           
          </Text>
          <Text style={styles.createNumber}>            
                {task.length}
          </Text>
          <Text style={styles.complete}>
          Concluidas
          </Text>
          <Text style={styles.taskCompleted}>            
           {taskCompleted.length}
          </Text>
        </View>

        <FlatList
          data={task}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              name={item}
              onRemove={() => handleTaskRemove(item)}
              onCheck={() => handleTaskCheck(item)}
              />
          )}
          ListEmptyComponent={() => (
            <View style={styles.empty}>
              <Image style={styles.clipboard} source={require('../../../Clipboard.png')} />
              <Text style={styles.listEmptyTitleText}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptySubTitleText}>
                Crie tarefas e organize seus itens a fazer
              </Text>

            </View>
          )}
        />
      </View>
    </View>
  );
}
