import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Mail, Lock, User } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    // TODO: Implement actual Supabase Auth here
    // const { error } = await supabase.auth.signUp({ email, password })
    
    setTimeout(() => {
        setLoading(false);
        // Mock Success -> Navigate to Onboarding or Home
        router.replace('/(tabs)'); 
    }, 1500);
  }

  return (
    <View className="flex-1 bg-[#030014]">
       <LinearGradient
        colors={['#030014', '#0f0529', '#030014']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      />
      
      <SafeAreaView className="flex-1 p-6">
        {/* Header */}
        <TouchableOpacity onPress={() => router.back()} className="mb-8 w-10 h-10 rounded-full bg-white/10 items-center justify-center">
            <ArrowLeft color="white" size={20} />
        </TouchableOpacity>

        <View className="flex-1 justify-center max-w-sm mx-auto w-full">
            <Text className="text-4xl font-bold text-white mb-2">Join the Fold</Text>
            <Text className="text-white/50 mb-10">Start your journey to a God-centered relationship.</Text>

             {/* Name Input */}
             <View className="bg-white/5 border border-white/10 rounded-2xl h-14 flex-row items-center px-4 mb-4">
                <User color="rgba(255,255,255,0.4)" size={20} />
                <TextInput 
                    placeholder="Full Name" 
                    placeholderTextColor="rgba(255,255,255,0.3)"
                    className="flex-1 ml-3 text-white font-medium"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            {/* Email Input */}
            <View className="bg-white/5 border border-white/10 rounded-2xl h-14 flex-row items-center px-4 mb-4">
                <Mail color="rgba(255,255,255,0.4)" size={20} />
                <TextInput 
                    placeholder="Email Address" 
                    placeholderTextColor="rgba(255,255,255,0.3)"
                    className="flex-1 ml-3 text-white font-medium"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            {/* Password Input */}
            <View className="bg-white/5 border border-white/10 rounded-2xl h-14 flex-row items-center px-4 mb-8">
                <Lock color="rgba(255,255,255,0.4)" size={20} />
                <TextInput 
                    placeholder="Password" 
                    placeholderTextColor="rgba(255,255,255,0.3)"
                    className="flex-1 ml-3 text-white font-medium"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity 
                onPress={signUpWithEmail}
                disabled={loading}
                className="bg-white h-14 rounded-2xl items-center justify-center shadow-lg shadow-white/20"
            >
                {loading ? (
                    <ActivityIndicator color="black" />
                ) : (
                    <Text className="text-black font-bold text-lg">Create Account</Text>
                )}
            </TouchableOpacity>

             <Text className="text-white/30 text-xs mt-6 text-center px-4">
               By creating an account, you agree to follow our Code of Conduct rooted in biblical principles.
            </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
