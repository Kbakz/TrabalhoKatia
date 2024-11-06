import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons';
import Inicio from '../screens/Inicio';
import Login from '../screens/Login';
import Produto from '../screens/Produto';
import Usuario from '../screens/Usuario';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="Login"
                component={Login}
                options= {{
                    tabBarIcon: ({color,size})=> <Feather name="log-in" color={color} size={size} />,
                    tabBarLabel: 'Login'
                }}
            />

        <Tab.Screen
                name="Inicio"
                component={Inicio}
                options= {{
                    tabBarIcon: ({color,size})=> <Feather name="home" color={color} size={size} />,
                    tabBarLabel: 'Inicio'
                }}
            />

        <Tab.Screen
                name="Usuário"
                component={Usuario}
                options= {{
                    tabBarIcon: ({color,size})=> <Feather name="user" color={color} size={size} />,
                    tabBarLabel: 'Usuário'
                }}
            />

        <Tab.Screen
                name="Produto"
                component={Produto}
                options= {{
                    tabBarIcon: ({color,size})=> <Feather name="shopping-bag" color={color} size={size} />,
                    tabBarLabel: 'Produto'
                }}
            />
        </Tab.Navigator>
    )
}