import {createStackNavigator} from 'react-navigation';

import Todos from './screens/Todos';
import TodosCreate from './screens/TodosCreate';

const App = createStackNavigator({
  Todos: {
    screen: Todos,
    navigationOptions: {
      headerTitle: 'Catatan Harian',
    },
  },
  TodosCreate: {
    screen: TodosCreate,
    navigationOptions: {
      headerTitle: 'Buat Catatan Harian',
    },
  }
});

export default App;
{/*import  React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, Left,
  Right, List, ListItem,
  CheckBox, Fab, Icon
} from 'native-base';
import {FlatList} from 'react-native';

import Variaitem from './components/Variaitem';

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      count: 0,
      todos: []
    };
  }

  componentWillMount(){
    /*console.log('componentWillMount');
    this.handleIncTodo()
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  _keyExtractor = (item, index) => item.id;

  handleIncTodo(){
    const count = this.state.count + 1;

    let todos = this.state.todos;
    todos.push({
      id: count,
      todo: "Not To Do #" + count
    });

    this.setState({
      todos,
      count
    });
  }

  render(){
    return(
      <Container>
        <Header>
          <Body>
            <Text>Not To Do List ({this.state.count})</Text>
          </Body>
        </Header>

        <Content>
          <List>
            <FlatList
              data={this.state.todos}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => <Variaitem todo={item}/>}
            />
            {/*this.todos.map((todo)=> <Variaitem todo={todo} key={todo.id}/> )}
          </List>
        </Content>

        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.handleIncTodo() }>
          <Icon name="add" />
        </Fab>

      </Container>
    );
  }
}
*/}
