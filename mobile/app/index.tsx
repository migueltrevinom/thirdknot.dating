import { Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient'; // Removed in favor of 3D background
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';
import ThreeKnot from '../components/ThreeKnot';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#030014]">
      {/* 3D Background */}
      <ThreeKnot />

      <SafeAreaView className="flex-1 items-center justify-center p-6">
          
           {/* Header / Logo */}
          <View className="items-center mb-20">
             <View className="flex-row items-center space-x-2 mb-6">
                 <View className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00FFFF]" />
                 <View className="w-4 h-4 rounded-full bg-white -mt-4 shadow-[0_0_15px_#FFFFFF]" />
                 <View className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_#FFD700]" />
             </View>
             <Text className="text-6xl font-bold text-white tracking-tighter text-center">
                 THIRD{'\n'}KNOT
             </Text>
             <Text className="text-cyan-200/80 text-xl mt-4 font-light tracking-widest uppercase text-center">
                 A cord of three strands{'\n'}is not quickly broken
             </Text>
          </View>

           {/* Bottom CTA */}
           <View className="w-full gap-4 max-w-sm">
                <Link href="/(auth)/signup" asChild>
                    <TouchableOpacity className="bg-white h-14 rounded-full items-center justify-center shadow-lg shadow-white/20">
                        <Text className="text-black font-bold text-lg">Create Account</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/(auth)/login" asChild>
                    <TouchableOpacity className="bg-white/5 border border-white/20 h-14 rounded-full items-center justify-center">
                        <Text className="text-white font-bold text-lg">Sign In</Text>
                    </TouchableOpacity>
                </Link>
           </View>

           <Text className="text-white/20 text-xs mt-12">
               By continuing, you agree to our Terms of Faith.
           </Text>

      </SafeAreaView>
    </View>
  );
}
