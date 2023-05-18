import Navigator from "./src/routes/navigator";

import * as SplashScreen from 'expo-splash-screen';
import React, {useState, useEffect, useCallback} from "react";
import * as SecureStore from 'expo-secure-store';
import * as FileSystem from 'expo-file-system';
import { deflate, inflate } from 'pako';
import * as Permissions from 'expo-permissions';
import axios from "axios";
import {View} from "react-native";
import StartPage from "./src/views/startPage/StartPage";
import SettingsView from "./src/views/settingsPage/SettingsView";
import SchedulePage from "./src/views/schedulePage/SchedulePage";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        // функия для получения данных с сервера
        const prepare = async () => {
            try {
                // lastUpdate
                const responseDate = await axios.get("https://sibsutis-schedule-api-chi.vercel.app/lastUpdate");

                try {
                    // получаем из памяти телефона дату последнего обновления
                    const phoneDate = await SecureStore.getItemAsync('lastUpdate');

                    // const fileUri = FileSystem.documentDirectory + 'schedule.json';
                    // const schedule = await FileSystem.readAsStringAsync(fileUri);


                    // если первый запуск или на сервере новое обновление
                    if (phoneDate === null || responseDate.data.date > parseInt(phoneDate)) {
                        // сохраняем дату последнего апдейта
                        await SecureStore.setItemAsync('lastUpdate', responseDate.data.date.toString());


                        // allGroups
                        try {
                            const responseAllGroups = await axios.get("https://sibsutis-schedule-api-chi.vercel.app/allGroups");
                            await SecureStore.setItemAsync('allGroups', JSON.stringify(responseAllGroups.data));
                        } catch (error) {
                            console.log('Error loading allGroups:', error);
                        }


                        // schedule
                        try {
                            const responseSchedule = await axios.get("https://sibsutis-schedule-api-chi.vercel.app/schedule");
                            console.log(typeof responseSchedule.data);
                            console.log(typeof JSON.stringify(responseSchedule.data));
                            const fileUri = FileSystem.documentDirectory + 'schedule.json';
                            await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(responseSchedule.data));
                        } catch (error) {
                            console.log('Error loading schedule:', error);
                        }

                        // start semestr
                        try {
                            const responseStartSemestr = await axios.get("https://sibsutis-schedule-api-chi.vercel.app/startSemestr");
                            await SecureStore.setItemAsync('startSemestr', responseStartSemestr.data.date.toString());
                        } catch (error) {
                            console.log('Error loading start semestr:', error);
                        }
                    }
                } catch (error) {
                    console.log('Error loading date:', error);
                }
            } catch (error) {
                console.log('Error loading lastUpdate:', error);
            } finally {
                setAppIsReady(true);
            }

            // await new Promise(resolve => setTimeout(resolve, 10000));
        }

        prepare();
    }, []);

    useEffect(() => {
        const hideSplashScreen = async () => {
            if (appIsReady) {
                await SplashScreen.hideAsync();
            }
        };

        hideSplashScreen();
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <Navigator/>
    );
}