import { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Send, Sparkles } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export default function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Greetings. I am the Divine Agent. My purpose is to help you find a connection rooted in Christ. How is your heart today?",
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Mock AI Response
    setTimeout(() => {
        const aiMsg: Message = {
            id: (Date.now() + 1).toString(),
            text: "That is a profound reflection. Remember, 'Above all else, guard your heart, for everything you do flows from it.' (Proverbs 4:23). What ideally are you looking for in a partner to share this journey?",
            sender: 'agent',
            timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMsg]);
        setIsTyping(false);
    }, 2000);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [messages]);

  return (
    <View className="flex-1 bg-[#030014]">
        {/* Background Gradient */}
      <LinearGradient
        colors={['#030014', '#0f0529', '#030014']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      />

      <SafeAreaView className="flex-1" edges={['top']}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 pb-4 border-b border-white/5">
             <View className="flex-row items-center space-x-3">
                 <View className="w-10 h-10 rounded-full bg-white/10 items-center justify-center border border-white/20">
                     <Sparkles color="#FFD700" size={20} />
                 </View>
                 <View>
                     <Text className="text-white font-bold text-lg">Divine Agent</Text>
                     <Text className="text-cyan-400 text-xs">Always Active</Text>
                 </View>
             </View>
        </View>

        {/* Messages */}
        <ScrollView 
            ref={scrollViewRef}
            className="flex-1 px-4 pt-4"
            contentContainerStyle={{ paddingBottom: 20 }}
        >
            {messages.map((msg) => (
                <View 
                    key={msg.id} 
                    className={`mb-4 max-w-[80%] ${msg.sender === 'user' ? 'self-end' : 'self-start'}`}
                >
                    <View 
                        className={`p-4 rounded-2xl ${
                            msg.sender === 'user' 
                                ? 'bg-amber-500 rounded-tr-none' 
                                : 'bg-white/10 border border-white/10 rounded-tl-none'
                        }`}
                    >
                        <Text className={`text-[15px] leading-6 ${msg.sender === 'user' ? 'text-black font-medium' : 'text-white'}`}>
                            {msg.text}
                        </Text>
                    </View>
                    <Text className="text-white/20 text-[10px] mt-1 px-1">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Text>
                </View>
            ))}

            {isTyping && (
                <View className="self-start bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 mb-4 flex-row space-x-1 items-center h-12 w-16 justify-center">
                    <View className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
                    <View className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-75" />
                    <View className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-150" />
                </View>
            )}
        </ScrollView>

        {/* Input Area */}
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            keyboardVerticalOffset={ Platform.OS === 'ios' ? 90 : 0}
        >
            <View className="p-4 bg-[#020010] border-t border-white/10 flex-row items-center space-x-3">
                <View className="flex-1 bg-white/5 border border-white/10 rounded-full h-12 justify-center px-4">
                    <TextInput 
                        placeholder="Type your message..." 
                        placeholderTextColor="rgba(255,255,255,0.3)"
                        className="flex-1 text-white"
                        value={input}
                        onChangeText={setInput}
                        onSubmitEditing={sendMessage}
                    />
                </View>
                <TouchableOpacity 
                    onPress={sendMessage}
                    className="w-12 h-12 rounded-full bg-cyan-500 items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                    <Send color="white" size={20} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

      </SafeAreaView>
    </View>
  );
}
