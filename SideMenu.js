import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const SideMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(-250)).current;

  const toggleMenu = () => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? -250 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { id: 1, title: 'Таймер записи' },
    { id: 2, title: 'HDR' },
    { id: 3, title: 'Отзеркаливание' },
    { id: 4, title: 'Соотношение' },
    { id: 5, title: 'Качество' },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Text style={styles.menuButtonText}>{isOpen ? '×' : '☰'}</Text>
      </TouchableOpacity>

      <Animated.View 
        style={[
          styles.menu,
          { transform: [{ translateX: slideAnim }] }
        ]}
      >
        <Text style={styles.menuTitle}>Настройки</Text>
        
        {menuItems.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.menuItem}
            onPress={() => console.log(item.title + ' pressed')}
          >
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 2,
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  menuButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 80,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SideMenu;