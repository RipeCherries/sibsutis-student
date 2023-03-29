import Calendar from "./src/components/calendar/Calendar";
import Day from "./src/components/day/Day";
import Lesson from "./src/components/lesson/Lesson";
import SearchFiled from "./src/components/searchField/SearchField";
import TabsBar from "./src/components/tabsBar/TabsBar";
import Navigator from "./src/routes/navigator";
import GroupSearch from "./src/views/groupSearchPage/GroupSearch";
import SettingsView from "./src/views/settingsPage/SettingsView";
import SchedulePage from "./src/views/schedulePage/SchedulePage";

export default function App() {
    return (
        // <Lesson time={"11:40 - 13:15"} title={"Программирование мобильных устройств (лк)"} teacher={"Нечта И. В."} room={"а. 202 (К.1)"}/>
        // <Calendar/>
        <SchedulePage></SchedulePage>
    );
}