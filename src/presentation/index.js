

import React, { Component } from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Quote, Slide, SlideSet,
    TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";


import ReactExample from './react-example';
import { FolderStructure, Folder, File } from './folders';
import NativeExample from './native-example';

import createTheme from "spectacle/lib/themes/default";
import { IPhone, Android } from './phones';

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#1aa4d1",
    quartenary: "#CECECE",
    text: "black"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

const images = {
    reactNativeLogo: require("../assets/logos/react-native.png"),
    reactNativeLogoLarge: require("../assets/logos/l_react-native-logo.png"),
    reactNativeElements: require("../assets/react-native-elements.png"),
    reactNativeMaterial1: require("../assets/reactNativeMaterial1.gif"),
    reactNativeMaterial2: require("../assets/reactNativeMaterial2.gif"),
    reactNativeMaterial3: require("../assets/reactNativeMaterial3.gif"),
    androidCheckin: require('../assets/android-checkin.png'),
    androidMenu: require('../assets/android-menu.png'),

    androidSampleApp: require('../assets/android-sample-app.png'),
    iosSampleApp: require('../assets/ios-sample-app.png'),
    debugging: require('../assets/debugging.gif'),
    hotReload: require('../assets/hot-reload.gif'),
    inspectorCloseup: require('../assets/inspector-closeup.png'),
    networkInspector: require('../assets/network-inspector.png'),
    stackTrace: require('../assets/stack-trace.png'),
    navigationAndroid: require('../assets/navigation-android.gif'),
    navigationIos: require('../assets/navigation-ios.gif'),

    expoLogo: require('../assets/expo/expo-io-logo.png'),
    expoSS1: require('../assets/expo/expo_ss_1.png'),
    expoSS2: require('../assets/expo/expo_ss_2.png'),
    expoSS3: require('../assets/expo/expo_ss_3.png'),
    expoSS4: require('../assets/expo/expo_ss_4.png'),
    expoSS5: require('../assets/expo/expo_ss_5.png'),

    sepComponentSS1: require('../assets/sep_components/sep_component_ss1.png'),
    sepComponentSS2: require('../assets/sep_components/sep_component_ss2.png'),
    sepComponentSS3: require('../assets/sep_components/sep_component_ss3.png'),
    sepComponentSS4: require('../assets/sep_components/sep_component_ss4.png'),
    sepComponentSS5: require('../assets/sep_components/sep_component_ss5.png'),

    ggDictionarySS: require('../assets/gg_dic_ss.png'),

};

const logos = {
    airbnb: require('../assets/users/airbnb.png'),
    facebook: require('../assets/users/facebook.png'),
    uber: require('../assets/users/uber-eat.jpg'),
    instagram: require('../assets/users/instagram.jpg'),
    bloomberg: require('../assets/users/Bloomberg.jpg'),
    tesla: require('../assets/users/tesla.jpg'),
};

export default class extends Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
                <Slide transition={["zoom"]}  bgColor="tertiary">
                    <Image width="75%" src={images.reactNativeLogoLarge}/>
                    <Text textSize={24} textColor='white' textAlign="right">Yusuf Emre Durur</Text>
                    <Text textSize={20} textColor='white' textAlign="right">26.07.2017</Text>
                </Slide>
                <Slide transition={["zoom", "fade"]} bgColor="primary">
                    <Heading size={2} textColor='tertiary'>Contents</Heading>
                    <List>
                        <ListItem>Introduction</ListItem>
                        <ListItem>What is React and React Native? And Why React Native?</ListItem>
                        <ListItem>Getting Started</ListItem>
                        <ListItem>Building</ListItem>
                        <ListItem>Examples</ListItem>
                        <ListItem>Think React</ListItem>
                        <ListItem>React UI Components</ListItem>
                    </List>
                </Slide>

                <Slide transition={["zoom", "fade"]} bgColor="primary">
                    <Heading size={2} textColor='tertiary'>... What is React?</Heading>
                    <List>
                        <Appear><ListItem>A powerful way to construct user interfaces</ListItem></Appear>
                        <Appear><ListItem>Built upon the concept of Components</ListItem></Appear>
                        <Appear><ListItem>A JavaScript library used and developed by Facebook</ListItem></Appear>
                        <Appear><ListItem>Open Source</ListItem></Appear>
                    </List>
                </Slide>

                <Slide
                    notes={`
            Show that you can modify the element in real time.

            Modify the text of the component.
            Change MyComponent to Foo, see it break.
          `}
                >
                    <ReactExample />
                </Slide>

                <Slide transition={["zoom", "fade"]} bgColor="primary" color="text">
                    <Heading size={2} textColor='tertiary'>react-native?</Heading>
                    <List>
                        <Appear><ListItem>Developing phone apps, with React</ListItem></Appear>
                        <Appear><ListItem>Supports Android, and iOS</ListItem></Appear>
                        <Appear><ListItem>Truly native - not just a web view</ListItem></Appear>
                    </List>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        So Why React Native?
                    </Text>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Getting Started
                    </Text>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Installing dependencies
                    </Text>

                    <CodePane
                        lang="jsx"
                        source={`
> brew install node
> brew install watchman
> npm install -g react-native-cli
`.trim()}
                        margin="20px auto; font-size:18px"
                    />

                    <Appear>
                        <Link
                            target="_blank"
                            textColor="tertiary"
                            href="https://facebook.github.io/react-native/docs/getting-started.html"
                        >
                            https://facebook.github.io/react-native/docs/getting-started.html
                        </Link>
                    </Appear>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Creating a new project
                    </Text>

                    <CodePane
                        lang="jsx"
                        source={`
> react-native init AwesomeProject

...

✨  Done in 5.11s.

To run your app on iOS:
   cd /Users/you/Documents/AwesomeProject
   react-native run-ios
   - or -
   Open ios/AwesomeProject.xcodeproj in Xcode
   Hit the Run button

To run your app on Android:
   cd /Users/you/Documents/AwesomeProject
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-android
`.trim()}
                        margin="20px auto"
                    />
                </Slide>

                <Slide transition={["slide"]}>
                    <FolderStructure>
                        <Folder name='AwesomeProject' textColor='tertiary'>
                            <Folder name='__tests__'/>

                            <Folder name='android'>
                                <Folder name='app' textColor='grey'/>
                                <Folder name='gradle' textColor='grey'/>
                            </Folder>

                            <Folder name='ios'>
                                <Folder name='AwesomeProject.xcodeproj' textColor='grey'/>
                                <Folder name='AwesomeProjectTests' textColor='grey'/>
                            </Folder>

                            <File textColor='grey'>
                                index.android.js
                            </File>
                            <File textColor='grey'>
                                index.ios.js
                            </File>
                        </Folder>
                    </FolderStructure>
                </Slide>

                <Slide transition={["slide"]}>
                    <Heading size={3} textColor="black">
                        Running
                    </Heading>

                    <CodePane
                        lang="jsx"
                        source={`
> react-native run-ios

> emulator @Nexus_5_API_23 -dns-server 8.8.8.8
> react-native run-android
`.trim()}
                        margin="20px auto"
                    />

                    <Layout>
                        <Fill>
                            <Image width="50%" src={images.androidSampleApp}/>
                        </Fill>
                        <Fill>
                            <Image width="50%" src={images.iosSampleApp}/>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["slide"]}>
                    <Layout>
                        <Fill>
                            <Image width="50%" src={images.expoLogo}/>
                        </Fill>
                    </Layout>

                    <Link
                        target="_blank"
                        textColor="tertiary"
                        href="https://expo.io/"
                    >
                        https://expo.io/
                    </Link>
                </Slide>

                <Slide transition={["slide"]}>
                    <Layout>
                        <Heading size={6} textColor="tertiary">
                            Expo step 1 (Download expo app)
                        </Heading>
                    </Layout>

                    <Layout>
                        <Fill>
                            <Image width="100%" src={images.expoSS1}/>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["slide"]}>
                    <Layout>
                        <Heading size={6} textColor="tertiary">
                            Expo step 2 (Create new project)
                        </Heading>
                    </Layout>

                    <Layout>
                        <Fill>
                            <Image width="80%" src={images.expoSS2}/>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["slide"]}>
                    <Layout>
                        <Heading size={6} textColor="tertiary">
                            Expo step 3 (Type name and create)
                        </Heading>
                    </Layout>

                    <Layout>
                        <Fill>
                            <Image width="50%" src={images.expoSS4}/>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["slide"]}>
                    <Layout>
                        <Heading size={6} textColor="tertiary">
                            Expo step 4 (Run on ios)
                        </Heading>
                    </Layout>

                    <Layout>
                        <Fill>
                            <Image width="80%" src={images.expoSS5}/>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Building Tools
                    </Text>
                    <Image width="35%" src={images.androidMenu}/>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Debug JS Remotely
                    </Text>
                    <Image width="80%" src={images.debugging}/>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Enable Hot Reloading
                    </Text>
                    <Image width="80%" src={images.hotReload}/>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Element Inspector
                    </Text>

                    <Image width="60%" src={images.inspectorCloseup}/>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Network Inspector
                    </Text>

                    <Image width="60%" src={images.networkInspector}/>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Stack Trace
                    </Text>

                    <Image width='35%' src={images.stackTrace}/>
                </Slide>

                <Slide transition={["zoom", "fade"]} bgColor="primary">
                    <Heading size={5}  textColor='tertiary'>How to code with React-Native?</Heading>
                    <List>
                        <Appear><ListItem>Default React Components - View, Text, Image, etc</ListItem></Appear>
                        <Appear><ListItem>Style Sheet support, including flexbox</ListItem></Appear>
                        <Appear><ListItem>Animations</ListItem></Appear>
                        <Appear><ListItem>Navigators</ListItem></Appear>
                    </List>
                    <Appear>
                        <Link
                            target="_blank"
                            textColor="tertiary"
                            href="https://facebook.github.io/react-native/docs/native-components-ios.html"
                        >React Native Components</Link>
                    </Appear>
                </Slide>

                <Slide>
                    <Heading size={5} textColor='tertiary'>Basic React Native Component</Heading>
                    <NativeExample code={`
import React from 'react';
import { AppRegistry, View, Text, Image, TouchableOpacity } from 'react-native';

// View, similar to div
// Text, similar to span
class HelloWorldApp extends React.Component {
  render() {
    const picture = {
      uri: 'http://angular.github.io/react-native-renderer/assets/react.png'
    };
    const {buttonStyle, textStyle} = styles;
    return (
      <View>
        <Text>
          Hello world!
        </Text>
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}>
                Button
            </Text>
        </TouchableOpacity>
        <Image
          source={picture}
          style={{width: 200, height: 200,  backgroundColor: '#000'}}
        />
      </View>
    );
  }
}
const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        margin: 10
    }

};
// Register your App, rather than mounting like before
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
          `}/>

                </Slide>

                <Slide transition={["slide"]} bgColor="white">
                    <Heading size={1} caps fit textColor="tertiary">
                        Think React
                    </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="black">
                    <Layout>
                        <Heading size={6} textColor="white">
                            Separation of Components!
                        </Heading>
                    </Layout>

                    <Layout>
                        <Fill>
                            <Image width="100%" src={images.sepComponentSS1}/>
                        </Fill>
                    </Layout>
                </Slide>
                <Slide transition={["slide"]} bgColor="black">
                    <Layout>
                        <Heading size={6} textColor="white">
                            Separation of Components!
                        </Heading>
                    </Layout>

                    <Layout>
                        <Fill>
                            <Image width="100%" src={images.sepComponentSS2}/>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["slide"]} bgColor="black">
                    <Layout>
                        <Heading size={6} textColor="white">
                            Separation of Components!
                        </Heading>
                    </Layout>

                    <Layout>
                        <Fill>
                            <Image width="100%" src={images.sepComponentSS3}/>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["slide"]} bgColor="black">
                    <Layout>
                        <Heading size={6} textColor="white">
                            Separation of Components!
                        </Heading>
                    </Layout>

                    <Layout>
                        <Fill>
                            <Image width="100%" src={images.sepComponentSS4}/>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["slide"]} bgColor="black">
                    <Layout>
                        <Heading size={6} textColor="white">
                            Separation of Components!
                        </Heading>
                    </Layout>

                    <Layout>
                        <Fill>
                            <Image width="100%" src={images.sepComponentSS5}/>
                        </Fill>
                    </Layout>
                </Slide>



                <Slide transition={["slide"]} bgColor="tertiary">
                    <Heading size={1} caps fit textColor="white">
                        Other Components Libraries...
                    </Heading>
                </Slide>

                <Slide transition={["slide"]}>
                    <Heading size={3} textColor="black">
                        React Native Material UI
                    </Heading>

                    <Layout>
                        <Fill>
                            <Image width="75%" src={images.reactNativeMaterial1}/>
                        </Fill>
                        <Fill>
                            <Image width="75%" src={images.reactNativeMaterial2}/>
                        </Fill>
                        <Fill>
                            <Image width="75%" src={images.reactNativeMaterial3}/>
                        </Fill>
                    </Layout>

                    <Link
                        target="_blank"
                        textColor="tertiary"
                        href="https://github.com/xotahal/react-native-material-ui"
                    >
                        https://github.com/xotahal/react-native-material-ui
                    </Link>
                </Slide>

                <Slide transition={["slide"]}>
                    <Heading size={1} fit textColor="black">
                        React Native Elements
                    </Heading>
                    <Image width="75%" src={images.reactNativeElements}/>
                    <Link
                        target="_blank"
                        textColor="tertiary"
                        href="https://github.com/react-native-community/react-native-elements"
                    >
                        https://github.com/react-native-community/react-native-elements
                    </Link>
                </Slide>

                <Slide transition={["slide"]}>
                    <Text textColor="tertiary">
                        Who's using it?
                    </Text>

                    <Layout>
                        <Fill>
                            <Image
                                className='show-case__logo'
                                src={logos.airbnb}
                            />
                            <Text textColor='grey'>Airbnb</Text>
                        </Fill>

                        <Fill>
                            <Image
                                className='show-case__logo'
                                src={logos.facebook}
                            />
                            <Text textColor='grey'>Facebook</Text>
                        </Fill>

                        <Fill>
                            <Image
                                className='show-case__logo'
                                src={logos.uber}
                            />
                            <Text textColor='grey'>Uber Eat</Text>
                        </Fill>
                    </Layout>

                    <div className='show-case__separator' />

                    <Layout>
                        <Fill>
                            <Image
                                className='show-case__logo'
                                src={logos.instagram}
                            />
                            <Text textColor='grey'>Instagram</Text>
                        </Fill>

                        <Fill>
                            <Image
                                className='show-case__logo'
                                src={logos.bloomberg}
                            />
                            <Text textColor='grey'>Bloomberg</Text>
                        </Fill>

                        <Fill>
                            <Image
                                className='show-case__logo'
                                src={logos.tesla}
                            />
                            <Text textColor='grey'>Tesla</Text>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["spin", "slide"]} bgColor="tertiary">
                    <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
                        Questions?
                    </Heading>
                </Slide>

                <Slide transition={["spin", "slide"]} bgColor="tertiary">
                    <Heading size={5} caps fit lineHeight={1.5} textColor="primary">
                        Demo (GG Dictionary)
                    </Heading>
                    <Image width="30%" src={images.ggDictionarySS}/>
                </Slide>
            </Deck>
        );
    }
}