import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { MapPin, CheckCircle2, XCircle, Camera } from 'lucide-react-native';

export default function VerifyScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'search' | 'locate' | 'success'>('search');
  
  // Mock Target Church (e.g., coordinates for a central location or just use current location for demo)
  // For demo purposes, we'll verify if the user is within 100 meters of "Elevation Church (Ballantyne)"
  // Elevation Ballantyne approx: 35.0531, -80.8507
  const TARGET_CHURCH = {
    name: "Elevation Church",
    latitude: 35.0531,
    longitude: -80.8507
  };

  async function requestLocation() {
    setLoading(true);
    setErrorMsg(null);

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      setLoading(false);
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setLoading(false);
    
    // For demo: Always succeed if we got location, or check distance
    // const dist = getDistanceFromLatLonInKm(location.coords.latitude, location.coords.longitude, TARGET_CHURCH.latitude, TARGET_CHURCH.longitude);
    // if (dist < 0.2) setStep('success'); else setStep('locate'); // 200 meters
    
    // MOCKING SUCCESS for User Experience Demo
    setTimeout(() => {
        setStep('success');
    }, 1500);
  }

  useEffect(() => {
    if (step === 'locate') {
        requestLocation();
    }
  }, [step]);

  return (
    <View className="flex-1 bg-[#030014]">
      {/* Background Gradient */}
      <LinearGradient
        colors={['#030014', '#0f0529', '#030014']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      />

      <SafeAreaView className="flex-1 p-6">
        
        {/* Header */}
        <View className="items-center mb-12 mt-4">
             <View className="w-16 h-16 bg-amber-500/10 rounded-full items-center justify-center mb-4 border border-amber-500/30">
                 <MapPin color="#FFD700" size={32} />
             </View>
             <Text className="text-2xl font-bold text-white">The Sunday Seal</Text>
             <Text className="text-white/50 text-center mt-2 max-w-xs">Verify your attendance to unlock exclusive community features.</Text>
        </View>

        {/* Content Box */}
        <View className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-6 items-center justify-center">
            
            {step === 'search' && (
                <>
                    <Text className="text-white font-bold text-lg mb-2">Target: {TARGET_CHURCH.name}</Text>
                    <Text className="text-white/40 text-center mb-8">Please ensure you are on the premises.</Text>
                    
                    <TouchableOpacity 
                        onPress={() => setStep('locate')}
                        className="bg-white w-full h-14 rounded-2xl items-center justify-center"
                    >
                        <Text className="text-black font-bold text-lg">I'm Here</Text>
                    </TouchableOpacity>
                </>
            )}

            {step === 'locate' && (
                <>
                    <View className="mb-8 relative">
                        <View className="absolute inset-0 bg-cyan-500/30 rounded-full blur-xl animate-pulse" />
                        <MapPin color="#00FFFF" size={64} />
                    </View>
                    <Text className="text-white font-bold text-xl mb-2">Verifying Location...</Text>
                    <Text className="text-white/40 text-sm mb-8">Triangulating coordinates...</Text>
                    
                     {/* Auto-trigger handled by useEffect */}
                    <ActivityIndicator color="#00FFFF" size="large" />
                </>
            )}

            {step === 'success' && (
                <>
                    <View className="mb-8">
                        <CheckCircle2 color="#4ade80" size={80} />
                    </View>
                    <Text className="text-white font-bold text-2xl mb-2">Verified!</Text>
                    <Text className="text-white/60 text-center mb-8">You have successfully checked in at Elevation Church.</Text>
                    
                    <View className="w-full bg-white/5 p-4 rounded-xl mb-6">
                        <Text className="text-amber-400 font-bold text-center text-sm uppercase tracking-widest">Gather Mode Unlocked</Text>
                    </View>

                    <TouchableOpacity 
                         onPress={() => setStep('search')}
                        className="bg-white/10 w-full h-14 rounded-2xl items-center justify-center border border-white/10"
                    >
                        <Text className="text-white font-bold">Done</Text>
                    </TouchableOpacity>
                </>
            )}

        </View>

      </SafeAreaView>
    </View>
  );
}
