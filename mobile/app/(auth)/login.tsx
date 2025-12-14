import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
// import { LinearGradient } from 'expo-linear-gradient'; // Removed in favor of 3D background
import { ArrowLeft, Mail, Lock } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThreeKnot from '../../components/ThreeKnot';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    // TODO: Implement actual Supabase Auth here
    // const { error } = await supabase.auth.signInWithPassword({ email, password })
    
    setTimeout(() => {
        setLoading(false);
        // Mock Success
        router.replace('/(tabs)'); 
    }, 1500);
  }

  return (
    <View className="flex-1 bg-[#030014]">
       <ThreeKnot />
      
      <SafeAreaView className="flex-1 p-6">
        {/* Header */}
        {/* Header - Back arrow removed */}

        <View className="flex-1 justify-center max-w-sm mx-auto w-full">
            <Text className="text-4xl font-bold text-white mb-2">Welcome Back</Text>
            <Text className="text-white/50 mb-10">Sign in to find your divinely appointed match.</Text>

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

            {/* Sign In Button */}
            <TouchableOpacity 
                onPress={signInWithEmail}
                disabled={loading}
                className="bg-amber-400 h-14 rounded-2xl items-center justify-center shadow-lg shadow-amber-400/20"
            >
                {loading ? (
                    <ActivityIndicator color="black" />
                ) : (
                    <Text className="text-black font-bold text-lg">Sign In</Text>
                )}
            </TouchableOpacity>

            <TouchableOpacity className="mt-6 items-center">
                <Text className="text-cyan-400 font-medium">Forgot Password?</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
