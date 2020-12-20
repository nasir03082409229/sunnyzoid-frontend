import { NavigationContainer } from '@react-navigation/native';
import { View, createStackNavigator, HeaderStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import React from 'react';
import Splash from '../Splash';
import Home from '../Home';


const Stack = createStackNavigator();

const MyTransition = {
    gestureDirection: 'vertical',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                ],
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                }),
            },
        };
    },
};


const App = () => {

    return (

        <NavigationContainer>

            <Stack.Navigator initialRouteName='Splash' headerMode={'none'}>

                <Stack.Screen name="Splash" component={Splash} options={MyTransition} />
                <Stack.Screen name="Home" component={Home} options={MyTransition} />

            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default App;
