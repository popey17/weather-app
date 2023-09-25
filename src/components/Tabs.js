import React from 'react'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator()
const Tabs = () => {
	return (
		<Tab.Navigator
		screenOptions={{
			tabBarActiveTintColor: 'tomato',
			tabBarInactiveTintColor: 'grey',
			headerStyle: {
				backgroundColor: 'lightblue'
			},
			tabBarStyle: {
				backgroundColor: 'lightblue'
			},
			headerTitleStyle: {
				fontWeight: 'bold',
				fontSize: 25,
			}
		}}
	>
		<Tab.Screen
			name={'Current'}
			component={CurrentWeather}
			options={{
				tabBarIcon: ({ focused }) => (
					<Feather
						name={'droplet'}
						size={25}
						color={focused ? 'tomato' : 'black'}
					/>
				)
			}}
		/>
		<Tab.Screen
			name={'Upcoming'}
			component={UpcomingWeather}
			options={{
				tabBarIcon: ({ focused }) => (
					<Feather
						name={'clock'}
						size={25}
						color={focused ? 'tomato' : 'black'}
					/>
				)
			}}
		/>
		<Tab.Screen
			name={'City'}
			component={City}
			options={{
				tabBarIcon: ({ focused }) => (
					<Feather
						name={'home'}
						size={25}
						color={focused ? 'tomato' : 'black'}
					/>
				)
			}}
		/>
	</Tab.Navigator>
	)
}

export default Tabs