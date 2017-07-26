

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
    city: require("../assets/city.jpg"),
    buttons: require("../assets/buttons.png"),
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
    howItWorks: require('../assets/how-it-works.png'),
    jestExample: require('../assets/jest-example.png'),
    jackie: require('../assets/jackie.jpg'),
    navigationAndroid: require('../assets/navigation-android.gif'),
    navigationIos: require('../assets/navigation-ios.gif'),

    reduxStateTree1: require('../assets/redux-state-tree-1.png'),
    reduxStateTree2: require('../assets/redux-state-tree-2.png'),
    reduxTimeTravel: require('../assets/redux-time-travel.gif'),
};

const logos = {
    airbnb: require('../assets/users/airbnb.png'),
    facebook: require('../assets/users/facebook.png'),
    gyroscope: require('../assets/users/gyroscope.png'),
    instagram: require('../assets/users/instagram.jpg'),
    robin: require('../assets/users/robin.png'),
    vogue: require('../assets/users/vogue.jpg'),
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
                        <Appear><ListItem>Introduction</ListItem></Appear>
                        <Appear>

                            <ListItem>
                                What is React and React Native?
                                <List>
                                    <ListItem>Problems It Solves</ListItem>
                                    <ListItem>What technologies does it comprise of?</ListItem>
                                </List>
                            </ListItem>

                        </Appear>
                        <Appear><ListItem>Getting Started</ListItem></Appear>
                        <Appear><ListItem>Examples</ListItem></Appear>
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
                        margin="20px auto"
                    />

                    <Appear>
                        <Link
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

                <Slide
                    notes={`
            Show that you can modify the element in real time.

            Modify the text of the component.
            Change MyComponent to Foo, see it break.
          `}
                >
                    <ReactExample />
                </Slide>


                <Slide transition={["zoom", "fade"]} bgColor="primary">
                    <Heading size={5}  textColor='tertiary'>How to code with React-Native?</Heading>
                    <List>
                        <Appear><ListItem>Default React Components - View, Text, Image, etc</ListItem></Appear>
                        <Appear><ListItem>Style Sheet support, including flexbox</ListItem></Appear>
                        <Appear><ListItem>Animations</ListItem></Appear>
                        <Appear><ListItem>Navigators</ListItem></Appear>
                        <Appear><ListItem>XHR / AJAX Support</ListItem></Appear>
                    </List>
                </Slide>

                <Slide>
                    <Heading size={5} textColor='tertiary'>Useful Components</Heading>
                    <NativeExample code={`
import React from 'react';
import { AppRegistry, View, Text, Image, Button } from 'react-native';

// View, similar to div
// Text, similar to span
class HelloWorldApp extends React.Component {
  render() {
    const picture = {
      uri: 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif'
    };

    return (
      <View>
        <Text>
          Hello world!
        </Text>
        <Button
          title="Button!"
          accessibilityLabel="Learn more about this button"
        />
        <Image
          source={picture}
          style={{width: 193, height: 110}}
        />
      </View>
    );
  }
}

// Register your App, rather than mounting like before
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
          `}/>

                    <Appear>
                        <Text>Note: Live preview != Native</Text>
                    </Appear>
                </Slide>

                <Slide transition={["spin", "slide"]} bgColor="tertiary">
                    <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
                        Questions?
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}