import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
  },
  avatar: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    marginRight: 16,
    borderRadius: 20,
  },
  owner: { marginBottom: 4 },
  name: { fontSize: 16, fontWeight: 'bold' },
});
