import { StyleSheet, View, TextInput } from "react-native";
import SearchIcon from "../images/SearchIcon";

import Styles from "./search-field.scss";

const SearchFiled = () => {
    return(
        <View style={Styles.search__container}>
            <View style={Styles.search__container_wrapper}>
                <SearchIcon/>
                <TextInput
                    style={Styles.search__container_wrapper_input}
                    placeholder="Поиск по группе"
                />
            </View>
        </View>
    );
}

export default SearchFiled;