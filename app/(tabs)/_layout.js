import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './../../constants/Colors'


export default function _layout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor:Colors.PRIMARY,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor:Colors.SOFTCREAM,
                borderTopColor: 'transparent',
                elevation: 0
            }
        }
    }
    
    >
        <Tabs.Screen name='home'
            options={{
                tabBarLabel: 'Home',
                headerShown: false,
                tabBarIcon: ({color})=><FontAwesome name="home" size={24} color={color} />
                
            }}
        />
        <Tabs.Screen name='bookings'
             options={{
                tabBarLabel: 'Bookings',
                headerShown: false,
                tabBarIcon: ({color})=><Ionicons name="calendar" size={24} color={color} />
                
            }}          
        
        />        
        <Tabs.Screen name='inbox'
            options={{
                tabBarLabel: 'Inbox',
                headerShown: false,
                tabBarIcon: ({color})=><Ionicons name="chatbubble" size={24} color={color} />
                
            }}           
        />
        <Tabs.Screen name='profile' 
            options={{
                tabBarLabel: 'Profile',
                headerShown: false,
                tabBarIcon: ({color})=><Ionicons name="people-circle" size={24} color={color} />
                
            }} 
        />
  </Tabs>
  )
}