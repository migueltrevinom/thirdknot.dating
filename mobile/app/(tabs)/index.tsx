import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Sparkles, AlertCircle } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#030014]">
      {/* Background Gradient */}
      <LinearGradient
        colors={['#030014', '#0f0529', '#030014']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      />

      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          
           {/* Header / Logo */}
          <View className="flex-row items-center justify-between mb-8">
              <View className="flex-row items-center space-x-2">
                 <View className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm" />
                 <Text className="text-xl font-bold text-white tracking-tight">ThirdKnot</Text>
             </View>
             <View className="w-8 h-8 rounded-full bg-white/10 items-center justify-center">
                 <Text className="text-xs">🔔</Text>
             </View>
          </View>

          <Text className="text-3xl font-bold text-white mb-6">Discovery</Text>

          {/* Action Card: Verify Church */}
           <View className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-3xl mb-8 relative overflow-hidden">
               <View className="absolute right-[-20] top-[-20] opacity-20">
                   <MapPin color="#FFD700" size={120} />
               </View>

               <View className="items-start mb-4">
                   <View className="bg-amber-500/20 px-3 py-1 rounded-full mb-2">
                       <Text className="text-amber-400 text-xs font-bold uppercase">Pending Action</Text>
                   </View>
                   <Text className="text-white text-xl font-bold">Verify Your Church</Text>
                   <Text className="text-white/60 text-sm mt-1">Unlock "Gather" mode and find people in your congregation.</Text>
               </View>

               <TouchableOpacity className="bg-amber-500 w-full h-12 rounded-xl items-center justify-center mt-2">
                   <Text className="text-black font-bold">Start Verification</Text>
               </TouchableOpacity>
           </View>

           {/* AI Matchmaker Teaser */}
           <Text className="text-xl font-bold text-white mb-4">Daily Suggestions</Text>
           <View className="bg-white/5 border border-white/10 rounded-3xl p-6 items-center justify-center h-60">
                <Sparkles color="rgba(255,255,255,0.3)" size={48} />
                <Text className="text-white/40 mt-4 text-center">
                    The Divine Agent is analyzing your profile...{'\n'}Complete your bio to get matches.
                </Text>
           </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
