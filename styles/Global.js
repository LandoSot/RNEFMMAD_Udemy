import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  container:{
    flex: 1,
    padding: 30
  },
  input: {
    borderColor: 'grey',
    borderBottomWidth: 1,
    margin: 10,
    paddingVertical: 6
  },
  tasksZone: {
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 10
  },
  pressZone: {
    height: '100%',
    width: '80%',
    paddingVertical: 10,
  }
})