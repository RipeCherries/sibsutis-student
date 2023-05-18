import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import StartPage from "../views/startPage/StartPage";
import GroupSearch from "../views/groupSearchPage/GroupSearch";
import SchedulePage from "../views/schedulePage/SchedulePage";
import {useEffect, useState} from "react";
import * as SecureStore from "expo-secure-store";
import SettingsView from "../views/settingsPage/SettingsView";
import GroupSearchTMP from "../views/groupSearchPage/GroupSearchTMP";
import SchedulePageTMP from "../views/schedulePage/SchedulePageTMP";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    const [group, setGroup] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadGroup = async () => {
            try {
                const data = await SecureStore.getItemAsync("group");
                console.log(data);
                setGroup(data);
            } catch (error) {
                console.log('Error loading data:', error);
            } finally {
                setLoading(true);
            }
        };

        loadGroup();
    }, []);

    const stackScreensGroup = [
        <Stack.Screen name="SchedulePage" component={SchedulePage} />,
        <Stack.Screen name="SearchGroupPage" component={GroupSearch} />,
        <Stack.Screen name="SettingsPage" component={SettingsView} />,
        <Stack.Screen name="SearchGroupTMP" component={GroupSearchTMP} />,
        <Stack.Screen name="SchedulePageTMP" component={SchedulePageTMP} />
    ];

    const stackScreensNoGroup = [
        <Stack.Screen name="StartPage" component={StartPage} />,
        <Stack.Screen name="SearchGroupPage" component={GroupSearch} />,
        <Stack.Screen name="SchedulePage" component={SchedulePage} />,
        <Stack.Screen name="SettingsPage" component={SettingsView} />,
        <Stack.Screen name="SearchGroupTMP" component={GroupSearchTMP} />,
        <Stack.Screen name="SchedulePageTMP" component={SchedulePageTMP} />
    ];

    console.log(group);

    if (!loading) {
        return null; // Render a loader or any other placeholder while loading
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    group ? (
                        stackScreensGroup.map((screen, index) => (
                            <Stack.Screen key={index} {...screen.props} />
                        ))
                    ) : (
                        stackScreensNoGroup.map((screen, index) => (
                            <Stack.Screen key={index} {...screen.props} />
                        ))
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;