import { openDatabase } from "react-native-sqlite-storage";

export default{
 db : openDatabase(
    {
        name: 'database.db',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
)
}