import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { Home, MessageCircle, User, MapPin } from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#030014',
          borderTopWidth: 1,
          borderTopColor: 'rgba(255,255,255,0.1)',
          height: 85,
          paddingTop: 10,
        },
        tabBarActiveTintColor: '#FFD700', // Gold
        tabBarInactiveTintColor: 'rgba(255,255,255,0.4)',
        tabBarShowLabel: false, // Clean look
        tabBarBackground: () => (
            <View style={{ flex: 1, backgroundColor: '#020010' }} />
        )
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Home color={color} size={26} />,
        }}
      />
       <Tabs.Screen
        name="verify"
        options={{
            tabBarIcon: ({ color }) => <MapPin color={color} size={26} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color }) => <MessageCircle color={color} size={26} />,
          tabBarBadge: 2, // Mock notification
          tabBarBadgeStyle: { backgroundColor: '#FFD700', color: 'black' }
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <User color={color} size={26} />,
        }}
      />
    </Tabs>
  );
}
