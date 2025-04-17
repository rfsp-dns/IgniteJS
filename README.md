# IgniteJS

> Create your own simple React-like framework. Less bloat. More control. Modern vibes.

---

### What is IgniteJS?

**IgniteJS** is a minimal framework inspired by ReactJS — but stripped down to the essentials.

Built for:

- Developers who want to **understand the core** of component-based rendering
- Projects that demand **performance, control, and zero bloat**
- Tinkerers and builders creating their **own modern frontend stack**

---

###  Why IgniteJS?

 **Familiar JSX syntax**  
 **Component-based rendering**  
 **Custom style system** (React Native–inspired)  
 **Server-side rendering** with config  
 **No virtual DOM, no overhead**  

---

###  Example

```.js
// App.js
import { Webpage, Title1, Block } from './components.js';
import { StyleSheet } from './StyleSheet.js';

const styles = StyleSheet.create({
  title: { fontSize: 24, color: 'blue' },
  block: { backgroundColor: '#eee', padding: 20, borderRadius: 8 },
});

export default function App() {
  return (
    <Webpage pageTitle="Hello World">
      <Title1 style={styles.title}>Welcome to IgniteJS</Title1>
      <Block style={styles.block}>This is a simple block</Block>
    </Webpage>
  );
}
