import React from "react";
import { View, Image, Text, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView } from "react-native";
import YouTube from 'react-native-youtube';
import { YouTubeStandaloneAndroid } from 'react-native-youtube';



const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.main}>
                <StatusBar backgroundColor={'#ff76bb'} />
                <Image style={styles.banner} source={require('../../Assets/banner.jpg')} />

                {/* <View style={styles.youtubeVideoContainer}> */}


                    {/* <YouTube
                        apiKey='05x-Zobgnwo' // Your YouTube Developer API Key
                        // videoId="UCGv3aujd3bYDdZEP7EKhMZg" // The YouTube video ID
                        videoId="05x-Zobgnwo" // The YouTube video ID
                        play // control playback of video with true/false
                        loop // control whether the video should loop when ended
                        onReady={e => { return null }}
                        onChangeState={e => { return null }}
                        onChangeQuality={e => { return null }}
                        onError={e => { return null }}
                        style={{ alignSelf: 'stretch', height: 300 }}
                    /> */}


                    <YouTube
                        apiKey='05x-Zobgnwo'
                        videoId="05x-Zobgnwo" // The YouTube video ID
                        play // control playback of video with true/false
                        fullscreen={false} // control whether the video should play in fullscreen or inline
                        loop // control whether the video should loop when ended
                        onReady={e => { return '' }}
                        onChangeState={e => { return '' }}
                        onChangeQuality={e => { return '' }}
                        onError={e => { return '' }}
                        style={{ width:'100%', height: 300 }}
                    />

                {/* </View> */}
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    main: { backgroundColor: '#000', flex: 1 },
    banner: { width: '100%', height: 200, resizeMode: 'stretch', },
    youtubeVideoContainer: { padding: 20, backgroundColor: 'yellow' }
})



export default Home;